import { useState } from "react";
import "./App.css";

function App() {
  const [inputs, setInputs] = useState({
    login: "",
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    login: "",
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const regexPatterns = {
    login: /^[a-z][a-z0-9]{7,}$/,
    name: /^[A-Z][a-z]*$/,
    surname: /^[A-Z][a-z]*$/,
    email: /^[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/,
    password: /^[a-zA-Z][a-zA-Z0-9._]{7,}$/,
  };

  const validateInput = (name, value) => {
    if (!regexPatterns[name].test(value)) {
      return `Verilən tələbə uyğun deyil: ${name}`;
    }
    return "";
  };

  const handleInputs = (ev) => {
    const { name, value } = ev.target;

    setInputs((prev) => ({ ...prev, [name]: value }));
    const errorMessage = validateInput(name, value);
    setErrors((prev) => ({ ...prev, [name]: errorMessage }));
  };

  const isFormValid = Object.values(errors).every((err) => err === "") &&
    Object.values(inputs).every((input) => input !== "");

  return (
    <div>
      <form>
        <input
          onInput={handleInputs}
          type="text"
          name="login"
          placeholder="login"
        />
        {errors.login && <p className="error">{errors.login}</p>}

        <input
          onInput={handleInputs}
          type="text"
          name="name"
          placeholder="name"
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <input
          onInput={handleInputs}
          type="text"
          name="surname"
          placeholder="surname"
        />
        {errors.surname && <p className="error">{errors.surname}</p>}

        <input
          onInput={handleInputs}
          type="text"
          name="email"
          placeholder="email"
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          onInput={handleInputs}
          type="text"
          name="password"
          placeholder="password"
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <button disabled={!isFormValid}>REGISTER</button>
      </form>
    </div>
  );
}

export default App;
