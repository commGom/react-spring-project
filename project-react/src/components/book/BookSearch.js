import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const BookSearch = () => {
  const { search } = useParams();
  

  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    const result = axios({
      url: `http://localhost:8080/mainList/${search}`,
      method: 'get'
    });
    result.then((res) => {
      console.log(res);
      console.log(res.data);
      setBookList(res.data);
    });
    console.log("############"+search);
  }, [search]);

  return (
    // <div>
    //   {/* <BookListView bookList = {bookList}/> */}

    // </div>
    <section>
      <div class="container" id="bookstyle">
        <div class="row">
          {bookList.map((book) => {
            return (
              <div class="col-6 col-lg-3 col-md-4 pb-3 pt-3">
              <div> <Link class="d-block mb-3" to={`/book/detail/${book.id}`}><img src={book.imageurl} class="img-fluid w-100" alt="Product image" width="500" height="700" /></Link><a href="#" class="d-inline-block link-secondary mb-2 text-decoration-none">{book.category}</a><Link class="link-dark text-decoration-none" to="/book/detail"><h3 class="h6">{book.name}</h3></Link>
                <div><span class="h6">{book.price}원</span>
                </div>
              </div>
            </div>
            )
          })}

        </div>
      </div>
    </section>
  );
};

export default BookSearch;