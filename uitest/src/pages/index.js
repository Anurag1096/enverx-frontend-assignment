
import Head from 'next/head'
import { Inter } from 'next/font/google'
import TabsComponent from '../../component/TabsComponent'
import { getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { expenseRef } from '@/firestore.collection'
import { useDispatch, useSelector } from 'react-redux';
import { saveAllExpense } from '@/features/expense/expenseSlice';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const dispatch = useDispatch();
  const TableHeadList = ["Id", "Category", "Date", "Description", "Amount", " ", " "];
  const [listItems, setListItems] = useState([]);
  // TabNum value
  const [TabNum, setTabNum] = useState(0);
  const [loading, setLoading] = useState(false)
  // function used to call the fireStore db
  const getData = () => {
    setLoading(true)
    getDocs(expenseRef).then(response => {
      const expenseItems = response.docs.map(doc => ({
        data: doc.data(),
        id: doc.id,
      }))
      setListItems(expenseItems);
      dispatch(saveAllExpense(expenseItems));
      setLoading(false)
    }).catch(error => {
      setLoading(false)
      console.log(error)
    })
  }
  //  To call getData
  useEffect(() => {
    if (!TabNum) getData();
  }, [TabNum])


  return (
    <>
      <Head>
        <title>Ui Test</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1>Expense Tracking Tabs</h1>
          
        </div>
        <TabsComponent value={TabNum} getData={getData} setValue={setTabNum} ItemArr={listItems} setItemsArr={setListItems} HeaderList={TableHeadList} loading={loading} setLoading={setLoading} />
      </main>
    </>
  )
}
