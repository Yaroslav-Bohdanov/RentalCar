import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCarById } from "../../redux/operations";
import { useEffect } from "react";
import {
  selectCar,
  selectLoading,
  selectError,
} from "../../redux/selectors.js";
import CarElementLeftInfo from "../../components/CarElementLeftInfo/CarElementLeftInfo.jsx";
import CarElementRightInfo from "../../components/CarElementRightInfo/CarElementRightInfo.jsx";
import s from "./CatalogElement.module.css";
import Loader from "../../components/Loader/Loader.jsx";

const CatalogElement = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const car = useSelector(selectCar);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getCarById(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <section className={s.catalog_element}>
      <CarElementLeftInfo img={car.img} brand={car.brand} />
      <CarElementRightInfo car={car} />
    </section>
  );
};

export default CatalogElement;
