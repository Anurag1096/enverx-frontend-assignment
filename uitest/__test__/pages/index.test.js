
import {render,screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../../src/pages/index"

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('With React Testing Library', () => {
    const initialState = {allExpenses : [{data:{category:"asdf",date:"2013-28-6",description:"some thing",amount:"3444"},id:"lksahjfiowur"}] };
    const mockStore = configureStore();
    let store;

    it('Shows "Expense Tracking Tabs" text  When the tabs are turned off' , () => {
        store = mockStore(initialState);
        const { getByText } = render(
            <Provider store={store}>
                <Home/>
            </Provider>
        );
        expect(getByText('Expense Tracking Tabs')).not.toBeNull();
    });
  
});