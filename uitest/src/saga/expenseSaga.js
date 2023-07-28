
import {call,put ,takeEvery} from "redux-saga/effects";
import { getDocs } from "firebase/firestore";
import { expenseRef } from '@/firestore.collection';
import { saveAllExpense } from '@/features/expense/expenseSlice';
// function to save all the data from firestore
function* workGetAllExpense(){
    const expense=yield call(()=> getDocs(expenseRef));
    const expenseArr= yield expense.docs.map(doc => ({
        data: doc.data(),
        id: doc.id,
      }));
   yield put(saveAllExpense(expenseArr));
}

function* expenseSaga(){
    yield takeEvery('expense/saveAllExpense',workGetAllExpense)
}

export default expenseSaga;