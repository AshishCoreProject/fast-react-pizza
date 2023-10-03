import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function Button({ children, disabled, to, type, onClick }) {
  const base = ` inline-block bg-yellow-400
    uppercase font-semibold
    text-stone-800 rounded-full hover:bg-yellow-300
    transition-colors duration-300 focus:outline-none 
    focus:ring focus:ring-yellow-300 focus:bg-yellow-300
     focus:ring-offset-2 active:bg-slate-400
    disabled:cursor-not-allowed disabled:bg-slate-600`;

  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4',

    small: base + ' mx-auto px-4 py-2 md:px-5 md:py-2.5 text-xs',

    secondary: `inline-block border-2 border-stone-300 
    uppercase font-semibold hover: text-stone-800
    text-stone-800 rounded-full hover:bg-stone-300
    transition-colors duration-300 focus:outline-none 
    focus:ring focus:ring-stone-300 focus:bg-yellow-300
     focus:ring-offset-2 active:bg-slate-400
    disabled:cursor-not-allowed disabled:bg-slate-600
    px-4 py-3 md:px-6 md:py-4`,
  };

  if (to)
    return (
      <Link className={styles[type]} to="/order/new">
        {children}
      </Link>
    );

  if (onClick)
    return (
      <div>
        <button onClick={onClick} disabled={disabled} className={styles[type]}>
          {children}
        </button>
      </div>
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
