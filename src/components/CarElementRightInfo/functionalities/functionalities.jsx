import s from "./functionalities.module.css";
import sprite from "../../../../public/sprite.svg";

const Functionalities = ({ accessories, functionalities }) => {
  return (
    <div className={s.functionalities_box}>
      <p>Accessories and functionalities:</p>
      <ul className={s.functionalities_list}>
        {accessories.map((item, index) => (
          <li className={s.functionalities_list_item} key={index}>
            <svg className={s.icon_check}>
              <use href={sprite + "#icon-check-circle"}></use>
            </svg>
            <p>{item}</p>
          </li>
        ))}
        {functionalities.map((item, index) => (
          <li className={s.functionalities_list_item} key={index}>
            <svg className={s.icon_check}>
              <use href={sprite + "#icon-check-circle"}></use>
            </svg>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Functionalities;
