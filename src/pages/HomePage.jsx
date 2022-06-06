import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/use-auth';
import { removeUser } from 'store/slices/userSlice';
import { Header } from '../components/Header';

const HomePage = () => {
  const dispatch = useDispatch();

  const { isAuth, email } = useAuth();

  return isAuth ? (
    <div>
      <Header />

      <h1>Welcome to MAFIA</h1>
    </div>
  ) : (
    <Redirect to="/login" />
  );
};

export default HomePage;

//   <button onClick={() => dispatch(removeUser())}>
//     Log out from {email}
//   </button>
