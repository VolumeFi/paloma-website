import Modal from 'components/Modal';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { usePostCreatePromocodeMutation } from 'services/api/nodesale';
import { randomNumber, randomString } from 'utils/string';

import style from './generatePromocodeModal.module.scss';
import { useRouter } from 'next/router';
import { StaticLink } from 'configs/links';

interface IGeneratePromocodeModal {
  className?: string;
  onClose: (e: boolean) => void;
  token: string;
  isAccess: boolean;
}

const GeneratePromocodeModal = ({ onClose, token, isAccess, className }: IGeneratePromocodeModal) => {
  const router = useRouter();
  const [postPromocode] = usePostCreatePromocodeMutation();

  const [promocode, setPromocode] = useState<string>();
  const [confirmed, setConfirm] = useState(false);
  const [isCopied, setCopied] = useState(false);

  const onClickCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(`https://www.palomachain.com/purchase/?code=${promocode}`);
  };

  useEffect(() => {
    if (isCopied) {
      const delayDebounceFn = setTimeout(() => {
        setCopied(false);
      }, 3000);

      return () => clearTimeout(delayDebounceFn);
    }
  }, [isCopied]);

  const generateCode = async () => {
    const stringCode = randomString();
    const numberCode = randomNumber();
    if (stringCode && stringCode.length === 4 && numberCode && numberCode.length === 4) {
      const code = stringCode + numberCode;
      setPromocode(code);
      try {
        const result = await postPromocode({ token, promocode: code });
        console.log('result', result);
        if (result.data && !result.error) {
          // toast.success(result.data.msg ?? 'Promocode has been requested successfully.');
          setConfirm(true);
          return;
        } else {
          toast.error(result.error['data']['msg'] ?? 'Failed! Please try again.');
          generateCode();
        }
      } catch (error) {
        toast.error('Failed! Please try again.');
        generateCode();
      }
    }
  };

  useEffect(() => {
    if (!promocode && isAccess) generateCode();
  }, [isAccess]);

  const onClickConfirm = async () => {
    if (promocode) {
      try {
        const result = await postPromocode({ token, promocode });
        console.log('result', result);
        if (result.data && !result.error) {
          toast.success(result.data.msg ?? 'Promocode has been requested successfully.');
          setConfirm(true);
          return;
        } else {
          toast.error(result.error['data']['msg'] ?? 'Failed! Please try again.');
          generateCode();
        }
      } catch (error) {
        toast.error('Failed! Please try again.');
        generateCode();
      }
    }
  };

  return (
    <Modal className={style.confirmModal} contentClassName={style.contentClassName} showHeader={false}>
      <div className={style.closeIcon} onClick={() => onClose(true)}>
        <img src="/assets/icons/close-black.png" alt="close-black" />
      </div>
      <img className={style.backgroundImg} src="/assets/icons/promocode_bg2.svg" alt="promocode_bg2" />
      {/* {confirmed ? ( */}
      {isAccess ? (
        <div className={style.confirmBody}>
          <h3 className={style.title}>Your Personal Promo Code</h3>
          <p className={style.text}>
            Share your unique 5% off promo code now and receive 10% of every sale made using your code.
          </p>
          <div className={style.promocodeCopy}>
            <p>{promocode}</p>
            <div className={style.copyBtn} onClick={onClickCopy}>
              {isCopied ? 'Copied' : 'Copy'}
            </div>
          </div>
        </div>
      ) : (
        <div className={style.confirmBody}>
          <h2>Unlock your Promo Code by purchasing a LightNode</h2>
          <div className={style.confirmBtn} onClick={() => router.push(StaticLink.PURCHASE)}>
            Purchase a LightNode
          </div>
        </div>
      )}
      {/* ) : (
        <div className={style.confirmBody}>
          <h3 className={style.title}>Don’t Miss Out!</h3>
          <h3 className={style.title}>Get Paid A Referral Bonus</h3>
          <p className={style.text}>
            Create your unique 5% off promo code now and receive 10% of every sale made using your code.
          </p>
          <input disabled value={promocode} />
          <div className={style.clickAgain} onClick={() => onClickConfirm()}>
            Confirm
          </div>
        </div>
      )} */}
    </Modal>
  );
};

export default GeneratePromocodeModal;
