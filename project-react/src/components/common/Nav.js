import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <nav class="bg-white navbar navbar-expand-lg navbar-light py-lg-1 mb-lg-5">
            <div class="collapse navbar-collapse " id="navbarNavDropdown-3">
                <ul class="mx-auto navbar-nav">
                    <li className="nav-item" id='navstyle'> <Link class="nav-link px-lg-3 h2" to="/book/category/소설">소설</Link>
                    </li>
                    <li className="nav-item" id='navstyle'> <Link class="nav-link px-lg-3 h2" to="/book/category/시·에세이">시/에세이</Link>
                    </li>
                    <li className="nav-item" id='navstyle'> <Link class="nav-link px-lg-3 h2" to="/book/category/자기계발">자기계발</Link>
                    </li>
                    <li className="nav-item" id='navstyle'> <Link class="nav-link px-lg-3 h2" to="/book/category/경제·경영">경제/경영</Link>
                    </li>
                    <li className="nav-item" id='navstyle'> <Link class="nav-link px-lg-3 h2" to="/book/category/컴퓨터·IT">컴퓨터/IT</Link>
                    </li>
                    <li className="nav-item" id='navstyle'> <Link class="nav-link px-lg-3 h2" to="/book/category/예술">예술</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;