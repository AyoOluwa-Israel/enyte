import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import './App.css';
import Cards from './Cards';

const url = 'https://api.enye.tech/v1/challenge/records'

function App() {

  const [loading, setLoading] = useState(false)
  const [records, setRecords] = useState([])

  const fetchRecords = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      
      console.log(data.records)
      const profiles  = data.records;
      
      // if(records){
      //   const newRecords = data.records.map((item) => {
      //     const {FirstName, LastName, Gender} = item;
      //     return{
      //       firstname: FirstName,
      //       lastname: LastName,
      //       gender: Gender
      //     }
        setRecords(profiles)
      // setRecords(newRecords)
      // console.log(newRecords);
      // }else{
      //   setRecords([])
      // }
      console.log(profiles);
      
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  useEffect(() => {
    fetchRecords()
  }, [])

  // if (loading) {
  //   return (
  //     <main>
  //       <Loading />
  //     </main>
  //   )
  // }
// console.log(records.records.profiles);
  
  return (
    <div className="App">
        Hello world
        <h1>
          
        </h1>
      <Cards />
    </div>
  );
}

export default App;
