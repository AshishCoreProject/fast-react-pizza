import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function Button({ children, disabled, to }) {
  const className = ` py-3 px-4 inline-block bg-yellow-400
    uppercase font-semibold
    text-stone-800 rounded-full hover:bg-yellow-300
    transition-colors duration-300 focus:outline-none 
    focus:ring focus:ring-yellow-300 sm:px-6 sm:py-4
    focus:bg-yellow-300 focus:ring-offset-2 active:bg-slate-400
    disabled:cursor-not-allowed disabled:bg-slate-600`;

  if (to)
    return (
      <Link className={className} to="/order/new">
        {children}{' '}
      </Link>
    );
  return (
    <div>
      <button disabled={disabled} className={className}>
        {children}
      </button>
    </div>
  );
}

export default Button;
