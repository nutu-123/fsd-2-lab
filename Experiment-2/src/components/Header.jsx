import { useUser } from "../context/UserContext";

function Header() {
  const { isLoggedIn, login, logout } = useUser();

  return (
    <header className="header">
      <h1>My App</h1>
      <div className="user-info">
        {isLoggedIn ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <button onClick={login}>Login</button>
        )}
      </div>
    </header>
  );
}

export default Header;
