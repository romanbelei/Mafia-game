import { Redirect } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/use-auth';
// import { removeUser } from 'store/slices/userSlice';
import { Header } from '../components/Header';
import { –°reateTable } from 'components/–°reateTable';

const TablePage = () => {
  //   const dispatch = useDispatch();

  const { isAuth } = useAuth();

  //   const onClickCreateTable = data => {};

  return isAuth ? (
    <div>
      <Header />
      <–°reateTable />
    </div>
  ) : (
    <Redirect to="/login" />
  );
};

export default TablePage;

//   <button onClick={() => dispatch(removeUser())}>
//     Log out from {email}
//   </button>
