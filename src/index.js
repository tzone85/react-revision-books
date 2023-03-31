import React from "react"
import ReactDOM from "react-dom/client"

import './index.css';

const BookList = () => {
    return (
        <section className="booklist">
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    )
}
const Book = () => {
    const title = 'Dog Man: Twenty Thousand Fleas Under the Sea: A Graphic Novel (Dog Man 11): From the Creator of Captain Underpants';
    const author = 'Dav Pilkey'
    return (
        <article className="book">
            
            <img src="./images/book1.jpg" alt="Dog Man" />
            <h2>{title}</h2>
            <h4 className="author">{ author.charAt(0).toUpperCase }</h4>
            <></>

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