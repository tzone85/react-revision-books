import React from "react"
import ReactDOM from "react-dom/client"

import './index.css';

const books = [
    {
        title : "Dog Man: Twenty Thousand Fleas Under the Sea: A Graphic Novel (Dog Man 11): From the Creator of Captain Underpants",
        author : "Dav Pilkey",
        img : "./images/book1.jpg",
        id: 1
    },

    {
        title : "Outlive: The Science and Art of Longevity",
        author : "Peter Attia MD",
        img : "https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71IJiOOyb1L._AC_UL600_SR600,400_.jpg",
        id: 2
    }
];


const BookList = () => {
    return (
        <section className="booklist">

            { books.map((book) => {
                
                // const {img, title, author, id } = book;
                
                return (
                    <Book { ...book } key={ book.id }/>
                    // <Book img={img} title={title} author={author} key={index}/>
                );
                
            }) }
        </section>
    )
}

const Book = (props) => {
    
    const { img, title, author } = props
    console.log(props);
    
    return (
        <article className="book">
            
            <img src={ img } alt={title} />
            <h2>{ title }</h2>
            <h4>{ author }</h4>
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