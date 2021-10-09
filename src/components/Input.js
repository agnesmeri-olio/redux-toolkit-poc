import { useDispatch, useSelector } from 'react-redux';
import { update } from '../store/articleSlice';

const Input = ({
    label
}) => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.article.item[label]);
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        value={value}
        onChange={(e) => {dispatch(update({
            type: label,
            value: e.target.value
        }))}}
        />
    </>
  )
}

export default Input;
