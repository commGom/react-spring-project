import React from 'react';
import { Route, Routes } from 'react-router';
import Book from '../book/Book';
import BookDetailView from '../book/BookDetailView';
import BookSearch from '../book/BookSearch';
import Footer from '../common/Footer';
import Header from '../common/Header';
import Nav from '../common/Nav';
import Item from '../main/Item';
import Mypage from '../mypage/Mypage';


const Main = () => {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Item></Item>}></Route>
        <Route path='/mypage/*' element={<Mypage></Mypage>}>

        </Route>
        <Route path="/book/category" element={<Book></Book>}>
          <Route path=":category"></Route>
        </Route>
        <Route path="/book/search" element={<BookSearch></BookSearch>}>
          <Route path=":search"></Route>
        </Route>
        <Route path="/book/detail" element={<BookDetailView />}>
          <Route path=":bookid"></Route>
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default Main;