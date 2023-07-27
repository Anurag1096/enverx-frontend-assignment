
import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TransactionList from '../transactionList';
import TransactionalForm from '../transactionalFrom';
import { useState } from 'react';
import { addDoc } from 'firebase/firestore';
import { expenseRef } from '@/firestore.collection';
import { TextField } from '@mui/material';
import { useSelector } from 'react-redux';
const TabsComponent = ({ ItemArr, setItemsArr, HeaderList, value, setValue, loading, setLoading }) => {
  let initialValues = {
    category: "",
    date: "",
    description: "",
    amount: "",
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [formData, setFromData] = useState(initialValues)
  const allData = useSelector(state => state.expense.allExpenses)
  const handleSetFormData = (e) => {
    const { name, value } = e.target;
    setFromData({
      ...formData,
      [name]: value,
    });
  }
  // Form submit
  const handleSubmit = (e) => {
    e.preventDefault()
    addDoc(expenseRef, {
      category: formData.category,
      date: formData.date,
      description: formData.description,
      amount: formData.amount,
    }).then((response) => {
      console.log(response);
      setFromData(initialValues)
      setValue(0)
    }).catch(error => {
      console.log(error)
    })

  }
  // For handling search bar
  const handleSearch = (e) => {
    e.preventDefault()
    setLoading(true)
    let search = e.target.value
    const tempArr = ItemArr.find(item => item.data.category === e.target.value)
    if (tempArr) {
      setItemsArr([tempArr])
      setLoading(false)
    }
    if (!search.length) {
      setLoading(false)
      setItemsArr(allData)
    }
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
      (<>
        <div style={{ display: "flex", justifyContent: "center", width: "100%", margin: 0 }}>

          <TextField
            sx={{ width: "620px" }}
            margin="normal"
            id="Search"
            label="Search by Category"
            name="search"
            onChange={handleSearch}
            variant="outlined"
          />

        </div>
        <TransactionList ItemArr={ItemArr} HeaderList={HeaderList} loading={loading} />
      </>
      )
      :
      <TransactionalForm handleSubmit={handleSubmit} formData={formData} handleSetFormData={handleSetFormData} />}
  </>);
}

export default TabsComponent;