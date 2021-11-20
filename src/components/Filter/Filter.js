import PropTypes from 'prop-types';
import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getInputValueFilter } from '../../redux/selectors';
import { filter } from '../../redux/actions';

const Filter = () => {
  const dispatch = useDispatch();
  const filterInputValue = useSelector(getInputValueFilter);
  const filterHendler = ({ target }) => dispatch(filter(target.value));

  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Введите имя контакта. Поиск не чувствительный к регистру вводимых символов."
        required
        onChange={filterHendler}
        value={filterInputValue}
      ></input>
    </label>
  );
};
Filter.protoType = {
  filterHendler: PropTypes.string,
  filterInputValue: PropTypes.func,
};

export default Filter;
