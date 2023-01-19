import Navbar from "./components/Navbar"
import Reader from "./components/Reader"
import books from "./data"
import React, { useState, useEffect } from "react"
import './App.css';

function App() {
const [val, setVal] = useState({
  book: 'Genesis',
  chapter: 1,
  chapters: [],
  
})


const page = (value) => {
  setVal({...val, chapter: val.chapter + value})
}

const chapterNav = () => {
  const arr = []
  const idx = books[val.book].length
  for (let i = 1; i < idx; i++) {
    arr.push(i)
  }
  setVal({...val, chapters: arr})
}

const changeNav = (name, value) => { 
  setVal({...val, [name]: value})
}

useEffect(() => {
chapterNav()
 
}, [val.book])

  return (
    <div className="App">
    <Navbar val={val} changeNav={changeNav}/>
    <Reader page={page} book={val.book} chapter={val.chapter} />
    </div>
  );
}

export default App;
