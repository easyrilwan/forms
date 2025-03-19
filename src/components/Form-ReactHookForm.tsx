import { FieldValues, useForm } from "react-hook-form";

interface FormData {
  name: string;
  age: number;
}

export default function ReactHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  // console.log(errors);

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <>
      <h1>ReactHookForm</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            {...register("name", { required: true, minLength: 3 })}
            id="name"
            type="text"
            defaultValue=""
            className="form-control"
          />
        </div>

        {errors.name?.type === "required" && (
          <p className="text-danger">The name field is required</p>
        )}

        {errors.name?.type === "minLength" && (
          <p className="text-danger">The name must be at least 3 characters</p>
        )}

        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            {...register("age", { required: true, valueAsNumber: true })}
            id="age"
            type="number"
            className="form-control"
          />

          {errors.age?.message === "" && (
            <p className="text-danger">Age field is required</p>
          )}
        </div>

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
