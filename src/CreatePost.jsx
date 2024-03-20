import React from 'react'

const CreatePost = () => {
  return (
    <>
    <form className="create-post">
              <div className="profile-photo">
                <img
                  src="https://i.pinimg.com/280x280_RS/70/bd/dc/70bddcca951f099b28dfc499cdef0163.jpg"
                  alt="Profile"
                />
              </div>
              <input
                type="text"
                placeholder="What's on your mind, Deepak?"
                id="create-post-input"
              />
              <input type="submit" value="Post" className="btn btn-primary" />
            </form>
    </>
  )
}

export default CreatePost