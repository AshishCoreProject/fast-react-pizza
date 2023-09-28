import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="bg-stone-800 p-4 md:text-base text-stone-200 sm:px-6 uppercase flex items-center justify-between">
      <p className="space-x-4 text-stone-300 font-semibold text-sm sm:px-6">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
