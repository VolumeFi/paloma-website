import BigNumber from 'bignumber.js';
import classNames from 'classnames';
import Purchase from 'components/Button/purchase';
import GeneratePromocodeModal from 'components/Modal/GeneratePromocodeModal';
import PendingTransactionModal from 'components/Modal/PendingTransactionModal';
import SuccessClaimModal from 'components/Modal/SuccessModal/SuccessClaimModal';
import { USER_ACCESS_TOKEN } from 'configs/constants';
import { getTxHashLink, StaticLink } from 'configs/links';
import useCookie from 'hooks/useCookie';
import useNodeSale from 'hooks/useNodeSale';
import useProvider from 'hooks/useProvider';
import { useWallet } from 'hooks/useWallet';
import { IBonusBalance } from 'interfaces/nodeSale';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import {
  useLazyGetBalancesQuery,
  useLazyGetLoginConfirmationQuery,
  useLazyGetPromocodeStatusQuery,
  useLazyGetStatusQuery,
} from 'services/api/nodesale';
import balanceTool from 'utils/balance';
import { convertTime, delay } from 'utils/date';
import { formatNumber } from 'utils/number';
import { hexToStringWithBech, shortenString } from 'utils/string';
import { checksumAddress } from 'viem';

import style from './buyMoreBoard.module.scss';

// Matched with /status backend api
const chainID = {
  eth: 1,
  bnb: 56,
  arb: 42161,
  op: 10,
  base: 8453,
  matic: 137,
};

