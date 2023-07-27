
import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "./features/expense/expenseSlice";
import createSagaMiddleware from "redux-saga";
import expenseSaga from "./saga/expenseSaga";
const saga = createSagaMiddleware()
const store =configureStore({
    reducer:{
        expense: expenseReducer,
        middleware:[saga],
    }
});


export default store;