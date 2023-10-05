import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { addToItem, getCurrentQuantityById } from '../cart/cartSlice';
import DeleteItem from '../cart/DeleteItem';
import UpdateItemQuantity from '../cart/UpdateItemQuantity';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();

  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;
  function handleToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addToItem(newItem));
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(', ')}
        </p>
        <div className="mx-auto mt-auto flex w-[750px] items-center gap-96">
          {!soldOut ? (
            <p className="transition: w-18 h-6 transform border-2  border-x-green-500/50 bg-yellow-100 text-center align-middle text-sm font-bold text-stone-700 hover:-translate-y-0.5 hover:bg-yellow-400">
              {formatCurrency(unitPrice)}
            </p>
          ) : (
            <p className=" ml-96 text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          {isInCart && (
            <div className="relative right-[138px] flex items-center gap-3 sm:gap-8">
              <UpdateItemQuantity
                pizzaId={id}
                currentQuantity={currentQuantity}
              />
              <DeleteItem pizzaId={id} />
            </div>
          )}
          {!soldOut && !isInCart && (
            <Button onClick={handleToCart} type="small">
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
