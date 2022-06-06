import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/use-auth';
import { removeUser } from 'store/slices/userSlice';
import style from './Header.module.css';
import { Button } from '../Button';

export function Header() {
  const dispatch = useDispatch();

  const { isAuth } = useAuth();
  return (
    <header className={style.header} id="header">
      <h1 className={style.gameName}>МАФІЯ</h1>
      {isAuth && (
        <Button
          name={style.singUp}
          text="Вийти"
          onClick={() => dispatch(removeUser())}
        />
      )}
    </header>
  );
}
