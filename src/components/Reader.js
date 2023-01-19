import React from "react"
import books from "../data"

const Reader = (props) => {
const {page} = props

const turn = (e) => {
    const name = e.target.name
    const value = name === "nextBtn" ? 1 : -1
    page(value)
}
    return (
        <div className="Reader">
            <div className="read">

            <h1>Holy Bible</h1>
            <h5>King James Version</h5>
            {books[props.book][props.chapter].map((verse, idx) => {
                return <p className="verse"><b>{idx + 1}</b> {verse}</p>
            })}
            <div className="pageBtns">
                <button className="prevBtn" name="prevBtn" onClick={turn}>Prev.</button>
                <button className="nextBtn" name="nextBtn" onClick={turn}>Next</button>
            </div>
            </div>
        </div>
    )
}


export default Reader