import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ewallet.css";
import Card from "../card/Card";
import { deleteCard } from "../../redux/cardSlice";

const Ewallet = () => {
  const creditCard = useSelector((state) => state.cardInfo);
  const [state, setState] = useState(creditCard);
  const dispatch = useDispatch();

  useEffect(() => {
    setState(creditCard);
  }, [creditCard]);

  const toggleActive = (index) => {
    const activeCard = state.cardInformation[index];
    const filteredCards = state.cardInformation.filter((_, i) => i !== index);
    setState({
      ...state,
      cardInformation: [activeCard, ...filteredCards],
    });
  };

  const user = state.cardInformation[0];

  const toggleActiveStyle = (index) => {
    if (index === 0) {
      return "active";
    } else {
      return "inactive";
    }
  };

  const handleDeleteCard = (index) => {
    if (index !== 0) {
      dispatch(deleteCard(index));
    }
  };

  return (
    <>
      <h1>E-WALLET</h1>
      <ul>
        {state.cardInformation.map((credit, index) => (
          <li
            key={index}
            className={toggleActiveStyle(index)}
            onClick={() => {
              toggleActive(index);
            }}
          >
            <Card
              name={credit.cardName}
              cardNumber={credit.cardNumber}
              cardMonth={credit.cardMonth}
              cardYear={credit.cardYear}
              ccv={credit.ccv}
              bankName={credit.bankName}
            />
            {index !== 0 && (
              <button onClick={() => handleDeleteCard(index)}>Delete</button>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Ewallet;
