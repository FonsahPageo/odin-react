import { Link } from "react-router-dom";

const DefaultProfile = () => {
  return (
    <div>
      <p>Oh, nothing to see here!</p>
      <Link to="/">Go back home</Link>
    </div>
  );
};

export { DefaultProfile };
