
import styles from './App.module.css';
import stylesm from './Aman.module.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { useEffect, useState } from 'react';
import pic1 from './Components/pics/mockup1.png'
import pic2 from './Components/pics/mockup2.png'
import pic3 from './Components/pics/mockup3.png'
import pic4 from './Components/pics/valuationfeature.svg'
import pic5 from './Components/pics/top10.svg'
import pic6 from './Components/pics/leaderboard.svg'
import pic7 from './Components/pics/akash.svg'
import pic8 from './Components/pics/teampic1.svg'
import pic9 from './Components/pics/teampic2.svg'
import Newline from './Components/Newline';
import Newline2 from './Components/Newline2';
import Bgscroll from './Components/Bgscroll';
import Navbar from './Navbar';
import Events from './Events';






function App() {
  return (
    <>
      <div style={{ position: "relative" }}>
        <Router>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route path='/events' element={<Events />} />

            </Route>
          </Routes>
        </Router>
      </div>



      <Events />

      {/* <div className={styles.containerland} >
        <h1 className={styles.containertext} >KNOW <span style={{ backgroundColor: "white", color: "#4B0082" }}>YOURSELF</span> FIRST</h1>
        <p style={{ marginTop: "20px", color: "white", textAlign: "center" }} > DENAURLEN is a world&apos;s first social media application with gamification<br />
          touch where users' activity spent time is monetized and uploaded content
          <br />is valued using U-coins thus creating an absolute win:win!</p>
        <div className={styles.flexc}>
          <img src={pic1} style={{ marginTop: "80px", width: "453px", marginLeft: "20px" }} ></img>
          <img src={pic2} style={{ height: "855px" }} ></img>
          <img src={pic3} style={{ marginTop: "80px", width: "453px", marginRight: "20px" }}></img>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", padding: "5px", marginTop: "265px" }}>
        <button style={{ backgroundColor: "#4B0082", paddingRight: "25px", paddingLeft: "25px", color: "white", paddingTop: "15px", paddingBottom: "15px" }}> Download the App !</button>
      </div>



      <div className={styles.mscroll} style={{ marginBottom: "100px", marginTop: "50px" }}>
        <div className={styles.mscrolltitle}>
          <div>
            <h1>
              <a>Incubated at T-Hub - World's Largest Innovation Campus</a>&nbsp; <a>* </a>&nbsp;
            </h1>
            <h1>
              <a>Incubated at T-Hub - World's Largest Innovation Campus</a>&nbsp; <a> * </a>&nbsp;
            </h1>
            <h1>
              <a>Incubated at T-Hub - World's Largest Innovation Campus</a>&nbsp; <a>* </a>&nbsp;
            </h1>
            <h1>
              <a>Incubated at T-Hub - World's Largest Innovation Campus</a>&nbsp; <a>* </a>&nbsp;
            </h1>
          </div>
        </div>
      </div>


      <div style={{ display: "flex", justifyContent: "left" }}>
        <div style={{ marginLeft: "100px", width: "602px", height: "400px", background: "#D9D9D9", borderRadius: "31px" }}></div>
        <div style={{ marginLeft: "195px", lineHeight: "2", fontSize: "30px" }}>
          Join the <br></br>
          revolution of <br />
          introducing a <br />
          first of-its kind <br />
          <div style={{ color: "#FF9A00" }}> gamified  social</div>
          <div style={{ color: "#FF9A00" }}>media</div>
        </div>
      </div>

      <div style={{ width: "1280px", height: "1922px", background: "rgba(246, 146, 4, 0.05)", marginTop: "45px", borderRadius: "89px", marginLeft: "45px" }}>
        <h1 style={{ textAlign: "center", fontSize: "42px" }}> Our Core Features</h1>



        <div className={styles.rowcontainer} style={{ marginTop: "70px" }}  >
          <img src={pic4} style={{ float: "right" }} ></img>
          <div>01| Valuation Process<br /></div>
          <div style={{ fontSize: "30px", color: "#2E2E2E" }}>
            Every Post Has A unique Feature
            <div style={{ color: "#00000080", fontSize: "20px" }}>
              Through Denaurlen&apos;s  &apos;Valuation Process&apos;<br />
              a post gets valued by other users with<br />
              U-coins giving credibility and right reach<br />
              to the creators/uploaders.
            </div>
          </div>
        </div>

        <div className={styles.rowcontainer} style={{ marginTop: "250px" }}  >
          <img src={pic5} style={{ float: "left", marginRight: "215px" }} ></img>
          <div style={{ lineHeight: "5" }}>02| Top 10&apos;s<br /></div>
          <div style={{ fontSize: "30px", color: "#2E2E2E" }}>
            Know & Represent Yourself!
            <div style={{ color: "#00000080", fontSize: "20px" }}>
              Through Denaurlen&apos;s  &apos;Valuation Process&apos;<br />
              a post gets valued by other users with<br />
              U-coins giving credibility and right reach<br />
              to the creators/uploaders.
            </div>
          </div>
        </div>


        <div className={styles.rowcontainer} style={{ marginTop: "270px" }}  >
          <img src={pic6} style={{ float: "right" }} ></img>
          <div>03| Leaderboard<br /></div>
          <div style={{ fontSize: "30px", color: "#2E2E2E" }}>
            Connect : Collect : Climb Up
            <div style={{ color: "#00000080", fontSize: "20px" }}>
              More the U-coins collected, the more<br />
              visibility for a profile in the global <br />
              leaderboard ranking!
            </div>
          </div>
        </div>






      </div>


      <h1 style={{ textAlign: "center", lineHeight: "3" }}>Product Testimonals</h1>

      <div className={styles.rowcontainer}>
        <img src={pic7} style={{ float: "left", marginRight: "20px" }}></img>
        <i class="bi bi-quote"></i>
        <div style={{ fontSize: "20px", color: "#7D7D7D", marginLeft: "28px" }}>
          It is a long established fact that a reader will be distracted by the<br />
          readable content of a page when looking at its layout. The point of using<br />
          Lorem Ipsum is that it has a more-or-less normal distribution of letters
        </div>
        <h1 style={{ fontSize: "20px", color: "#000000", marginTop: "20px" }}>Aman Tripati</h1>
        <h2 style={{ color: "#000000", fontSize: "20px" }}>Lead UI Designer|Denaurlen</h2>
      </div>

      <div className={stylesm.amanpic} >
        <h1>About Us</h1>
        <button > Know More</button>

      </div>

      <div className={stylesm.line}></div>

      <div className={stylesm.flexb} >
        Well, we perceive ourselves as a young passionate & vision driven team and not<br />
        just as entrepreneurs/founders or anything of the sort but like any other individuals<br />
        who’ve had believed an idea which could have a global impact and are consistent.<br />

      </div>

      <div className={stylesm.flexb}>
        <img src={pic8} />
        <img src={pic9} />
      </div>

      <div className={stylesm.yellowb}>

      </div> */}


    </>
  );
}



export default App;

