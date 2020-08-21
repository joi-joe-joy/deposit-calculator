import React from 'react';
import {connect} from "react-redux";
import {getRate, getIncome} from "../../reducer/selectors";
import "./result-board.css";

const ResultBoard = (props) => {
  const {rate, income} = props;

  return (
    <div className="result">
      <div className="result__wrap-item">
        <label className="result__label">Процентная ставка</label>
        <p className="result__value">{rate}%</p>
      </div>
      <div className="result__wrap-item">
        <label className="result__label">Доход</label>
        <p className="result__value">{income}
          <span>₽</span>
        </p>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  rate: getRate(state),
  income: getIncome(state)
});

export {ResultBoard};
export default connect(mapStateToProps)(ResultBoard);