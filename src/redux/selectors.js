export const selectCarsList = (state) => state.cars.carsList;
export const selectQuizElement = (state) => state.cars.car;
export const selectLoading = (state) => state.cars.isLoading;
export const selectError = (state) => state.cars.errorMessage;

export const selectCarListQuery = (state) => state.cars.carListQuery;
export const selectTotalPages = (state) => state.cars.totalPages;
export const selectCar = (state) => state.cars.car;
export const selectFavoriteCars = (state) => state.cars.favoriteCars;
