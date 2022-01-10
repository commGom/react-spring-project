import React from 'react';

const Item = () => {
    return (
        <section>
            <div class="container">
                <div class="justify-content-center row">
                    <div class="col-lg-6 col-md-6 py-3">
                        <div id="demo" class="carousel slide" data-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                                <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                            </div>

                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="image/main_img/book3.png" alt="Los Angeles" class="d-block w-100"></img>
                                </div>
                                <div class="carousel-item">
                                    <img src="image/main_img/book4.png" alt="Chicago" class="d-block w-100"></img>
                                </div>
                                <div class="carousel-item">
                                    <img src="image/main_img/book7.png" alt="New York" class="d-block w-100"></img>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon"></span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                                <span class="carousel-control-next-icon"></span>
                            </button>
                        </div>
                        <img src="image/main_img/book2.png" class="img-fluid w-100" alt="Product image" width="456" height="456" />
                        <img src="image/main_img/book12.png" class="img-fluid w-100" alt="Product image" width="456" height="456" />

                        {/* <div class="position-relative text-dark "> 
                  <img src="image/main_img/book3.png" class="img-fluid w-100" alt="Product image" width="456" height="456"/>
                  <img src="image/main_img/book3.png" class="img-fluid w-100" alt="Product image" width="400" height="456"/>
                  <div class="bottom-0 end-0  pb-5 pe-4 position-absolute ps-4 start-0">
                  </div>                     
              </div>                  */}
                    </div>

                    <div class="col-lg-3 col-md-3 py-3 ">
                        <div class="position-relative text-dark">
                            <div class="row mb-2">
                                <img src="image/main_img/book14.png" class="img-fluid w-100" alt="Product image" width="228" height="228" />
                            </div>
                            <div class="row my-3">
                                <img src="image/main_img/book1.png" class="img-fluid w-100" alt="Product image" width="228" height="228" />
                            </div>
                            <div class="row my-2">

                                <img src="image/main_img/book13.png" class="img-fluid w-100" alt="Product image" width="228" height="228" />
                            </div>
                            <div class="row my-3">

                                <img src="image/main_img/book10.png" class="img-fluid w-100" alt="Product image" width="280" height="200" />
                            </div>
                            <div class="row my-2">
                                <img src="image/main_img/book16.png" class="img-fluid w-100" alt="Product image" width="228" height="228" />
                            </div>
                            <div class="row mt-2">
                                <img src="image/main_img/book17.png" class="img-fluid w-100" alt="Product image" width="280" height="200" />
                            </div>
                            <div class="bottom-0 end-0  pb-5 pe-4 position-absolute ps-4 start-0">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 py-3">
                        <div class="position-relative text-dark">
                            <div class="row mb-2">
                                <img src="image/main_img/book18.png" class="img-fluid w-100" alt="Product image" width="228" height="228" />
                            </div>
                            <div class="row my-3">
                                <img src="image/main_img/book11.png" class="img-fluid w-100" alt="Product image" width="428" height="228" />
                            </div>
                            <div class="row my-2">
                                <img src="image/main_img/book15.png" class="img-fluid w-100" alt="Product image" width="280" height="200" />
                            </div>
                            <div class="row my-3">
                                <img src="image/main_img/book5.png" class="img-fluid w-100" alt="Product image" width="400" height="500" />
                            </div>
                            <div class="row my-2">
                                <img src="image/main_img/book6.png" class="img-fluid w-100" alt="Product image" width="280" height="200" />
                            </div>
                            <div class="row mt-2">
                                <img src="image/main_img/book9.png" class="img-fluid w-100" alt="Product image" width="400" height="500" />
                            </div>
                            <div class="bottom-0 end-0  pb-5 pe-4 position-absolute ps-4 start-0">
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Item;
