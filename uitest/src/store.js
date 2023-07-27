
import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "./features/expense/expenseSlice";

const store =configureStore({
    reducer:{
        expense: expenseReducer,
    }
})

export default store;