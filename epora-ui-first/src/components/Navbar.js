// import React from "react";
// import "../components/componentCSS/Navbar.css";
// import { IoMdContact } from "react-icons/io";
// import { BsHandbag } from "react-icons/bs";
// import { RiArrowDownSLine } from "react-icons/ri";

// export default function Navbar() {
//   return (
//     <div className="NavbarOutter">
//       {/* <div><button>Home</button></div>
//     <div><button>Home</button></div>
//     <div><button>Home</button></div>
//     <div><button>Home</button></div> */}

//       <div className="NavbarLHS">
//         <div className="logoContainer">
//           <img src="/images/logo.png" alt="Logo" />
//         </div>
//         <div className="categoriesContainer">
//           <ul className="NavbarLHSUL">
//             <li class="NavbarLHSULli dropdown">
//               <a href="javascript:void(0)" class="dropbtn">
//                 Categories <RiArrowDownSLine />
//               </a>
//               <div class="dropdown-content">
//                 <a href="#">Engilsh Midium</a>
//                 <a href="#">Bangla Midium</a>
//                 <a href="#">Logo Design</a>
//                 <a href="#">Logo Design</a>
//               </div>
//             </li>
//           </ul>
//         </div>

//       </div>

//       <div className="NavbarMiddle">
//         <ul>
//           <li class="NavbarMiddledropdown dropdown">
//             <a href="javascript:void(1)" class="dropbtn">
//               Home <RiArrowDownSLine />
//             </a>
//             <div class="dropdown-content">
//               <a href="#">Link 1</a>
//               <a href="#">Link 2</a>
//               <a href="#">Link 3</a>
//             </div>
//           </li>
//         </ul>

//         <ul>
//           <li class="NavbarMiddledropdown">
//             <a href="javascript:void(1)" class="dropbtn">
//               Pages <RiArrowDownSLine />
//             </a>
//             <div class="dropdown-content">
//               <a href="#">Link 1</a>
//               <a href="#">Link 2</a>
//               <a href="#">Link 3</a>
//             </div>
//           </li>
//         </ul>

//         <ul>
//           <li class="NavbarMiddledropdown dropdown">
//             <a href="javascript:void(1)" class="dropbtn">
//               Instructor <RiArrowDownSLine />
//             </a>
//             <div class="dropdown-content">
//               <a href="#">Link 1</a>
//               <a href="#">Link 2</a>
//               <a href="#">Link 3</a>
//             </div>
//           </li>
//         </ul>

//         <ul>
//           <li class="NavbarMiddledropdown dropdown">
//             <a href="javascript:void(1)" class="dropbtn">
//               Course <RiArrowDownSLine />
//             </a>
//             <div class="dropdown-content">
//               <a href="#">Link 1</a>
//               <a href="#">Link 2</a>
//               <a href="#">Link 3</a>
//             </div>
//           </li>
//         </ul>

//         <ul>
//           <li class="NavbarMiddledropdown dropdown">
//             <a href="javascript:void(1)" class="dropbtn">
//               Blog <RiArrowDownSLine />
//             </a>
//             <div class="dropdown-content">
//               <a href="#">Link 1</a>
//               <a href="#">Link 2</a>
//               <a href="#">Link 3</a>
//             </div>
//           </li>
//         </ul>
//       </div>

//       <div className="search-container">
//         <input type="text" className="search-input" placeholder="Search..." />
//       </div>

//       <div className="NavbarRHSIcons">
//         <div>
//           <IoMdContact />
//         </div>
//         <div>
//           <BsHandbag />
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
// import "./componentCSS/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { IoMdContact } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { GoSearch } from "react-icons/go";

function Navbar() {
  return (
  
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container-fluid my-4">
        <a className="navbar-brand me-3" href="#">
          <img src="/images/logo.png" alt="Logo" />
        </a>
        <div className="d-flex align-items-center">
          <div className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle btn-custom bg-primary text-light py-2 px-2"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
            >
              Categories
            </a>
            <ul className="dropdown-menu">
              <li className="customDropmenuClass"><a className="dropdown-item" href="#">English Medium</a></li>
              <li className="customDropmenuClass"><a className="dropdown-item" href="#">Bangla Medium</a></li>
              <li className="customDropmenuClass"><a className="dropdown-item" href="#">Logo Design</a></li>
              <li className="customDropmenuClass"><a className="dropdown-item" href="#">Video Editing</a></li>
            </ul>
          </div>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-light"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
              
                <span className="NavItemSpan">Home</span>
              </a>
              <ul className="dropdown-menu">
                <li className="customDropmenuClass"><a className="dropdown-item" href="#">Home Style 1</a></li>
                <li className="customDropmenuClass"><a className="dropdown-item" href="#">Home Style 2</a></li>
                <li className="customDropmenuClass"><a className="dropdown-item" href="#">Home Style 3</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-light"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                
                <span className="NavItemSpan">Pages</span>
              </a>
              <ul className="dropdown-menu">
                <li className="customDropmenuClass"><a className="dropdown-item" href="#">About</a></li>
                <li className="customDropmenuClass"><a className="dropdown-item" href="#">Contact</a></li>
                <li className="customDropmenuClass"><a className="dropdown-item" href="#">Checkout</a></li>
                <li className="customDropmenuClass"><a className="dropdown-item" href="#">FAQ</a></li>
                <li className="customDropmenuClass"><a className="dropdown-item" href="#">Register</a></li>
                <li className="customDropmenuClass"><a className="dropdown-item" href="#">Sign In</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-light"
                href="#"
                role="button"s
                data-bs-toggle="dropdown"
              >
                <span className="NavItemSpan">Instructor</span>
              </a>
              <ul className="dropdown-menu">
                <li className="customDropmenuClass"><a className="dropdown-item" href="#">Instructor</a></li>
                <li className="customDropmenuClass"><a className="dropdown-item" href="#">Instructor Profile</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-light"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                
                <span className="NavItemSpan">Course</span>
              </a>
              <ul className="dropdown-menu">
                <li className="customDropmenuClass"><a className="dropdown-item" href="#">Course Grid</a></li>
                <li className="customDropmenuClass"><a className="dropdown-item" href="#">Course List</a></li>
                <li className="customDropmenuClass"><a className="dropdown-item" href="#">Course Details</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-light"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                
                <span className="NavItemSpan">Blog</span>
              </a>
              <ul className="dropdown-menu">
                <li className="customDropmenuClass"><a className="dropdown-item" href="#">Blog Sidebar</a></li>
                <li className="customDropmenuClass"><a className="dropdown-item" href="#">Blog Grid</a></li>
                <li className="customDropmenuClass"><a className="dropdown-item" href="#">Blog Masonry</a></li>
                <li className="customDropmenuClass"><a className="dropdown-item" href="#">Blog Details</a></li>
              </ul>
            </li>
          </ul>
          <form className="d-flex me-3 search-form">
              <GoSearch className="search-icon m" />
              <input
                className="form-control rounde  d-pill px-4 py-2 ms-2"
                type="text"
                placeholder="Search Courses"
              />
            </form>
          <div className="d-flex align-items-center">
            <IoMdContact className="me-3 icon-custom" />
            {/* <BsHandbag className="icon-custom" /> */}
            <IoBagOutline className="icon-custom"  />
          </div>
        </div>
      </div>
    </nav>


  );
}

export default Navbar;
