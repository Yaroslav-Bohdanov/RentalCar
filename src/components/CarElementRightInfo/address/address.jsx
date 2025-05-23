import s from "./address.module.css";
import sprite from "../../../../public/sprite.svg";
import updateAddress from "../../../settings/updateAddress";

const Address = ({ address, mileage }) => {
  const { city, country } = updateAddress(address);
  return (
    <div className={s.address_box}>
      <div className={s.address_box_item}>
        <svg className={s.icon_location}>
          <use href={sprite + "#icon-Location"}></use>
        </svg>
        <p>{city},&nbsp;&nbsp;</p>
        <p className={s.divider}>{country}</p>
      </div>
      <p className={s.mileage}>
        Millage: {mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} km
      </p>
    </div>
  );
};

export default Address;
