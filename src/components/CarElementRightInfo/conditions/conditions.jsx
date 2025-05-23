import s from "./conditions.module.css";
import sprite from "../../../../public/sprite.svg";

const Conditions = ({ rentalConditions }) => {
  return (
    <div className={s.conditions_box}>
      <p>Rental conditions:</p>
      <ul className={s.conditions_list}>
        {rentalConditions.map((item, index) => (
          <li className={s.conditions_list_item} key={index}>
            <svg className={s.icon_check}>
              <use href={sprite + "#icon-check-circle"}></use>
            </svg>
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Conditions;
