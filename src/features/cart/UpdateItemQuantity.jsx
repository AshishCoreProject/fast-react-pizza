import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

// eslint-disable-next-line react/prop-types
function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="item-center  flex gap-1 md:gap-3">
      <Button
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
        type="round"
      >
        -
      </Button>
      <span className="mx-2 my-2 text-sm font-medium">{currentQuantity}</span>
      <Button
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
        type="round"
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
