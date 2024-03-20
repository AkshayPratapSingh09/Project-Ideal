import { useState } from "react";
import "./App.css";
import Feeds from "./Feeds";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import Stories from "./Stories";
import CreatePost from "./CreatePost";
import SideBarRight from "./SideBarRight";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar/>
      {/* <!------------------------------ MAIN ------------------------------> */}
      <main>
        <div class="container">
          {/* <!--===================== LEFT =====================--> */}
          <SideBar/>
          {/* <!--===================== END OF LEFT =====================-->   */}

          {/* <!--===================== MIDDLE =====================--> */}
          <div class="middle">
            {/* <!--===================== STORIES =====================-->   */}
            <Stories/>
            {/* <!--===================== END OF STORIES =====================-->       */}
            <CreatePost/>
            {/* <!--===================== FEEDS =====================-->  */}

            <Feeds />
            {/* <!--===================== END OF FEEDS =====================-->     */}
          </div>
          {/* <!--===================== END OF MIDDLE =====================-->  */}

          {/* <!--===================== RIGHT =====================--> */}
          <SideBarRight/>
        </div>
      </main>
    </>
  );
}

export default App;
