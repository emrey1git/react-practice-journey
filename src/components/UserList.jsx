import { useState, useEffect } from "react";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Hata:", error);
      }
    }
    fetchUsers();
  }, []);
  // Alternatif olarak, fetch işlemini useEffect içinde yapabiliriz:
  // useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((response) => response.json()) // gelen cevabı json’a çeviriyoruz
  //       .then((data) => {
  //         setUsers(data); // json veriyi state’e yazıyoruz
  //       })
  //       .catch((error) => {
  //         console.error("Hata:", error);
  //       });
  //   }, []); // boş dizi sayesinde bu sadece 1 kez çalışır

  return (
    <div>
      <h2>Kullanıcı Listesi</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
