import { useForm } from 'react-hook-form';

const InputForm = ({ onClick, table }) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onChange',
  });
  const onSubmit = data => {
    onClick(data);
    reset();
  };
  return (
    <div className="App">
      <h1>Стіл {table}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="label">
          Password:
          <input
            {...register('password', {
              required: " поле обов'язкове до заповнення!",
              validate: value => value.length > 5,
            })}
          />
        </label>
        <div style={{ height: 40 }}>
          {errors?.password && <p>Мінімум 6 символів!</p>}
        </div>
        <label className="label">
          Name:
          <input
            {...register('name', {
              required: " поле обов'язкове до заповнення!",
            })}
          />
        </label>
        <div style={{ height: 40 }}>
          {errors?.name && <p>{errors?.name?.message || 'Error!'}</p>}
        </div>
        <input type="submit" disabled={!isValid} />
      </form>
    </div>
  );
};

export { InputForm };
