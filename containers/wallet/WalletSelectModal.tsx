import React from 'react';
import cn from 'classnames';
import Modal from 'components/Modal';
import Button from 'components/Button';
import LoadingBtn from 'components/Button/Loading';
import style from 'containers/wallet/WalletSelectModal.module.scss';

interface WalletSelectModalProps {
  onClose: () => void;
  onChooseMetamask: () => void;
  onChooseWalletConnect: () => void;
  web3ModalLoading: boolean;
  showConnecting: boolean;
  setShowConnecting: any;
}

const WalletSelectModal = ({
  onClose,
  onChooseMetamask,
  onChooseWalletConnect,
  web3ModalLoading,
  showConnecting,
  setShowConnecting,
}: WalletSelectModalProps) => {
  const handleChooseMetamask = () => {
    setShowConnecting(true);
    onChooseMetamask();
  };

  const handleChooseWalletConnect = () => {
    onChooseWalletConnect();
  };

  return (
    <Modal title={showConnecting ? 'Connecting...' : 'Connect Wallet'} onClose={onClose}>
      <section className={style.wizardView}>
        {!showConnecting && (
          <>
            <section className={style.stepWizard}>
              <p className={style.describeBar}>To Complete Your Purchase, Please Connect Your EVM Wallet.</p>
            </section>
            <p className={style.chooseWallet}>Choose a Wallet</p>

            <Button className={style.connectWalletBtn} type="grey" onClick={() => handleChooseMetamask()}>
              <img src="/assets/wallets/metamask.svg" alt="" />
            </Button>
            <Button
              className={cn(style.connectWalletBtn, style.walletConnect)}
              type={web3ModalLoading ? 'disabled' : 'grey'}
              onClick={() => handleChooseWalletConnect()}
              disabled={web3ModalLoading}
            >
              {web3ModalLoading ? (
                <>
                  <img src="/assets/icons/loading_circle.svg" height="25px" style={{ marginTop: 5 }} />
                  <span>Loading...</span>
                </>
              ) : (
                <>
                  <img src="/assets/wallets/walletconnect.svg" alt="" />
                </>
              )}
            </Button>
          </>
        )}
        {showConnecting && (
          <>
            <p className={style.text} style={{ textAlign: 'center' }}>
              Check your Wallet for a connection request.
            </p>
            <LoadingBtn />
            <section className={style.tryAgainWrapper} onClick={onChooseMetamask}>
              <img src="/assets/images/Try_again.svg" alt="" />
              <span className={style.balance}>Try again</span>
            </section>
          </>
        )}
      </section>
    </Modal>
  );
};

export default WalletSelectModal;