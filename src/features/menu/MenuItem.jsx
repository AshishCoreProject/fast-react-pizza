import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

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
        <div className="mx-auto mt-auto flex items-center gap-96">
          {!soldOut ? (
            <p className="transition: h-6 w-20 transform border-2  border-x-green-500/50 bg-yellow-100 text-center align-middle text-sm font-bold text-stone-700 hover:-translate-y-0.5 hover:bg-yellow-400">
              {formatCurrency(unitPrice)}
            </p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          <Button on type="small">
            Add to cart{' '}
          </Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
