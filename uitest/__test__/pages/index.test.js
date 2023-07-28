
import {queryByText, render,screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../../src/pages/index"
import { createMocks } from 'next-router-mock';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
jest.mock('next/router', () => ({
    useRouter: jest.fn()
}));
describe('With React Testing Library', () => {
    const initialState = {
        expense: {
          allExpenses: [
            {
              data: {
                category: "asdf",
                date: "2013-28-6",
                description: "some thing",
                amount: "3444"
              },
              id: "lksahjfiowur"
            }
          ]
        }
      };
    const mockStore = configureStore();
    let store;
    it('Shows "Expense Tracking Tabs" text  When the tabs are turned off' , () => {
        store = mockStore(initialState);
        
        const { queryByText } = render(
            <Provider store={store}>
                <Home/>
            </Provider>
        );
        expect(queryByText('Expense Tracking Tabs')).toBeInTheDocument();
    });
  
});