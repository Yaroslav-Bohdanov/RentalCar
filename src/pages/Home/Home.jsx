import { Link } from "react-router-dom";
import s from "./Home.module.css";

const Home = () => {
  return (
    <section className={s.home}>
      <h1 className={s.title}>Find your perfect rental car</h1>
      <p className={s.text}>
        Reliable and budget-friendly rentals for any journey
      </p>
      <Link className={s.link} to="/catalog">
        View Catalog
      </Link>
    </section>
  );
};

export default Home;
