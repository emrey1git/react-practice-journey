function UserCard({ name, email, phone }) {
  return (
    <li>
      <strong>{name}</strong> <br />
      {email} <br />
      {phone}
    </li>
  );
}

export default UserCard;
