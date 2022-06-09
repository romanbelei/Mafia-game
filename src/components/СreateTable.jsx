import { useForm } from 'react-hook-form';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { app } from '../firebase';
import { useHistory } from 'react-router-dom';
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const db = getFirestore(app);

const СreateTable = () => {
  const { push } = useHistory();

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
    console.log(data.name);
    setDoc(doc(db, 'table', data.name), {
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
        {/* <div style={{ height: 40 }}> */}
        {errors?.password && <p>Мінімум 6 символів!</p>}
        {/* </div> */}

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
