import React, {useState} from 'react';
import { Link} from 'react-router-dom';
import { useNavigate } from 'react-router';
import './Header.css';


const Header = () => {
  const [text, setText] = useState('');
  const navigate = useNavigate();
  //const history = useHistory();

  const onChange = (e) =>{
    setText(e.target.value);
  }

  const handleClick = ()=>{
    if(text.length>0){
      navigate("/book/search/"+text);
    }
  }

  return (
    <div>
      <nav class="bg-white navbar navbar-expand-lg navbar-light py-lg-1 mt-3">
        <div className="container"><Link class="navbar-brand text-dark" to="/" id="hanbook">HANBOOK</Link>
          <ul class="flex-row ms-auto navbar-nav order-lg-1 ps-2 pe-2">
            <li class="nav-item"> <div class="nav-link p-2 pb-3 ps-2 pe-2 pt-3 text-dark" title="Search">
              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="검색" id="search_txt" onChange={(e)=>onChange(e)}></input>
                <button class="btn btn-success" id="search_btn" onClick={()=>handleClick()}>Go</button>
              </div>

              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="2em" height="2em">
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </g>
            </svg>  검색 */}
            </div>
            </li>
            {sessionStorage.getItem("userId") ? <li class="nav-item"> <Link class="nav-link pb-3 ps-2 pe-2 pt-3 text-dark" to="/mypage" title="Account"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="2em" height="2em">
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-4.987-3.744A7.966 7.966 0 0 0 12 20c1.97 0 3.773-.712 5.167-1.892A6.979 6.979 0 0 0 12.16 16a6.981 6.981 0 0 0-5.147 2.256zM5.616 16.82A8.975 8.975 0 0 1 12.16 14a8.972 8.972 0 0 1 6.362 2.634 8 8 0 1 0-12.906.187zM12 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
              </g>
            </svg>  마이페이지</Link>
            </li> : ""}
            {/* <li class="nav-item"> <Link class="nav-link pb-3 ps-2 pe-2 pt-3 text-dark" to="/mypage" title="Account"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="2em" height="2em">
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-4.987-3.744A7.966 7.966 0 0 0 12 20c1.97 0 3.773-.712 5.167-1.892A6.979 6.979 0 0 0 12.16 16a6.981 6.981 0 0 0-5.147 2.256zM5.616 16.82A8.975 8.975 0 0 1 12.16 14a8.972 8.972 0 0 1 6.362 2.634 8 8 0 1 0-12.906.187zM12 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
              </g>
            </svg>  마이페이지</Link>
            </li> */}
            <li class="nav-item"> <Link class="nav-link pb-3 ps-2 pe-2 pt-3 text-dark" to={sessionStorage.getItem("userId") ? "/user/signout" : "/user/signin"} title="Login"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="2em" height="2em">
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-4.987-3.744A7.966 7.966 0 0 0 12 20c1.97 0 3.773-.712 5.167-1.892A6.979 6.979 0 0 0 12.16 16a6.981 6.981 0 0 0-5.147 2.256zM5.616 16.82A8.975 8.975 0 0 1 12.16 14a8.972 8.972 0 0 1 6.362 2.634 8 8 0 1 0-12.906.187zM12 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
              </g>
            </svg>{sessionStorage.getItem("userId") ? "로그아웃" : "로그인"}</Link>
            </li>
          </ul>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown-3" aria-controls="navbarNavDropdown-3" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;