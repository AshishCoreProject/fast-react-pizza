import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function Button({ children, disabled, to, type }) {
  const base = ` inline-block bg-yellow-400
    uppercase font-semibold
    text-stone-800 rounded-full hover:bg-yellow-300
    transition-colors duration-300 focus:outline-none 
    focus:ring focus:ring-yellow-300 focus:bg-yellow-300
     focus:ring-offset-2 active:bg-slate-400
    disabled:cursor-not-allowed disabled:bg-slate-600`;

  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
  };

  if (to)
    return (
      <Link className={styles[type]} to="/order/new">
        {children}{' '}
      </Link>
    );
  return (
    <div>
      <button disabled={disabled} className={styles[type]}>
        {children}
      </button>
    </div>
  );
}

export default Button;
