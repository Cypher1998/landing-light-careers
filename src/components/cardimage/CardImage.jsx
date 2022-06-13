import smartChip from '../../assets/smart-chip.jpg';
import masterLogo from '../../assets/mastercard.png';
import './cardImage.scss';
import { useState } from 'react';
import PaymentDetails from '../paymentdetails/PaymentDetails';
import { toast } from 'react-toastify';

const CardImage = () => {
  const [cardInfo, setCardInfo] = useState({
    cardNumber: '0000 0000 0000 0000',
    expiryDate: '00/00',
    cardName: 'john doe',
  });

  const [formData, setFormData] = useState({
    cardNumberText: '',
    expiryDateText: '',
    securityCodeText: '',
    cardNameText: '',
    saveCard: false,
  });

  const { cardName, cardNumber, expiryDate } = cardInfo;

  const {
    cardNameText,
    cardNumberText,
    securityCodeText,
    expiryDateText,
    saveCard,
  } = formData;

  const handleChange = (e) => {
    // console.log(e.target.value);
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    });
  };

  const handleInput = (e) => {
    let target = e.target,
      position = target.selectionEnd,
      length = target.value.length;

    target.value = target.value
      .replace(/[^\dA-Z]/g, '')
      .replace(/(.{4})/g, '$1 ')
      .trim();

    target.selectionEnd = position +=
      target.value.charAt(position - 1) === ' ' &&
      target.value.charAt(length - 1) === ' ' &&
      length !== target.value.length
        ? 1
        : 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      cardNameText === '' ||
      cardNumberText === '' ||
      expiryDateText === '' ||
      securityCodeText === ''
    ) {
      toast.error('Please fill all fields');
      return;
    } else if (
      cardNumberText.length !== 19 ||
      cardNumberText === '0000 0000 0000 0000'
    ) {
      toast.error('Invalid card number');
      return;
    }

    setCardInfo({
      ...cardInfo,
      cardName: cardNameText,
      cardNumber: cardNumberText,
      expiryDate: expiryDateText,
    });
    toast.success('Card details added successfully');

    setTimeout(() => {
      setFormData({
        ...formData,
        cardNumberText: '',
        expiryDateText: '',
        securityCodeText: '',
        cardNameText: '',
        saveCard: false,
      });
    }, 1000);
  };

  return (
    <>
      <section className="cardContainer">
        <div className="cardImage">
          <p className="cardNumText">card number</p>
          <h4 className="cardNumber">{cardNumber}</h4>
          <img src={smartChip} alt="smart-chip" />
          <p className="expiryText">expiration date</p>
          <h4 className="expiryNum">{expiryDate}</h4>
          <h5 className="cardUser">{cardName}</h5>
          <img src={masterLogo} alt="mastercard" className="mastercard" />
        </div>
        <div className="cardForm">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="cardNumber">Credit card number</label>
              <input
                type="text"
                name="cardNumberText"
                value={cardNumberText}
                onChange={handleChange}
                onInput={handleInput}
                placeholder="0000 0000 0000 0000"
                maxLength={19}
              />
            </div>
            <div>
              <label htmlFor="expiryDate">Expiration date</label>
              <input
                type="text"
                name="expiryDateText"
                value={expiryDateText}
                onChange={handleChange}
                maxLength={5}
                placeholder="00/00 month (01-12) year (22-26)"
                pattern="(0[1-9]|1[0-2])\/?(2[2-6]{1})"
              />
            </div>
            <div>
              <label htmlFor="securityCode">Security code</label>
              <input
                type="text"
                name="securityCodeText"
                value={securityCodeText}
                onChange={handleChange}
                maxLength={3}
                placeholder="000"
              />
            </div>
            <div>
              <label htmlFor="cardName">Name on card</label>
              <input
                type="text"
                name="cardNameText"
                value={cardNameText}
                onChange={handleChange}
                placeholder="John Doe"
              />
            </div>
            <div className="useOften">
              <input
                type="checkbox"
                name="saveCard"
                checked={saveCard}
                onChange={handleChange}
              />
              <span></span>
              <label htmlFor="useOften">
                Use this card for next time purchase
              </label>
            </div>
            <button type="submit">Add card</button>
          </form>
        </div>
      </section>
      <PaymentDetails cardNumber={cardNumber} />
    </>
  );
};
export default CardImage;
