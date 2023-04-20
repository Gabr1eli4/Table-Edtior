import "./assets/styles/App.css"

import { useEffect } from 'react'
import { Table } from "./components/Table"
import { Toast } from "./components/Toast"

import { fetchTables } from "./slices/tableSlice"
import { useAppDispatch, useAppSelector } from "./hooks"

function App() {
  const dispatch = useAppDispatch();
  const show = useAppSelector(state => state.toast.show);

  useEffect(() => {
    dispatch(fetchTables());    
  }, [dispatch])

  return (
    <div className="main">
      <Table />
      {show && (
        <Toast message="Hello, World!" duration={5000}/>
      )}
    </div>
  )
}

export default App
