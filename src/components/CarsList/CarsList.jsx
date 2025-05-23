import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCarListQuery,
  selectCarsList,
  selectError,
  selectLoading,
  selectTotalPages,
} from "../../redux/selectors.js";
import { getCarsList } from "../../redux/operations.js";
import Loader from "../Loader/Loader.jsx";
import CarListItem from "../CarItem/CarListItem.jsx";
import s from "./CarsList.module.css";

const CarsList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const carsList = useSelector(selectCarsList);
  const isLoading = useSelector(selectLoading);
  const errorMessage = useSelector(selectError);
  const carListQuery = useSelector(selectCarListQuery);
  const totalPages = useSelector(selectTotalPages);

  const dispatch = useDispatch();
  const carsContainerRef = useRef(null);
  const prevListLengthRef = useRef(0);

  useEffect(() => {
    dispatch(getCarsList());
  }, [dispatch]);

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    prevListLengthRef.current = carsList.length;

    dispatch(getCarsList({ ...carListQuery, page: nextPage })).then(() => {
      if (carsContainerRef.current) {
        const firstNewElement =
          carsContainerRef.current.children[prevListLengthRef.current];

        if (firstNewElement) {
          firstNewElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });
  };

  if (errorMessage) {
    return <div>Error: {errorMessage}</div>;
  }

  const showLoadMore =
    carsList.length >= 12 && !isLoading && currentPage !== totalPages;

  return (
    <section>
      <div className={s.container}>
        <ul className={s.list} ref={carsContainerRef}>
          {!isLoading ? (
            <>
              {carsList.length > 0 ? (
                <>
                  {carsList.map((item) => (
                    <li key={item.id} className={s.item}>
                      <CarListItem data={item} />
                    </li>
                  ))}
                </>
              ) : (
                <li>No cars found</li>
              )}
            </>
          ) : (
            <Loader />
          )}
        </ul>
        {showLoadMore && (
          <button
            type="button"
            className={s.btn}
            onClick={handleLoadMore}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Load more"}
          </button>
        )}
      </div>
    </section>
  );
};

export default CarsList;
