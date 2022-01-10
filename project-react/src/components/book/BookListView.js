const BookListView = (props) => {
    const bookList = props.bookList;
    console.log(bookList);

    return (
        <section>
            <div class="container">
                <div class="row">
                    {/* <c:forEach var="list" items="" */}
                    <div class="col-6 col-lg-3 col-md-4 pb-3 pt-3">
                        <div> <a href="#" class="d-block mb-3"><img src="/image/book/novel1.jpg" class="img-fluid w-100" alt="Product image" width="500" height="700" /></a><a href="#" class="d-inline-block link-secondary mb-2 text-decoration-none">소설</a><a href="#" class="link-dark text-decoration-none"><h3 class="h6">불편한 편의점</h3></a>
                            <div><span class="h6">14,000원</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default BookListView;