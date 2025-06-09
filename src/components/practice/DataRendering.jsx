import { useState, useEffect } from "react";

const baseUrl = "https://jsonplaceholder.typicode.com/users";

export default function DataRenderingComponent() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(baseUrl);
      const json = await response.json();
      
      setUsers(json);
    })();
  }, []);

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            username: {user.username} <br />
            email: {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
