import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  async function searchUser() {
    const name = document.getElementById("name").value;

    const response = await fetch(
      `https://dummyjson.com/users/search?q=${name}`
    );

    const data = await response.json();

    setUser(data.users[0]);
  }

  return (
    <div>
      <input
        id="name"
        type="text"
        placeholder="Enter name"
      />

      <button onClick={searchUser}>
        Search
      </button>

      {user && (
        <div>
          <h2>
            {user.firstName} {user.lastName}
          </h2>

          <img
            src={user.image}
            alt={user.firstName}
            width="200"
          />
        </div>
      )}
    </div>
  );
}

export default App;