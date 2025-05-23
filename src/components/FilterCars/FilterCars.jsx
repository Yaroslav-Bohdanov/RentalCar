import { Formik, Form, Field } from "formik";
import { brands } from "../../data/brands";
import s from "./FilterCars.module.css";
import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCarsList } from "../../redux/operations.js";

const FilterCars = () => {
  const [isBrandOpen, setIsBrandOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const brandRef = useRef(null);
  const priceRef = useRef(null);
  const dispatch = useDispatch();

  const initialValues = {
    brand: "",
    rentalPrice: "",
    minMileage: "",
    maxMileage: "",
  };

  const handleSubmit = (values) => {
    const hasChanges = Object.keys(values).some((key) => {
      if (key === "minMileage" || key === "maxMileage") {
        return values[key] !== "";
      }
      return values[key] !== initialValues[key];
    });

    if (!hasChanges) {
      return;
    }

    dispatch(getCarsList({ ...values, page: 1, limit: 12 }));
  };

  const priceOptions = [...Array(8)].map((_, i) => (i + 1) * 10);

  const handleBrandClick = () => {
    setIsBrandOpen(!isBrandOpen);
    setIsPriceOpen(false);
  };

  const handlePriceClick = () => {
    setIsPriceOpen(!isPriceOpen);
    setIsBrandOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (brandRef.current && !brandRef.current.contains(event.target)) {
        setIsBrandOpen(false);
      }
      if (priceRef.current && !priceRef.current.contains(event.target)) {
        setIsPriceOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={s.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ values, setFieldValue }) => (
          <Form className={s.form}>
            <div className={s.select_wrapper} ref={brandRef}>
              <p className={s.label}>Car brand</p>
              <div
                className={`${s.select} ${isBrandOpen ? s.select_open : ""}`}
                onClick={handleBrandClick}
              >
                {values.brand ? values.brand : "Choose a brand"}
              </div>
              {isBrandOpen && (
                <ul className={s.dropdown}>
                  <div className={s.dropdown_list}>
                    {brands.map((brand) => (
                      <li
                        key={brand}
                        className={s.option}
                        onClick={() => {
                          setFieldValue("brand", brand);
                          setIsBrandOpen(false);
                        }}
                      >
                        {brand}
                      </li>
                    ))}
                  </div>
                </ul>
              )}
            </div>

            <div className={s.select_wrapper} ref={priceRef}>
              <p className={s.label}>Price/ 1 hour</p>
              <div
                className={`${s.select} ${isPriceOpen ? s.select_open : ""}`}
                onClick={handlePriceClick}
              >
                {values.rentalPrice
                  ? `To $${values.rentalPrice}`
                  : "Choose a price"}
              </div>
              {isPriceOpen && (
                <ul className={s.dropdown}>
                  <div className={s.dropdown_list}>
                    {priceOptions.map((price) => (
                      <li
                        key={price}
                        className={s.option}
                        onClick={() => {
                          setFieldValue("rentalPrice", price);
                          setIsPriceOpen(false);
                        }}
                      >
                        {price}
                      </li>
                    ))}
                  </div>
                </ul>
              )}
            </div>

            <div className={s.input_group}>
              <p className={s.label}>Сar mileage / km</p>
              <div className={s.inputs_wrapper}>
                <Field
                  type="number"
                  name="minMileage"
                  className={`${s.input} ${s.input_from}`}
                  maxLength={5}
                />
                <span className={s.from}>From</span>
                <Field
                  type="number"
                  name="maxMileage"
                  className={`${s.input} ${s.input_to}`}
                  maxLength={5}
                />
                <span className={s.to}>To</span>
              </div>
            </div>

            <button type="submit" className={s.button}>
              Search
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FilterCars;
