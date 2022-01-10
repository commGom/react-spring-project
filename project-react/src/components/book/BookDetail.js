import Footer from "../common/Footer";
import Header from "../common/Header";
import Nav from "../common/Nav";
import BookDetailView from "./BookDetailView";

const BookDetail = () => {
    return(
        <div>
            <Header></Header>
            <Nav />
            <BookDetailView/>
            <Footer></Footer>
        </div>
    )
}

export default BookDetail;