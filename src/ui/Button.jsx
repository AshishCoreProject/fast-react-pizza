import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function Button({ children, disabled, to, type, onClick }) {
  const base = ` inline-block bg-gradient-to-l from-yellow-200 to-yellow-500 
    uppercase font-semibold text-stone-800 rounded-full hover:bg-gradient-to-r from-yellow-200 to-yellow-500 
    transition-colors duration-300 active:bg-slate-400
    disabled:cursor-not-allowed disabled:bg-slate-600`;

  const ringPlus = ` focus:outline-none 
  focus:ring focus:ring-yellow-300 focus:bg-yellow-300
   focus:ring-offset-2`;

  const deleteSpecial = ` inline-block uppercase font-semibold text-stone-800 rounded-full
  transition-colors duration-300 active:bg-slate-400
  disabled:cursor-not-allowed disabled:bg-slate-600`;

  const styles = {
    primary: base + ringPlus + ' px-4 py-3 md:px-6 md:py-4',

    round: base + ` px-2.5 py-1 md:px-3.5 md:py-2 text-sm ring-ron outline-0`,

    small:
      base +
      ringPlus +
      ' w-36 px-4 py-2 md:px-5 md:py-2.5 text-xs border-4 border-yellow-400',

    delete:
      deleteSpecial +
      ` py-2 md:px-5 md:py-2.5 border-4 border-red-400 text-xs w-36  focus:outline-none focus:ring focus:ring-red-400 focus:bg-red-300 focus:ring-offset-2 bg-gradient-to-l from-red-100 to-red-400 hover:bg-gradient-to-r from-red-100 to-red-400`,

    secondary: ` inline-block border-2 border-stone-300 
    uppercase font-semibold hover: text-stone-800
    text-stone-800 rounded-full transition-colors duration-300 focus:outline-none 
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
