import { useForm } from 'react-hook-form';

const Form = ({ handleClick }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: 'onBlur' });
  const onSubmit = data => {
    handleClick(data.email, data.password);
    reset();
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Email:
          <input
            {...register('email', {
              required: " поле обов'язкове до заповнення",
            })}
          />
        </label>
        <div style={{ height: 40 }}>
          {errors?.email && <p>{errors?.email?.message || 'Error!'}</p>}
        </div>

        <label>
          Password:
          <input
            {...register('password', {
              required: " поле обов'язкове до заповнення",
            })}
          />
        </label>
        <div style={{ height: 40 }}>
          {errors?.password && <p>{errors?.passsword?.message || 'Error!'}</p>}
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export { Form };
