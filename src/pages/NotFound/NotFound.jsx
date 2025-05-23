import { Link } from "react-router-dom";
import s from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>404</h1>
      <h2 className={s.subtitle}>Page Not Found</h2>
      <p className={s.text}>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/" className={s.button}>
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
