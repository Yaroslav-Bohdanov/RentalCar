import s from "./specifications.module.css";
import sprite from "../../../../public/sprite.svg";

const Specifications = ({ year, type, fuelConsumption, engineSize }) => {
  return (
    <div className={s.specifications_box}>
      <p>Car Specifications:</p>
      <div className={s.year}>
        <svg className={s.icon_calendar}>
          <use href={sprite + "#icon-calendar"}></use>
        </svg>
        <p>Year: {year}</p>
      </div>
      <div className={s.type}>
        <svg className={s.icon_car}>
          <use href={sprite + "#icon-car"}></use>
        </svg>
        <p>Type: {type}</p>
      </div>
      <div className={s.consumption}>
        <svg className={s.icon_fuel_pump}>
          <use href={sprite + "#icon-fuel-pump"}></use>
        </svg>
        <p>Fuel consumption: {fuelConsumption}</p>
      </div>
      <div className={s.engine_size}>
        <svg className={s.icon_gear}>
          <use href={sprite + "#icon-gear"}></use>
        </svg>
        <p>Engine size: {engineSize}</p>
      </div>
    </div>
  );
};

export default Specifications;
