export default function History({ users }) {
  return (
    <div className="history">
      <h4>Search history</h4>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <a href={`https://github.com/${user}`} target="_blank">
              {user}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
