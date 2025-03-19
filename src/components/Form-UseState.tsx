import { FormEvent, useState } from "react";

export default function FormUseState() {
  const [person, setPerson] = useState({ name: "", age: "" });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (person.name === "" || person.age === "") return; // Guard Clause
    console.log(person);
  };

  return (
    <>
      <h1>UseState</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            onChange={(e) => setPerson({ ...person, name: e.target.value })}
            value={person.name}
            id="name"
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            onChange={(e) => setPerson({ ...person, age: e.target.value })}
            value={person.age}
            id="age"
            type="number"
            className="form-control"
          />
        </div>

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
