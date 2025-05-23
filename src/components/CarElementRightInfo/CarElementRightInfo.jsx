import s from "./CarElementRightInfo.module.css";
import Functionalities from "./functionalities/functionalities.jsx";
import Conditions from "./conditions/conditions.jsx";
import Specifications from "./specifications/specifications.jsx";
import Address from "./address/address.jsx";

const CarElementRightInfo = ({ car }) => {
  const {
    accessories,
    address,
    brand,
    description,
    engineSize,
    fuelConsumption,
    functionalities,
    id,
    mileage,
    model,
    rentalConditions,
    rentalPrice,
    type,
    year,
  } = car;

  return (
    <div className={s.right_info}>
      <div className={s.name_box}>
        <h2 className={s.name}>
          {brand} {model}, {year}
        </h2>
        <p className={s.id}>Id: {id?.slice(0, 4)}</p>
      </div>
      <Address address={address} mileage={mileage} />
      <p className={s.price}>${rentalPrice}</p>
      <p className={s.description}>{description}</p>
      <Conditions rentalConditions={rentalConditions} />
      <Specifications
        year={year}
        type={type}
        fuelConsumption={fuelConsumption}
        engineSize={engineSize}
      />
      <Functionalities
        accessories={accessories}
        functionalities={functionalities}
      />
    </div>
  );
};

export default CarElementRightInfo;
