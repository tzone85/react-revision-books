import React from "react"
import ReactDOM from "react-dom/client"

import './index.css';

const title = 'Dog Man: Twenty Thousand Fleas Under the Sea: A Graphic Novel (Dog Man 11): From the Creator of Captain Underpants';
const author = 'Dav Pilkey';
const img = './images/book1.jpg'

const BookList = () => {
    return (
        <section className="booklist">
            <Book author={author} title={title} img={img} />
            <Book  author={author} title={title} img={img}/>
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