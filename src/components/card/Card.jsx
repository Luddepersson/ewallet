import "../card/cards.css";

const Card = ({name, cardNumber, cardMonth, cardYear, ccv, bankName }) => {

  return (
    <>
      <div className="credit-card">
        <div className="credit-card__vendor">{bankName}</div>
        <div className="credit-card__number">{cardNumber}</div>
        <span className="credit-ccv">{ccv}</span>
        <div className="credit-card__info">
          <div className="credit-card__info_name">
            <div className="credit-card__info_label">CARDHOLDER NAME</div>
            <div>{name}</div>
          </div>

          <div className="credit-card__info_expiry">
            <div className="credit-card__info_label">VALID THRU</div>
            <div>
              {cardMonth} / {cardYear}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default Card;
