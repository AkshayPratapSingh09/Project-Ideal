import React from 'react'

const SideBarRight = () => {
  return (
    <>
    <div class="right">
            <div class="messages">
              <div class="heading">
                <h4>Message</h4>
                <i class="uil uil-edit"></i>
              </div>
              {/* <!--===================== SEARCH BAR =====================-->  */}
              <div class="search-bar">
                <i class="uil uil-search"></i>
                <input
                  type="search"
                  placeholder="Search messages"
                  id="message-search"
                />
              </div>
              {/* <!--===================== MESSAGES CATEGORY =====================-->   */}
              <div class="category">
                <h6 class="active">Primary</h6>
                <h6>General</h6>
                <h6 class="message-requests">Request(7)</h6>
              </div>
              {/* <!------------------ MESSAGE ----------------------> */}
              <div class="message">
                <div class="profile-photo">
                  <img src="https://www.stepstherapy.com.au/wp-content/uploads/2018/10/Yazmin-profile-picture-square.jpg" />
                </div>
                <div class="message-body">
                  <h5>Yazmin</h5>
                  <p class="text-muted">Just free now to talk babe!...</p>
                </div>
              </div>
              {/* <!------------------ MESSAGE ----------------------> */}
              <div class="message">
                <div class="profile-photo">
                  <img src="https://i.pinimg.com/originals/54/74/8d/54748de2a9fa0951d2e81b1ffbbd189c.jpg" />
                </div>
                <div class="message-body">
                  <h5>Shravni</h5>
                  <p class="text-bold">Hey bro what are you doing?</p>
                </div>
              </div>
              {/* <!------------------ MESSAGE ----------------------> */}
              <div class="message">
                <div class="profile-photo">
                  <img src="https://viterbischool.usc.edu/wp-content/uploads/2020/05/Lily-Profile-Square.jpeg" />
                </div>
                <div class="message-body">
                  <h5>Svetlana</h5>
                  <p class="text-muted">How are you? my dear!!!</p>
                </div>
              </div>
              {/* <!------------------ MESSAGE ----------------------> */}
              <div class="message">
                <div class="profile-photo">
                  <img src="https://www.voxco.com/wp-content/uploads/2020/05/sumit-square-profile.jpg" />
                  <div class="active"></div>
                </div>
                <div class="message-body">
                  <h5>Bill</h5>
                  <p class="text-bold">Hii... What's up dude!!!!</p>
                </div>
              </div>
            </div>
            {/* <!------------------ END OF MESSAGE ----------------------> */}

            {/* <!------------------ FRIEND REQUESTS ----------------------> */}
            <div class="friend-requests">
              <h4>Requests</h4>
              <div class="request">
                <div class="info">
                  <div class="profile-photo">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIEs8bQoMxE_6avxahksqI7L95Eh7WAZEVp8T32WkHIk_SCtnWWs2lA1GsfZ8vIVy8huI&usqp=CAU" />
                  </div>
                  <div>
                    <h5>Samiksha Sinha</h5>
                    <p class="text-muted">5 mutual friends</p>
                    <div class="action">
                      <button class="btn btn-primary">Accept</button>
                      <button class="btn">Decline</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default SideBarRight