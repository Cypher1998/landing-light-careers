import './paymentdetails.scss';
import { toast } from 'react-toastify';

const PaymentDetails = ({ cardNumber }) => {
  const subTotal = 2497,
    tax = 119.64,
    promoCode = 60,
    totalAmount = subTotal + tax - promoCode;

  const payUp = () => {
    if (cardNumber === '0000 0000 0000 0000' || '') {
      toast.error('Invalid card details!');
      return;
    }
    toast.success('Payment success!');
  };

  return (
    <>
      <section className="paymentDetails">
        <div>
          <h4>subtotal</h4>
          <h4>&#8358;{subTotal.toFixed(2)}</h4>
        </div>
        <div>
          <h4>estimated tax</h4>
          <h4>&#8358;{tax}</h4>
        </div>
        <div>
          <h4>
            promotional code: <span>Z4KXLM9A</span>
          </h4>
          <h4>&#8358;{promoCode.toFixed(2)}</h4>
        </div>
      </section>
      <section className="paymentTotal">
        <button onClick={payUp}>complete payment</button>
        <h3>&#8358;{totalAmount}</h3>
      </section>
    </>
  );
};
export default PaymentDetails;
