import { Link } from 'react-router-dom';
import Username from '../features/user/Username';
import SearchOrder from '../features/order/SearchOrder';

function Header() {
  return (
    <header className="item-center flex justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 font-sans uppercase ">
      <Link to="/" className="tracking-[5px]">
        Fast React Pizza Co
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
