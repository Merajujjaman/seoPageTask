import { useEffect, useState } from "react"
import axios from 'axios'
import Card from "./card"

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('https://seo-page-server-lake.vercel.app/data')
      .then(res => {
        setData(res.data)
        // console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])
  return (
    <div className=" py-10 px-10 mim-h-screen md:flex w-full justify-between overflow-x-scroll gap-10 ">
      {
        data.map(item => <Card key={item.category} items={item}></Card>)
      }
    </div>
  )
}

export default App
