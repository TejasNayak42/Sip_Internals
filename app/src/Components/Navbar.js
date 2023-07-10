import React from 'react'
import { Link } from 'react-router-dom'
import { BiCartAdd } from "react-icons/bi";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">Fodiee
    <BiCartAdd style={{color:"black"}}/>             
    
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/About">AboutUs</Link>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Menu
          </Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/Menu">Chinese</Link></li>
            <li><Link class="dropdown-item" to="/Menu">Another action</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link class="dropdown-item" to="/">Ready to open soon</Link></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex" role="search">
        
        <p>
        <Link class="btn btn-primary" data-bs-toggle="collapse" to="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{color:'white'}}/>
       
        </Link>
        </p>

      </form>
    
    </div>
  </div>
</nav>
<div class="collapse" id="collapseExample">
  <div class="card card-body">

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page"><a href="/Menu">Menu</a></li>
  </ol>
</nav>
 </div>
</div>
    </div>
  )
}
