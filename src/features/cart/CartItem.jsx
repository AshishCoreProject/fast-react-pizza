import { formatCurrency } from '../../utils/helpers';
import DeleteItem from './DeleteItem';

// eslint-disable-next-line react/prop-types
function CartItem({ item }) {
  // eslint-disable-next-line react/prop-types
  const { pizzaId, name, quantity, totalPrice } = item;
  console.log(item);

  return (
    <li className="sm:fles py-3 sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0 ">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        {/* <Button onClick={handleDeleteToCart} type="small">
          Delete
        </Button> */}
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
