import Card from "../card/Card";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNewCard } from "../../redux/cardSlice";
import "../card/cards.css";

const initialCardData = {
  cardName: "",
  cardNumber: "",
  cardMonth: "",
  cardYear: "",
  ccv: "",
  bankName: "Visa", 
};


const AddCard = () => {
  const creditCard = useSelector((state) => state.cardInfo);
  const dispatch = useDispatch();
  const [values, setValues] = useState(initialCardData);

  useEffect(() => {
    console.log("redux state", creditCard);
    setValues({
      ...values,
      cardName: creditCard.cardInformation[0].cardName
    })
  }, [creditCard])

  const handleSubmit = (e) => {
    e.preventDefault();

    if (creditCard.cardInformation.length <= 3) {
      dispatch(addNewCard(values));
      setValues(initialCardData);
    } else {
      alert("You cant add more cards than 4");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };



  return (
    <>
      <h1>ADD A NEW BANK CARD</h1>
      <Card name={values.cardName} cardNumber={values.cardNumber} cardMonth={values.cardMonth} cardYear={values.cardYear} ccv={values.ccv} bankName={values.bankName} />
      <div>
        <form className="myForm" onSubmit={handleSubmit}>
          <label>
            Cardholder name
            <input
              type="text"
              name="cardName"
              value={values.cardName}
              onChange={handleChange}
              disabled
            />
          </label>

          <label>
            Card number
            <input
            type="text"
              maxLength="16"
              placeholder="1234 5678 9101 1123"
              name="cardNumber"
              value={values.cardNumber}
              onChange={handleChange}
              />
          </label>

          <div>
            <label>VALID THRU</label>
            <div>
              Month
              <input
                type="text"
                placeholder="12"
                maxLength="2"
                name="cardMonth"
                value={values.cardMonth}
                onChange={handleChange}
                />
            </div>
            <div>
              Year
              <input
                type="text"
                placeholder="23"
                maxLength="2"
                name="cardYear"
                value={values.cardYear}
                onChange={handleChange}
                />
            </div>
          </div>

          <label>
            CCV
            <input
              type="text"
              placeholder="123"
              maxLength="3"
              name="ccv"
              value={values.ccv}
              onChange={handleChange}
              />
          </label>

          <select name="bankName" value={values.bankName} onChange={handleChange}>
            <option value="Mastercard">MasterCard</option>
            <option value="Visa">Visa</option>
            <option value="American Express">American Express</option>
          </select>

          <button type="submit">ADD CARD</button>
        </form>
      </div>
    </>
  );
};

export default AddCard;
