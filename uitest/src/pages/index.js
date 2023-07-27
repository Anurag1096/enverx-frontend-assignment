
import Head from 'next/head'
import { Inter } from 'next/font/google'
import TabsComponent from '../../component/TabsComponent'
import { getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { expenseRef } from '@/firestore.collection'
import { useDispatch } from 'react-redux';
import { saveAllExpense,saveOneExpense } from '@/features/expense/expenseSlice';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const TableHeadList = ["Id", "Category", "Date", "Description", "Amount"," "," "];
  const [listItems, setListItems] = useState([]);
  const [loading,setLoading] =useState(false)
  const dispatch=useDispatch();
  // function used to call the db
  const getData = () => {
    setLoading(true)
    getDocs(expenseRef).then(response => {
      const expenseItems = response.docs.map(doc => ({
        data: doc.data(),
        id: doc.id,
      }))
      console.log(expenseItems)
      setListItems(expenseItems);
      dispatch(saveAllExpense(expenseItems));
      setLoading(false)
    }).catch(error => {
      setLoading(false)
      console.log(error)})
  }
  //  To call getData
  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      <Head>
        <title>Ui Test</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <TabsComponent ItemArr={listItems} HeaderList={TableHeadList} loading={loading} />
      </main>
    </>
  )
}
