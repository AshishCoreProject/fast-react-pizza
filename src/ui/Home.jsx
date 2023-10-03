import { useSelector } from 'react-redux/es/hooks/useSelector';
import Button from './Button';
import CreateUser from '../features/user/CreateUser';
function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="my-10 sm:my-16 sm:text-center">
      <h1 className="mb-8 text-xl font-semibold ">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          {' '}
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === '' ? (
        <CreateUser />
      ) : (
        <Button to="menu" type="primary">
          Continue ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
