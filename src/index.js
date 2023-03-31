import React from "react"
import ReactDOM from "react-dom/client"

import './index.css';

const firstBook = {
    title : "Dog Man: Twenty Thousand Fleas Under the Sea: A Graphic Novel (Dog Man 11): From the Creator of Captain Underpants",
    author : "Dav Pilkey",
    img : "./images/book1.jpg"
}

const secondBook = {
    title : "Outlive: The Science and Art of Longevity",
    author : "Peter Attia MD",
    img : "https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71IJiOOyb1L._AC_UL600_SR600,400_.jpg"
}

const BookList = () => {
    return (
        <section className="booklist">
            <Book author={firstBook.author} title={firstBook.title} img={firstBook.img} />
            <Book  author={secondBook.author} title={secondBook.title} img={secondBook.img}/>
        </section>
    )
}
const Book = (props) => {
    console.log(props);

    return (
        <article className="book">
            
            <img src={ props.img } alt={props.title} />
            <h2>{ props.title }</h2>
            <h4>{ props.author }</h4>

        </article>
        );
};

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