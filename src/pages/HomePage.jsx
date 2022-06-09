import { Redirect } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

// import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/use-auth';
// import { removeUser } from 'store/slices/userSlice';
import { Header } from '../components/Header';
import { Link } from 'react-router-dom';
import {
  getFirestore,
  //   doc,
  //   onSnapshot,
  collection,
  getDocs,
} from 'firebase/firestore';
import { app } from '../firebase';
// import { useHistory } from 'react-router-dom';
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const db = getFirestore(app);

const HomePage = () => {
  const [tables, setTables] = useState([]);
  //   const dispatch = useDispatch();

  const { isAuth } = useAuth();

  async function getTables() {
    const querySnapshot = await getDocs(collection(db, 'table'));
    querySnapshot.forEach(doc => {
      setTables(prevState => {
        return [...prevState, doc.id];
      });
      console.log(doc.id, ' => ', doc.data());
    });
  }
  useEffect(() => {
    getTables();
  }, []);

  console.log(tables);

  return isAuth ? (
    <div>
      <Header />
      {tables.map(table => {
        return <h1>{table}</h1>;
      })}
      {/* <Table />> */}
      <Link to="/table">+ добавити стіл</Link>
    </div>
  ) : (
    <Redirect to="/login" />
  );
};

export default HomePage;

//   <button onClick={() => dispatch(removeUser())}>
//     Log out from {email}
//   </button>
