import { useDispatch } from 'react-redux';
// import { setMyNameTables } from '../store/slices/tablesSlice';
import { useForm } from 'react-hook-form';
import {
  getFirestore,
  doc,
  // getDocs,
  setDoc,
  getDoc,
  // collection,
  // deleteDoc,
} from 'firebase/firestore';
import { app } from '../firebase';
import { useHistory } from 'react-router-dom';
import { useAuth } from 'hooks/use-auth';
import { useTables } from 'hooks/use-tables';
import React, { useState } from 'react';
import { Report } from 'notiflix/build/notiflix-report-aio';

const db = getFirestore(app);

const СreateTable = () => {
  const { push } = useHistory();
  const { id } = useAuth();
  const { tables, myTableName } = useTables();
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: 'Roman',
      password: 112233,
      doctor: 1,
      sherif: 1,
      mafia: 2,
      peace: 3,
    },
  });

  const onSubmit = data => {
    console.log(!myTableName);
    console.log(myTableName);
    if (!myTableName && tables.includes(data.name)) {
      //якщо мого стола немає то перевіряємо чи є вже таке ім'я
      Report.failure(
        `Стіл з таким іменем вже існує. Введіть інше ім'я.`,
        ``,
        `Ok`
      );
    } else {
      if (myTableName && data.name !== myTableName) {
        //якщо мій стіл є то перевіряємо чи введене ім'я не= ім'ю мого стола
        Report.failure(`Введіть ім'я свого стола.`, ``, `Ok`);
      } else {
        setDoc(doc(db, 'table', data.name), {
          userId: id,
          name: data.name,
          password: data.password,
          users: [],
          role: [],
          count: {
            mafia: data.mafia,
            doctor: data.doctor,
            sherif: data.sherif,
            peace: data.peace,
          },
        });
        reset();
        push('/');
      }
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="label">
          Назва стола:
          <input
            type="name"
            {...register('name', {
              validate: value => value.length > 2,
            })}
          />
        </label>

        {errors?.email && <p>{errors?.email?.message || 'Error!'}</p>}

        <label className="label">
          Password:
          <input
            {...register('password', {
              validate: value => value.length > 5,
            })}
          />
        </label>
        {errors?.password && <p>Мінімум 6 символів!</p>}
        <label className="label">
          Мафія:
          <input
            type="text"
            {...register('mafia', {
              validate: {
                positiveNumber: value => parseFloat(value) > 0,
              },
            })}
          />
        </label>
        {errors.age && errors.age.type === 'positiveNumber' && (
          <p>Невірне число</p>
        )}
        <label className="label">
          Лікар:
          <input
            type="text"
            {...register('doctor', {
              validate: {
                positiveNumber: value => parseFloat(value) > 0,
              },
            })}
          />
        </label>
        {errors.age && errors.age.type === 'positiveNumber' && (
          <p>Невірне число</p>
        )}
        <label className="label">
          Шериф:
          <input
            type="text"
            {...register('sherif', {
              validate: {
                positiveNumber: value => parseFloat(value) > 0,
              },
            })}
          />
        </label>
        {errors.age && errors.age.type === 'positiveNumber' && (
          <p>Невірне число</p>
        )}
        <label className="label">
          Мирний:
          <input
            type="text"
            {...register('peace', {
              validate: {
                positiveNumber: value => parseFloat(value) > 0,
              },
            })}
          />
        </label>
        {errors.age && errors.age.type === 'positiveNumber' && (
          <p>Невірне число</p>
        )}
        <input type="submit" disabled={!isValid} />
      </form>
    </div>
  );
};

export { СreateTable };
