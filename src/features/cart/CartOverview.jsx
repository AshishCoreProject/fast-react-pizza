import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice';

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;

  return (
    <div className=" border- flex h-24 items-center justify-between rounded-lg border-2 bg-stone-800 bg-gradient-to-r from-zinc-700  to-stone-900 p-4 uppercase text-stone-200  sm:px-6 md:text-base">
      <p className="space-x-4 text-sm font-semibold text-stone-300 sm:px-6">
        <span>{totalCartQuantity} PIZZAS</span>
        <span> ₹{Number(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
