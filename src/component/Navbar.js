import React from 'react'

function Navbar() {
  return (
    <>
    <nav class=" navbar navbar-dark bg-dark  navbar-expand-lg ">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="/">Gujarat</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="/">Delhi</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="/">Haryana</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="/">Maharashtra</a>
      </li>
    </ul>
  </div>
</nav>
    </>
  )
}

export default Navbar