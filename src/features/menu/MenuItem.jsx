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
        <div className="mx-auto mt-auto flex w-[750px] sm:items-center  sm:gap-96">
          {!soldOut ? (
            <p className="transition: w-18 mx-2 mt-[12px] h-6 transform border-2  border-x-green-500/50 bg-yellow-100 text-center align-middle text-sm font-bold text-stone-700 hover:-translate-y-0.5 hover:bg-yellow-400">
              {formatCurrency(unitPrice)}
            </p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500 sm:ml-96">
              Sold out
            </p>
          )}
          {isInCart && (
            <div className="relative right-[1px] flex items-center sm:gap-8">
              <div className="absolute left-[150px]  mx-2 mt-2 ">
                {/* sm:static */}
                <UpdateItemQuantity
                  pizzaId={id}
                  currentQuantity={currentQuantity}
                />
              </div>
              <div className="mx-1">
                <DeleteItem pizzaId={id} />
              </div>
            </div>
          )}
          {!soldOut && !isInCart && (
            <div className="mx-4">
              <Button onClick={handleToCart} type="small">
                Add to cart
              </Button>
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