const BuyMoreBoard = () => {
  const { wallet, openConnectionModal, requestSwitchNetwork } = useWallet();
  const provider = useProvider(wallet);
  const { getStoredData } = useCookie();
  const [getLoginConfirmation] = useLazyGetLoginConfirmationQuery();
  const [getPromocodeStatus] = useLazyGetPromocodeStatusQuery();
  const [getStatus] = useLazyGetStatusQuery();
  const [getBalances] = useLazyGetBalancesQuery();
  const { getBonusAmount, activateWallet, claimBonus } = useNodeSale({ wallet, provider });
  const router = useRouter();

  const [pageLoading, setPageLoading] = useState(true);
  const [token, setToken] = useState<string>();
  const [myAccount, setMyAccount] = useState({
    email: '',
    promo_code: '',
    status: 0, // 0: pending, 1: Active
    wallet_address: '',
  });
  const [totalRewards, setTotalRewards] = useState({
    rewards: '0',
    usd: '0',
  });
  const [myPurchaseStatus, setMyPurchaseStatus] = useState<any[]>();
  const [dataLoading, setDataLoading] = useState(false);
  const [rewardsLoading, setRewardsLoading] = useState(false);
  const [myAccountLoading, setMyAccountLoading] = useState(false);
  const [bonusLoading, setBonusLoading] = useState(false);
  const [bonusAmount, setBonusAmount] = useState<IBonusBalance[]>();
  const [openGeneratePromocodeModal, setOpenGeneratePromocodeModal] = useState(false);
  const [copyPromocode, setCopyPromocode] = useState(false);
  const [loadingIndex, setLoadingIndex] = useState<number>(-1);

  const [loadingClaim, setLoadingClaim] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [pendingTxHash, setPendingTxHash] = useState('');
  const [pendingModalTitle, setPendingModalTitle] = useState('');
  const [pendingModalText, setPendingModalText] = useState('');
  const [pendingModalProcess, setPendingModalProcess] = useState(false);
  const [claimedAmount, setClaimedAmount] = useState<number>();

  useEffect(() => {
    const checkLogin = async () => {
      const myToken = await getStoredData(USER_ACCESS_TOKEN);
      if (myToken.data) {
        const confirmResult = await getLoginConfirmation({ token: myToken.data });
        if (confirmResult.isSuccess && confirmResult.data && confirmResult.data['token']) {
          setToken(confirmResult.data['token']);
          setPageLoading(false);
          return;
        }
      }

      router.push(`${StaticLink.LOGIN}/?redirect=${StaticLink.BUYMOREBOARD}`);
    };
    checkLogin();
  }, []);

  useEffect(() => {
    if (token && !wallet?.account) {
      const call = async () => {
        // delay 1 second
        await delay(1000);
        openConnectionModal();
      };
      call();
    }
  }, [token]);

  const fetchMyAccount = async () => {
    setMyAccountLoading(true);

    const promocode = await getPromocodeStatus({ token });
    if (promocode.isSuccess) {
      setBonusLoading(true);

      const info = promocode.data[0];
      setMyAccount({
        email: info['email'],
        promo_code: info['promo_code'],
        status: info['status'], // 0: pending, 1: Active
        wallet_address: info['wallet_address'],
      });
    }

    setMyAccountLoading(false);
  };

  const fetchingBonusAmount = async () => {
    try {
      setBonusLoading(true);

      const balance = await getBonusAmount(myAccount.wallet_address);
      setBonusAmount(balance);
    } catch (error) {
      console.error(error);
    } finally {
      setBonusLoading(false);
    }
  };

  useEffect(() => {
    if (!myAccountLoading) {
      if (myAccount.promo_code && myAccount.status === 1 && myAccount.wallet_address) {
        fetchingBonusAmount();
      } else {
        setBonusLoading(false);
      }
    }
  }, [myAccountLoading, myAccount]);

  useEffect(() => {
    if (token) {
      fetchMyAccount();
    }
  }, [token]);

  const getMyPurchaseStatus = async () => {
    setDataLoading(true);
    const status = await getStatus({ buyer: checksumAddress(wallet.account) });
    if (status.isSuccess) {
      const statusData =
        status && status.data && status.data.length > 0
          ? [...status.data].sort((a, b) => {
              const aTime = new Date(a['created_at'].toString()).getTime();
              const bTime = new Date(b['created_at'].toString()).getTime();
              return aTime > bTime ? 1 : -1;
            })
          : status.data;

      setMyPurchaseStatus(statusData ?? status.data);
    }

    setDataLoading(false);
  };

  useEffect(() => {
    if (token && wallet && wallet.account) {
      const apiCall = async () => {
        getMyPurchaseStatus();
      };
      apiCall();
    }
  }, [wallet.account, token]);

  useEffect(() => {
    if (dataLoading) setRewardsLoading(true);

    let palomaAddresses = [];

    if (!dataLoading && myPurchaseStatus && myPurchaseStatus.length > 0) {
      myPurchaseStatus.map((purchase) => {
        const address = hexToStringWithBech(purchase['paloma_address']);
        const isAlreadyExist = palomaAddresses.find((pAddress) => pAddress === address);
        if (!isAlreadyExist) {
          palomaAddresses.push(address);
        }
      });

      const apiCall = async () => {
        if (palomaAddresses.length > 0) {
          const api = await getBalances({ addresses: palomaAddresses });
          if (api.isSuccess) {
            setTotalRewards({
              rewards: balanceTool.convertFromWei(api.data['total'], 2, 6),
              usd: balanceTool.convertFromWei(api.data['usd_total'], 2, 6),
            });
          }
        }

        setRewardsLoading(false);
      };
      apiCall();
    }

    if (myPurchaseStatus && myPurchaseStatus.length === 0) {
      setRewardsLoading(false);
    }
  }, [myPurchaseStatus, dataLoading]);

  const totalNodes = useMemo(() => {
    if (dataLoading) return '-';
    if (myPurchaseStatus && myPurchaseStatus.length > 0) {
      let sum = myPurchaseStatus.reduce(function (x, y) {
        return x + y['node_count'];
      }, 0);
      return sum;
    }
    return 0;
  }, [dataLoading, myPurchaseStatus]);

  const totalGrainBalance = useMemo(() => {
    if (dataLoading) return '-';
    if (myPurchaseStatus && myPurchaseStatus.length > 0) {
      let sum = myPurchaseStatus.reduce(function (x, y) {
        return new BigNumber(x).plus(BigNumber(y['grain_amount']));
      }, 0);
      return sum;
    }
    return new BigNumber(0);
  }, [dataLoading, myPurchaseStatus]);

  const totalGrainUSD = useMemo(() => {
    if (dataLoading) return '-';
    if (myPurchaseStatus && myPurchaseStatus.length > 0) {
      let sum = myPurchaseStatus.reduce(function (x, y) {
        return x + Number(balanceTool.convertFromWei(y['fund_usd_amount'], 0, 6));
      }, 0);
      return sum;
    }
    return new BigNumber(0);
  }, [dataLoading, myPurchaseStatus]);

  const closeCode = async (generated = false) => {
    setOpenGeneratePromocodeModal(false);
    if (generated) {
      setBonusLoading(true);
      await fetchMyAccount();
    }
  };

  const totalBonus = useMemo(() => {
    if (!bonusLoading && bonusAmount && bonusAmount.length > 0) {
      const amount = bonusAmount.reduce((acc, quote) => acc + Number(quote.amount.format), 0);
      return amount;
    } else {
      return 0;
    }
  }, [bonusLoading, bonusAmount]);

  const isAvailableActive = useCallback(
    (index: number) => {
      return myPurchaseStatus[index]['status'] < 2 && (index > 0 ? myPurchaseStatus[index - 1]['status'] >= 2 : true);
    },
    [myPurchaseStatus],
  );

  const onClickActive = async (index: number) => {
    if (isAvailableActive(index) && loadingIndex < 0) {
      try {
        setLoadingIndex(index);
        const chain_id = chainID[myPurchaseStatus[index]['chain_name']];
        const result = await requestSwitchNetwork(chain_id.toString());
        if (result) {
          const activate = await activateWallet(myPurchaseStatus[index]['paloma_address'], chain_id.toString());
          if (activate) {
            toast.success('Your Paloma LightNode Was Successfully Activated!');
            await getMyPurchaseStatus();
          }
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoadingIndex(-1);
      }
    }
  };

  const onClickCopyPromocode = (code: string) => {
    setCopyPromocode(true);
    navigator.clipboard.writeText(`https://www.palomachain.com/purchase/?code=${code}`);
  };

  useEffect(() => {
    if (copyPromocode) {
      const delayDebounceFn = setTimeout(() => {
        setCopyPromocode(false);
      }, 3000);

      return () => clearTimeout(delayDebounceFn);
    }
  }, [copyPromocode]);

  const callbackSuccess = async (amount: number) => {
    setClaimedAmount(amount);
    setPendingTxHash('');
    setSuccessModal(true);
  };

  const closeSuccessModal = async () => {
    setSuccessModal(false);
    setClaimedAmount(0);
    await fetchingBonusAmount();
  };

  const callbackWaiting = ({ txHash, txTitle, txText, txProcessing = false }) => {
    // OnWait handler
    if (txTitle !== undefined) setPendingModalTitle(txTitle);
    if (txText !== undefined) setPendingModalText(txText);
    if (txHash !== undefined) setPendingTxHash(txHash);
    setPendingModalProcess(txProcessing);
  };

  const callbackError = (e) => {
    toast.error(e ? e : 'Something went wrong');
  };

  const handleClaimBonus = async (bonus: IBonusBalance) => {
    if (BigNumber(bonus.amount.raw).comparedTo(0) > 0) {
      try {
        const result = await requestSwitchNetwork(bonus.chainId.toString());
        if (result) {
          const amount = await claimBonus(bonus, callbackError, callbackWaiting);
          return amount;
        }
      } catch (error) {
        console.error(error);
        return 0;
      }
    }
  };

  const onClickClaim = async () => {
    if (totalBonus > 0 && !loadingClaim) {
      try {
        setLoadingClaim(true);

        console.log('bonusAmount', bonusAmount);
        /**
         * Claim Bonus on all 6 chains
         * **Messy code due to for sequential execution**
         */
        const count = bonusAmount.length;
        let claimedAmount = 0;
        if (count > 0) claimedAmount += await handleClaimBonus(bonusAmount[0]);
        if (count > 1) claimedAmount += await handleClaimBonus(bonusAmount[1]);
        if (count > 2) claimedAmount += await handleClaimBonus(bonusAmount[2]);
        if (count > 3) claimedAmount += await handleClaimBonus(bonusAmount[3]);
        if (count > 4) claimedAmount += await handleClaimBonus(bonusAmount[4]);
        if (count > 5) claimedAmount += await handleClaimBonus(bonusAmount[5]);

        if (claimedAmount > 0) {
          callbackSuccess(claimedAmount);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoadingClaim(false);
      }
    }
  };

  return (
    <div>
      {pageLoading ? (
        <img src="/assets/icons/confirm-email.svg" alt="confirm-email" className={style.loadingImg} />
      ) : (
        <div className={style.buyMoreBoard}>
          <div className={style.myBalances}>
            <div className={style.balanceCard}>
              {dataLoading ? (
                <img src="/assets/icons/loading_circle.svg" height="25px" style={{ marginTop: 5 }} />
              ) : (
                <>
                  <p>Your Balance</p>
                  <h3>{formatNumber(totalGrainBalance.toString(), 0, 2)} GRAIN</h3>
                  <p className={style.usdValue}>${formatNumber(totalGrainUSD, 0, 2)}</p>
                </>
              )}
            </div>
            <div className={style.balanceCard}>
              {dataLoading || rewardsLoading ? (
                <img src="/assets/icons/loading_circle.svg" height="25px" style={{ marginTop: 5 }} />
              ) : (
                <>
                  <p>Total Rewards</p>
                  <h3>{formatNumber(totalRewards.rewards, 0, 2)} GRAIN</h3>
                  <p className={style.usdValue}>${formatNumber(totalRewards.usd, 0, 2)}</p>
                </>
              )}
            </div>
            <div className={classNames(dataLoading || bonusLoading ? style.balanceCard : style.bonusCard)}>
              {dataLoading || bonusLoading ? (
                <img src="/assets/icons/loading_circle.svg" height="25px" style={{ marginTop: 5 }} />
              ) : myAccount.promo_code ? (
                myAccount.status === 1 ? (
                  <div className={style.bonusBalanceCard}>
                    <div className={style.referralBonus}>
                      Total Referral Bonus<span>{formatNumber(totalBonus, 0, 2)} USDC</span>
                    </div>
                    <div className={style.bonusBtns}>
                      <button onClick={onClickClaim} className={totalBonus > 0 ? style.clickable : style.notClickable}>
                        {loadingClaim ? (
                          <img
                            src="/assets/icons/loading_circle.svg"
                            height="25px"
                            style={{ marginTop: 5, marginLeft: 5 }}
                          />
                        ) : (
                          <>
                            Claim Bonus <img src="/assets/icons/arrow.svg" alt="arrow" />
                          </>
                        )}
                      </button>
                      <button onClick={() => onClickCopyPromocode(myAccount.promo_code)}>
                        <img src="/assets/icons/copy_graypink.png" alt="copy" />
                        {copyPromocode ? 'Copied Code!' : 'Copy Code'}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className={style.bonusPendingCard}>
                    <p>Your Referral Promo Code Status</p>
                    <h3>Pending....</h3>
                    <p className={style.bonusFooter}>Your request will be processed in a few minutes.</p>
                  </div>
                )
              ) : (
                <>
                  <img className={style.bonusBg1} src="/assets/icons/promocode_bg1.png" alt="promocode_bg1" />
                  <div className={style.bonusText}>
                    Don’t Miss Out!
                    <br />
                    Get Paid A Referral Bonus
                    <button className={style.createPromocode} onClick={() => setOpenGeneratePromocodeModal(true)}>
                      Create Promo Code
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className={style.myHistoryTable}>
            <div className={style.tableHeader}>Your Paloma LightNodes</div>
            <table className={style.tableBody}>
              <thead>
                <tr className={style.tableRow}>
                  <th>
                    Paloma Address<span>Number of Nodes</span>
                  </th>
                  <th>Date</th>
                  <th>EVM Address</th>
                  <th>GRAINs Minted</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {dataLoading ? (
                  <tr>
                    <td>
                      <img src="/assets/icons/loading_circle.svg" height="42px" />
                    </td>
                  </tr>
                ) : myPurchaseStatus && myPurchaseStatus.length > 0 ? (
                  myPurchaseStatus.map((purchase, index) => (
                    <tr
                      className={classNames(style.tableTBody, index % 2 === 0 ? undefined : style.grayTableTBody)}
                      key={index}
                    >
                      <td>
                        {purchase['paloma_address'] &&
                          shortenString(hexToStringWithBech(purchase['paloma_address']), 9)}
                        <span>{formatNumber(purchase['node_count'], 0, 2)} LightNodes</span>
                      </td>
                      <td>{convertTime(purchase['created_at'].toString())}</td>
                      <td>{purchase['buyer'] && shortenString(purchase['buyer'], 6, 6)}</td>
                      <td>{formatNumber(purchase['grain_amount'], 0, 2)}</td>
                      <td className={style.activeButton}>
                        {loadingIndex === index ? (
                          <img src="/assets/icons/loading_circle.svg" height="25px" style={{ marginTop: 5 }} />
                        ) : +purchase['status'] < 2 ? (
                          <button
                            className={isAvailableActive(index) ? style.clickable : style.notClickable}
                            onClick={() => onClickActive(index)}
                          >
                            Active
                          </button>
                        ) : (
                          'Mining'
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td>
                      <p className={style.noActiveText}>The wallet currently does not have any active LightNodes.</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            <div className={style.tableFooter}>
              <p>Total: {totalNodes} LightNodes</p>
              <Purchase type="pink" text="+ Add a LightNode" />
            </div>
          </div>
        </div>
      )}
      {openGeneratePromocodeModal && <GeneratePromocodeModal onClose={(e) => closeCode(e)} token={token} />}
      <PendingTransactionModal
        show={loadingClaim}
        onClose={() => setLoadingClaim(false)}
        title={pendingModalTitle}
        text={pendingModalText}
        txHash={pendingTxHash}
        isProcessing={pendingModalProcess}
        blockExplorer={getTxHashLink(wallet.network)}
      />
      <SuccessClaimModal show={successModal} onClose={() => closeSuccessModal()} amount={claimedAmount} />
    </div>
  );
};

export default BuyMoreBoard;