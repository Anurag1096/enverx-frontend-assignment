
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allExpenses: [],
    singleExpense:{},
  };

  const ExpenseSlice= createSlice({
    name:"expense",
    initialState,
    reducers:{
        saveAllExpense:(state,action) => {
            state.allExpenses=action.payload
        },
        saveOneExpense:(state,action) =>{
            state.singleExpense=action.payload
        }
    }
  })

  export const { saveAllExpense,saveOneExpense } = ExpenseSlice.actions;
  
  export default ExpenseSlice.reducer;