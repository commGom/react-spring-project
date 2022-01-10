/*eslint-disable */

import logo from './logo.svg';
// import './App.css';
import Signin from './components/user/Signin';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Main from './components/main/Main';
import Book from './components/book/Book';
import BookDetail from './components/book/BookDetail';
import Signout from './components/user/Signout';
import Signup from './components/user/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main></Main>}>
            <Route path="*"></Route>
          </Route>
          <Route path="/user/signin" element={<Signin></Signin>}></Route>
          <Route path="/user/signup" element={<Signup></Signup>}></Route>
          <Route path="/user/signout" element={<Signout></Signout>}></Route>
          <Route path="/book" element={<Book></Book>}></Route>
          <Route path="/book/detail" element={<BookDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
