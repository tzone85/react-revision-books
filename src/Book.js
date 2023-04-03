const Book = (props) => {
    
    const { img, title, author, getBook, id, number } = props
    // console.log(props);
    console.log(number);
    
    const getSingleBook = () => {
        getBook(id);
    }

    return (
        <article className="book">
            
            <img src={ img } alt={title} />
            <h2>{ title }</h2>
            <span className="number">{`# ${number + 1}`}</span>
            <h4>{ author }</h4>
        </article>
        ); 
};

export default Book;