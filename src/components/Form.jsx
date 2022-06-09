import { useForm } from 'react-hook-form';

const Form = ({ handleClick }) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      email: 'bly@ukr.net',
      password: 112233,
    },
  });
  const onSubmit = data => {
    handleClick(data.email, data.password);
    reset();
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="label">
          Email:
          <input
            type="email"
            {...register('email', {
              required: " поле обов'язкове до заповнення!",
            })}
          />
        </label>
        <div style={{ height: 40 }}>
          {errors?.email && <p>{errors?.email?.message || 'Error!'}</p>}
        </div>

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
        <input type="submit" disabled={!isValid} />
      </form>
    </div>
  );
};

export { Form };
