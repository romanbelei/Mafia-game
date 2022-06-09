import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { setUser } from 'store/slices/userSlice';
import { Form } from './Form';
import { Report } from 'notiflix/build/notiflix-report-aio';

// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { Header } from './Header';

const Login = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        // console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        push('/');
      })
      .catch(error => {
        Report.failure(`Помилка`, ` ${error.message}`, `Ok`);
      });
  };

  return <Form handleClick={handleLogin} />;
};

export { Login };

// <>
// <Header /> */</>;
