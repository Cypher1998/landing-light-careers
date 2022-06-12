import visa from '../../assets/visa.jpg';
import discover from '../../assets/discover.jpg';
import paypal from '../../assets/paypal.png';
import './paymentText.scss';

const PaymentTextOpt = () => {
  return (
    <section className="payment">
      <div className="paymentText">
        <h3>payment information</h3>
        <p>Choose your payment method.</p>
      </div>
      <div className="paymentOption">
        {/* <div> */}
        <img src={visa} alt="visa_img" />
        <img src={discover} alt="discover_img" />
        <div className="bigDot"></div>
        <img src={paypal} alt="paypal_img" />
      </div>
    </section>
  );
};
export default PaymentTextOpt;
