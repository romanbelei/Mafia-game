import { SignUp } from 'components/SignUp';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';

const RegisterPage = () => {
  return (
    <div>
      <Header />
      <h1>Register</h1>
      <SignUp />
      <p>
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
