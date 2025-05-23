import CarsList from "../../components/CarsList/CarsList.jsx";
import FilterCars from "../../components/FilterCars/FilterCars.jsx";
const Catalog = () => {
  return (
    <section>
      <FilterCars />
      <CarsList />
    </section>
  );
};

export default Catalog;
