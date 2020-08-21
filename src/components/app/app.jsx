import React from 'react';
import {connect} from "react-redux";
import Calculator from "../calculator/calculator";
import ResultBoard from "../result-board/result-board";
import Print from "../print/print";
import {getType, getSumm, getPeriod} from "../../reducer/selectors";
import './app.css';

const App = (props) => {
  const {typeDeposit, summDeposit, periodDeposit} = props;

  return (
    <div className="app">
      <div className="wrapper" id="wrapper">
        <Calculator/>
        {typeDeposit.code && summDeposit && periodDeposit && <ResultBoard/>}
      </div>
      {typeDeposit.code && summDeposit && periodDeposit && <Print/>}
    </div>
  );
}

const mapStateToProps = (state) => ({
  typeDeposit: getType(state),
  summDeposit: getSumm(state),
  periodDeposit: getPeriod(state)
});

export {App};
export default connect(mapStateToProps)(App);
