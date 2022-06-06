import { Login } from 'components/Login';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';

const LoginPage = () => {
  return (
    <>
      <Header />
      <div>
        <h1>Login</h1>
        <Login />
        <p>
          Or <Link to="/register">register</Link>
        </p>
      </div>
    </>
  );
};

export default LoginPage;
