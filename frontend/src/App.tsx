import { useState, useEffect } from 'react'

function App() {
  let count:number = 0

  const [data, setData] = useState<string>("null")

  useEffect(() => {
    fetch('http://localhost:3000/')
      .then((response) => response.text())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error))
  }, [])

  return (
    <>
      <h1 className="text-2xl font-bold">OdysSea {count}</h1>
      <p>{data}</p>
    </>
  )
}

export default App
