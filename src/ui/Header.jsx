import { Link } from 'react-router-dom';
import Username from '../features/user/Username';
import SearchOrder from '../features/order/SearchOrder';

function Header() {
  return (
    <header className="item-center flex justify-between rounded-br-xl border-b border-stone-200 bg-gradient-to-r from-yellow-300 to-yellow-500 px-4 py-3 font-sans uppercase ">
      <Link to="/" className="tracking-[5px]">
        Fast React Pizza Co
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
