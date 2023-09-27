import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRandomUser = createAsyncThunk(
  "card/fetchRandomUser",
  async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/");
      const userData = response.data.results[0];
      console.log("user data", userData);
      return userData;
    } catch (error) {
      throw error;
    }
  }
);
console.log(fetchRandomUser());

const initialState = {
  activeObject: null,
  loading: false,
  error: false,
  cardList: [],
  cardInformation: [
    {
      cardName: "",
      cardNumber: "1234 5678 9101 1123",
      cardMonth: "12",
      cardYear: "24",
      ccv: "123",
      bankName: "Visa",
      cardStateActive: false,
    },
  ],
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addNewCard: (state, action) => {
      state.cardInformation.push(action.payload);
    },
    deleteCard: (state, action) => {
      state.cardInformation = state.cardInformation.filter((card, i) => i !== action.payload);
    }
  },
  extraReducers:(builder) =>  {
    builder
      .addCase(fetchRandomUser.pending, (state)  => {
        state.status = "loading";
      })
      .addCase(fetchRandomUser.fulfilled, (state, action) => {
        state.status = "success";
        const { first, last } = action.payload.name;
        const fullName = `${first} ${last}`.toUpperCase();
       state.cardInformation[0].cardName = fullName;
      })
      .addCase(fetchRandomUser.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      })
      
  },
});
export const { addNewCard, deleteCard} = cardSlice.actions;
export default cardSlice.reducer;
