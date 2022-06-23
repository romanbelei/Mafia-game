import { useDispatch } from 'react-redux';
import { setTables, setMyTableName } from '../store/slices/tablesSlice';
import { Redirect } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useAuth } from 'hooks/use-auth';
import { Header } from '../components/Header';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  deleteDoc,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';
import { app } from '../firebase';

const db = getFirestore(app);

const HomePage = () => {
  const [allTables, setAllTables] = useState([]);
  const [myNameTable, setMyNameTable] = useState('');
  const { isAuth, id } = useAuth();
  const dispatch = useDispatch();
  const { push } = useHistory();

  dispatch(setTables(allTables));
  dispatch(setMyTableName(myNameTable));

  useEffect(() => {
    getTables();
  }, []);

  useEffect(() => {
    getUserIdTables();
  }, [allTables]);

  // отримуємо всі столи з бази даних в реальному часі
  async function getTables() {
    const q = query(collection(db, 'table'));
    const unsubscribe = onSnapshot(q, querySnapshot => {
      let arrTables = [];
      querySnapshot.forEach(doc => {
        arrTables.push(doc.id);
      });

      setAllTables(arrTables);
    });
  }

  async function getUserIdTables() {
    for (const table of allTables) {
      const userIdTab = await getDoc(doc(db, 'table', `${table}`));
      if (userIdTab.data().userId === id) {
        setMyNameTable(table);
      }
    }
  }
  function onTable(e, patch) {
    if (e.target === e.currentTarget) {
      push(`/${patch}`);
    }
  }
  async function onDelete() {
    await deleteDoc(doc(db, 'table', `${myNameTable}`));
    getTables();
  }

  return isAuth ? (
    <div>
      <Header />
      {allTables.map(table => {
        const patch = `input/${table}`;
        return (
          <div className="tables" onClick={e => onTable(e, patch)}>
            <h2>Стіл {table}</h2>
            {myNameTable === table && (
              <button className="buttonDelete" onClick={onDelete}>
                Видалити
              </button>
            )}
          </div>
        );
      })}
      <Link to="/table">+ добавити/редагувати стіл</Link>
    </div>
  ) : (
    <Redirect to="/login" />
  );
};

export default HomePage;
