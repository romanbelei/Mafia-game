import { Redirect } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { InputForm } from '../components/InputForm';
import { useHistory, useParams } from 'react-router-dom';

// import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/use-auth';
// import { removeUser } from 'store/slices/userSlice';
import { Header } from '../components/Header';
// import { Link } from 'react-router-dom';
import {
  getFirestore,
  setDoc,
  doc,
  getDoc,
  updateDoc,
} from 'firebase/firestore';
import { app } from '../firebase';
import { Report } from 'notiflix/build/notiflix-report-aio';

const db = getFirestore(app);

const InputPage = () => {
  const [passwordTable, setPasswordTable] = useState([]);
  const { push } = useHistory();
  const { isAuth } = useAuth();
  const { table } = useParams();

  useEffect(() => {
    getPasswordTable();
  }, []);

  async function getPasswordTable() {
    const docPassword = await getDoc(doc(db, 'table', `${table}`));
    setPasswordTable(docPassword.data().password);
    console.log(docPassword.data().password);
  }
  async function addUserOnTable(name) {
    const fetchUsers = await getDoc(doc(db, 'table', `${table}`));
    const users = fetchUsers.data().users;
    console.log(table);
    const tableRef = doc(db, 'table', table);
    updateDoc(tableRef, { users: [...users, name] });
  }

  const handleInput = ({ password, name }) => {
    if (passwordTable === password) {
      addUserOnTable(name);
      push('/Game');
    } else {
      Report.failure(`Невірний пароль`, '', `Ok`);
    }
  };

  return isAuth ? (
    <div>
      <Header />
      <InputForm onClick={handleInput} table={table} />
    </div>
  ) : (
    <Redirect to="/login" />
  );
};

export default InputPage;
