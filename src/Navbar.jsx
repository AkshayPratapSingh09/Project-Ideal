import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav>
        <div class="container">
          <h2 class="logo">feeds</h2>
          <div class="search-bar">
            <i class="uil uil-search"></i>
            <input type="search" placeholder="Seacrch for creators," />
          </div>
          <div class="create">
            <label class="btn btn-primary" for="create-post">
              Create
            </label>
            <div class="profile-photo">
              <img src="https://i.pinimg.com/280x280_RS/70/bd/dc/70bddcca951f099b28dfc499cdef0163.jpg" />
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar