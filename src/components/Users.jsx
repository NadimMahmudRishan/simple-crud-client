import { use } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();
  return (
    <div>
      <h2>Total user : {users.length}</h2>
      <div>
        {users.map((user) => (
          <p style={{ border: "1px solid black", padding:"4px" }} key={user._id}>
            Name: {user.name}, Email: {user.email}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
