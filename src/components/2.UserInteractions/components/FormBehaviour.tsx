import React, { useState } from "react";

const FormBehavior = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorList: string[] = [];
    if (name === "" || password === "" || country === "") {
      errorList.push("Please fill all the details");
    }

    const regex = /^[a-z]*$/i;
    if (!name.match(regex)) {
      errorList.push("Please enter a valid name");
    }

    if (errorList.length !== 0) {
      setErrors(errorList);
      setFormSubmitted(false);
      return;
    }

    setErrors([]);
    setFormSubmitted(true);
    console.log("Form submitted with details");
  };
  return (
    <div>
      <form>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Enter name"
        />
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Enter password"
        />
        <label htmlFor="selectCountry"> Select Country </label>
        <select
          id="selectCountry"
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        >
          <option>India</option>
          <option>Japan</option>
          <option>China</option>
          <option>USA</option>
          <option>England</option>
        </select>
        <button onClick={handleSubmit}> Submit </button>
      </form>
      {errors.map((err) => (
        <p style={{ color: "red" }}>{err}</p>
      ))}

      {formSubmitted && "Form Submitted"}
    </div>
  );
};

export default FormBehavior;
