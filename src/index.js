import React from "react"
import ReactDOM from "react-dom/client"

import './index.css';
import books from './books';
import Book from "./Book";

const BookList = () => {

    return (
        <section className="booklist">

            { books.map((book, index) => { 
                
                // const {img, title, author, id } = book;
                
                return (
                    <Book { ...book } key={ book.id } number = {index}/>
                    // <Book img={img} title={title} author={author} key={index}/>
                );
                
            }) }
            {/* <SomeComponent someVal={ someVal }/> */}
        </section>
    )
}

const Image = () => {

}

const Title = () => {

}

const Author = () => {
    
}

// const Greeting = () => {
//     return React.createElement(
//         'div',
//         {},
//         React.createElement('h2', {}, 'Hello world2')
//     );
// }

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList/>)