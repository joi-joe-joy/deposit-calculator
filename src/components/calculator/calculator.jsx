import React from 'react';
import Select from "../select/select";
import Input from "../input/input";
import FieldWrap from "../field-wrap/field-wrap"
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/reducer";
import {getDepositNames, getType, getSumm, getPeriod, getMinSumm, getMinPeriod} from "../../reducer/selectors";
import './calculator.css';

const Calculator = (props) => {
  const {
    options,
    typeDeposit,
    summDeposit,
    periodDeposit,
    minSumm,
    minPeriod,
    onChangeType,
    onChangeSumm,
    onChangePeriod
  } = props;

  const handleChangeType = (type) => {
    onChangeType(type)
  }

  const handleChangeSumm = (summ) => {
    onChangeSumm(summ < minSumm ? minSumm : summ);
  }

  const handleChangePeriod = (period) => {
    onChangePeriod(period < minPeriod ? minPeriod : period);
  }

  return (
    <form className="calculator" action="#" method="post">
      <FieldWrap label={`Тип вклада`}>
        <Select
          options={options}
          label={typeDeposit.name || `Выберите вклад`}
          render={(option) => (
            <div className="select__inner"
              onClick={() => handleChangeType(option)}>
              {option.name}
            </div>
          )}
        />
      </FieldWrap>
      <FieldWrap label={`Сумма вклада`}>
        <Input
          value={summDeposit}
          name={`summ`}
          placeholder={`Сумма вклада`}
          onChangeInput={handleChangeSumm}
        />
      </FieldWrap>
      <FieldWrap label={`Срок (мес.)`}>
        <Input
          value={periodDeposit}
          name={`period`}
          placeholder={`Срок вклада`}
          onChangeInput={handleChangePeriod}
        />
      </FieldWrap>
    </form>
  );
}

const mapStateToProps = (state) => ({
  options: getDepositNames(state),
  typeDeposit: getType(state),
  summDeposit: getSumm(state),
  periodDeposit: getPeriod(state),
  minSumm: getMinSumm(state),
  minPeriod: getMinPeriod(state)
});

const mapDispatchToProps = (dispatch) => ({
  onChangeType(type) {
    dispatch(ActionCreator.changeType(type));
  },
  onChangeSumm(summ) {
    dispatch(ActionCreator.changeSumm(summ));
  },
  onChangePeriod(period) {
    dispatch(ActionCreator.changePeriod(period));
  }
});

export {Calculator};
export default connect(mapStateToProps, mapDispatchToProps)(Calculator);