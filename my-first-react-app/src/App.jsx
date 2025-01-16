import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>Hello from the main page of the app!</h1>
      <p>Here are some examples of links to other pages</p>
      <nav>
        <ul>
          <li>
            <Link to="profile">Profile page</Link>
          </li>
          <li>
            <Link to="profile/spinach">Spinach Page</Link>
          </li>
          <li>
          <Link to="profile/popeye">Popeye Page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
