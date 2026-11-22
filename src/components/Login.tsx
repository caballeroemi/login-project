
import { useState } from "react";

interface Props {
  onNext: (name: string) => void;
}

function Login(props: Props) {
  const [name, setName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [country, setCountry] = useState("");
  const [yearsOld, setYearsOld] = useState("");

  return (
    <div className="login-page">
      <div className="login-card">

        {/* Logo */}
        <div className="logo">
          EMI
        </div>

        {/* Title */}
        <div className="title">
          <h1>Login</h1>
        </div>

        {/* Subtitle */}
        <p>Please enter your information</p>

        {/* Form */}
        <form
          className="login-form"
          onSubmit={(event) => {
            event.preventDefault();
            props.onNext(name);
          }}
        >

          {/* Name */}
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter your name"
            />
          </div>

          {/* Second Name */}
          <div className="form-group">
            <label htmlFor="secondName">Second Name</label>
            <input
              id="secondName"
              value={secondName}
              onChange={(event) => setSecondName(event.target.value)}
              placeholder="Enter your second name"
            />
          </div>

          {/* Country */}
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input
              id="country"
              value={country}
              onChange={(event) => setCountry(event.target.value)}
              placeholder="Enter your country"
            />
          </div>

          {/* Age */}
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              id="age"
              type="number"
              value={yearsOld}
              onChange={(event) => setYearsOld(event.target.value)}
              placeholder="Enter your age"
            />
          </div>

          {/* Button */}
          <button type="submit">NEXT</button>
        </form>

        {/* Footer */}

      </div>
    </div>
  );
}

export default Login;
