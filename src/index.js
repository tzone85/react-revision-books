import React from "react"
import ReactDOM from "react-dom/client"

import './index.css';

const books = [
    {
        title : "Dog Man: Twenty Thousand Fleas Under the Sea: A Graphic Novel (Dog Man 11): From the Creator of Captain Underpants",
        author : "Dav Pilkey",
        img : "./images/book1.jpg"
    },

    {
        title : "Outlive: The Science and Art of Longevity",
        author : "Peter Attia MD",
        img : "https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71IJiOOyb1L._AC_UL600_SR600,400_.jpg"
    }
];

const names = ['Mncedi', 'Peter', 'Paul'];
const newNames = names.map((name) =>{
    return <h1>{name}</h1>
});

console.log('NewNames', newNames);

const BookList = () => {
    return (
        <section className="booklist">
            {newNames}
        </section>
    )
}
const Book = (props) => {
    
    const { img, title, author, children } = props
    return (
        <article className="book">
            
            <img src={ img } alt={title} />
            <h2>{ title }</h2>
            <h4>{ author }</h4>
            { children }
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