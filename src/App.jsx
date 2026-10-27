import { useState } from "react"
import useFetchData from "./useFetchData"

import Header from "./Header"
import "./App.css"

console.log("Hello world from App.jsx")



function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const {records, loading, error} = useFetchData("https://roberts-data-api.robert-mccreary-713.workers.dev/api/v1/datasets/most-spoken-languages-worldwide/records?limit=200")
  console.log(loading, records)
  console.log(searchTerm)
  if(loading) {
    return (<h1>Loading...</h1>)
  }

  const languages = records.filter((lang) => lang.Branch===searchTerm)
  const languagesDisplay = languages.map((lang) => (
    <>
      <article>
        <h1>Language: {lang.Language}</h1>
        <p>Speakers: {lang["Speakers in millions"]}</p>
        <p>Branch: {lang.Branch}</p>
      </article>
    </>
  ))
  

  function clickMe() {
    const inputElement = document.getElementById("search-input")
    // const searchTerm = inputElement.value
    setSearchTerm(inputElement.value)
  }

  return (
    <>
      <Header />

      <div className="search-bar">
        <input type="text"  placeholder="Cats..." id="search-input" />
        <button onClick={clickMe} >Click me</button>
      </div>

      {languagesDisplay}


      <div className="footer" id="footer">
        &copy; Robert 2026
      </div>
    </>
  )
}

export default App
