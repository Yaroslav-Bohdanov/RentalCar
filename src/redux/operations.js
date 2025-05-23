import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://car-rental-api.goit.global/";

const defaultQuery = {
  brand: "",
  rentalPrice: "",
  minMileage: "",
  maxMileage: "",
  limit: 12,
  page: 1,
};

export const getCarsList = createAsyncThunk(
  "get/getCarsList",
  async (query = defaultQuery, thunkAPI) => {
    try {
      const params = {
        brand: query.brand || "",
        rentalPrice: query.rentalPrice || "",
        minMileage: query.minMileage || "",
        maxMileage: query.maxMileage || "",
        limit: query.limit || 12,
        page: query.page || 1,
      };

      const response = await axios.get(`${BASE_URL}cars/`, { params });

      return { obj: response.data, query };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCarById = createAsyncThunk(
  "get/getCarById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}cars/${id}`);

      console.log("====================================");
      console.log(response.data);
      console.log("====================================");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
