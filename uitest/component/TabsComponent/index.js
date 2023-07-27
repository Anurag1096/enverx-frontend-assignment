
import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TransactionList from '../transactionList';
import TransactionalForm from '../transactionalFrom';
import { useState } from 'react';
import { addDoc } from 'firebase/firestore';
import { expenseRef } from '@/firestore.collection';
const TabsComponent = ({ ItemArr, HeaderList, loading }) => {
  const [value, setValue] = React.useState(0);
  const handleSubmit = (e) => {
    e.preventDefault()
    addDoc(expenseRef, {
      category: formData.category,
      date: formData.date,
      description: formData.description,
      amount: formData.amount,
    }).then((response) => {
      console.log(response);
    }).catch(error => {
      console.log(error)
    })

  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const initialValues = {
    category: "",
    date: "",
    description: "",
    amount: "",
  };
  const [formData, setFromData] = useState(initialValues)

  const handleSetFormData = (e) => {
    const { name, value } = e.target;
    setFromData({
      ...formData,
      [name]: value,
    });
  }
  return (<>

    <Box sx={{ width: '100%', bgcolor: 'background.paper', display: 'flex', justifyContent: "center" }}>
      <Tabs value={value} onChange={handleChange} variant="scrollable"
        scrollButtons="auto" >
        <Tab label="Transaction List" />
        <Tab label="Add Transactions" />

      </Tabs>
    </Box>
    {!value ?
      <TransactionList ItemArr={ItemArr} HeaderList={HeaderList} loading={loading} /> :
      <TransactionalForm handleSubmit={handleSubmit} formData={formData} handleSetFormData={handleSetFormData} />}
  </>);
}

export default TabsComponent;