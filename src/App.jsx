import "./App.css";

function App() {
  const handelAddUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);
  };

  return (
    <>
      <form onSubmit={handelAddUser}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="submit" />
      </form>

      <h1>Simple CRUD operation</h1>
    </>
  );
}

export default App;
