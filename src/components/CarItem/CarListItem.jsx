import { Link } from "react-router-dom";
import s from "./CarListItem.module.css";
import updateAddress from "../../settings/updateAddress.js";
import { useDispatch } from "react-redux";
import { setFavoriteCar } from "../../redux/slice.js";
import { selectFavoriteCars } from "../../redux/selectors.js";
import sprite from "../../../public/sprite.svg";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

export const CarListItem = ({ data }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const favoriteCars = useSelector(selectFavoriteCars);
  const {
    id,
    year,
    type,
    rentalPrice,
    rentalCompany,
    mileage,
    img,
    address,
    brand,
    model,
  } = data;
  const { city, country } = updateAddress(address);
  useEffect(() => {
    setIsFavorite(favoriteCars.some((car) => car.id === id));
  }, [favoriteCars, id]);

  const dispatch = useDispatch();

  const handleFavoriteClick = () => {
    dispatch(setFavoriteCar(id));
  };

  return (
    <div className={s.car_item}>
      <div className={s.img_container}>
        <img className={s.img} src={img} alt={brand} />
        <button
          onClick={handleFavoriteClick}
          type="button"
          className={s.favorite_btn}
        >
          {!isFavorite ? (
            <svg width="24" height="24">
              <use href={`${sprite}#icon-like-dafault`}></use>
            </svg>
          ) : (
            <svg width="24" height="24">
              <use href={`${sprite}#icon-like-active`}></use>
            </svg>
          )}
        </button>
      </div>
      <div className={s.top_info_block}>
        <h2 className={s.car_name}>
          {brand} <span>{model}</span>, {year}
        </h2>
        <p className={s.price}>${rentalPrice}</p>
      </div>
      <div className={s.center_block}>
        <p>{city}</p>
        <p className={s.divider}>{country}</p>

        <p className={s.divider}>{rentalCompany}</p>
      </div>
      <div className={`${s.center_block} ${s.bottom_block}`}>
        <p>{type}</p>
        <p className={s.divider}>
          {mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} km
        </p>
      </div>
      <Link className={s.link} to={`/catalog/${id}`}>
        Read more
      </Link>
    </div>
  );
};

export default CarListItem;
