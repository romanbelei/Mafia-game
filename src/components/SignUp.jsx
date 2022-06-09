import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { setUser } from 'store/slices/userSlice';
import { Form } from './Form';
import { Report } from 'notiflix/build/notiflix-report-aio';

// import { Notify } from 'notiflix/build/notiflix-notify-aio';

const SignUp = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        Report.success(`Успішно зареєстрований`, ``, `Ok`);
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

  return <Form handleClick={handleRegister} />;
};

export { SignUp };
