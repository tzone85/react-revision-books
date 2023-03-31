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
    return (
        <article className="book">
            <Image />
            <Title />
            <Author />
        </article>
        );
};

const Image = () => <img src="./images/book1.jpg" alt="Dog Man" />

const Title = () => {
    return (
        <h2>Dog Man: Twenty Thousand Fleas Under the Sea: A Graphic Novel (Dog Man 11): From the Creator of Captain Underpants</h2>
    );
}

const Author = () => {
    const inlineStyles = {
            color: '#617', 
            fontSize: '0.75rem', 
            marginTop: '0.5rem'
        };
        
    return <h4 style={inlineStyles}>Dav Pilkey</h4>
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