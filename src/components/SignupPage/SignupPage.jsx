import { useState } from "react";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nationality, setNationality] = useState("");

  

  const handleInputChange = (event) => {

    const value = event.target.value;
    const name = event.target.name;
    
    if (name === email) {
      setEmail(value);
    } else if(name === password) {
      setPassword(value);
    } else if (name === nationality) {
      setNationality(value);
    }
    console.log(value)
  };

  return (
    <section>
      <h1>Sign Up</h1>
      <h4>Create a free account now</h4>
      <div>
        <p>Email:</p>
        <input
          type="text"
          name="email"
          placeholder="john.doe@fake.com"
          value={email}
          onChange={handleInputChange}
        ></input>

        <p>Password:</p>
        <input
          type="password"
          placeholder="**********"
          name="password"
          value={password}
          onChange={handleInputChange}
        >
        
        </input>

        <p>Nationality:</p>
        <input
          type="text"
          name="nationality"
          placeholder="Nepali"
          value={nationality}
          onChange={handleInputChange}
        ></input>
      </div>
    </section>
  );
}

export default SignUpPage;
