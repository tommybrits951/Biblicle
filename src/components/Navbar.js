import React from "react";
import { bookList } from "../data";
import NavOption from './NavOption'
const Navbar = (props) => {
    
    const change = (e) => {
        const {name, value} = e.target
        props.changeNav(name, value)
    }
    
    
    return (
        <nav className="Navbar">
           <label htmlFor="book">
            Book:
                </label>
            <select name="book" className="dropdown" id="book" onChange={change}>
                {bookList.map((book, idx) => {
                    return (
                        <NavOption key={idx} link={book}/>
                        )
                    })}
            </select>
                    <label htmlFor="chapter">
                        Chapter:
                </label>
            <select name="chapter" id="chapter" onChange={change}>
                {props.val.chapters.map((chap, idx) => {
                    return <NavOption key={idx} link={chap}/>
                })}
            </select>
        </nav>
    )
}



export default Navbar