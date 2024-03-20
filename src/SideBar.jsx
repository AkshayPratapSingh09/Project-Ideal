import React from 'react'

const SideBar = () => {
  return (
    <>
    <div class="left">
            <a class="profile">
              <div class="profile-photo">
                <img src="https://i.pinimg.com/280x280_RS/70/bd/dc/70bddcca951f099b28dfc499cdef0163.jpg" />
              </div>
              <div class="handle">
                <h4>Deepak</h4>
                <p class="text-muted">@ddkapadnis</p>
              </div>
            </a>
            {/* <!--===================== SIDEBAR =====================--> */}
            <div class="sidebar">
              <a class="menu-item active">
                <span>
                  <i class="uil uil-home"></i>
                </span>{" "}
                <h3>Home</h3>
              </a>
              <a class="menu-item">
                <span>
                  <i class="uil uil-compass"></i>
                </span>{" "}
                <h3>Explore</h3>
              </a>
              <a class="menu-item" id="notification">
                <span>
                  <i class="uil uil-bell">
                    <small class="notification-count">9+</small>
                  </i>
                </span>{" "}
                <h3>Notification</h3>
                {/* <!--===================== NOTIFICATION POPUP =====================--> */}
                <div class="notifications-popup">
                  <div>
                    <div class="profile-photo">
                      <img src="https://images.unsplash.com/photo-1626847037657-fd3622613ce3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGluc3RhZ3JhbSUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                    </div>
                    <div class="notification-body">
                      <b>Jayesh</b> accepted your friend request
                      <small class="text-muted">2 DAYS AGO</small>
                    </div>
                  </div>
                  <div>
                    <div class="profile-photo">
                      <img src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg" />
                    </div>
                    <div class="notification-body">
                      <b>Nikhil</b> accepted your friend request
                      <small class="text-muted">3 DAYS AGO</small>
                    </div>
                  </div>
                  <div>
                    <div class="profile-photo">
                      <img src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg" />
                    </div>
                    <div class="notification-body">
                      <b>Rajesh</b> accepted your friend request
                      <small class="text-muted">4 DAYS AGO</small>
                    </div>
                  </div>
                  <div>
                    <div class="profile-photo">
                      <img src="https://lh3.googleusercontent.com/47bi6kNTTwsc21QgIW8YL92OVdjvl3CLyhLcfPTR9L290dLFRAgINDVe17LFKwc2RbOKUOA-D_9GMQ_v2MrM_EL-TFgo5_A9bqR0MuxwcfL9VQ=w1000-h1000-rj-nu-e365" />
                    </div>
                    <div class="notification-body">
                      <b>Rahul</b> accepted your friend request
                      <small class="text-muted">2 DAYS AGO</small>
                    </div>
                  </div>
                </div>
                {/* <!---------------- END NOTIFICATION POPUP ------------> */}
              </a>
              <a class="menu-item" id="messages-notifications">
                <span>
                  <i class="uil uil-envelope-alt">
                    <small class="notification-count">6</small>
                  </i>
                </span>{" "}
                <h3>Message</h3>
              </a>
              <a class="menu-item">
                <span>
                  <i class="uil uil-bookmark"></i>
                </span>{" "}
                <h3>Bookmarks</h3>
              </a>
              <a class="menu-item">
                <span>
                  <i class="uil uil-chart-line"></i>
                </span>{" "}
                <h3>Analytics</h3>
              </a>
              <a class="menu-item">
                <span>
                  <i class="uil uil-palette"></i>
                </span>{" "}
                <h3>Theme</h3>
              </a>
              <a class="menu-item">
                <span>
                  <i class="uil uil-setting"></i>
                </span>{" "}
                <h3>Settings</h3>
              </a>
            </div>
            {/* <!--===================== END OF SIDEBAR =====================-->   */}
            <label for="create-post" class="btn btn-primary">
              Create Post
            </label>
          </div>
    </>
  )
}

export default SideBar