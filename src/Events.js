import React from 'react'
import styles from './App.module.css';
import pic19 from './Components/pics/threec.svg'
import pic20 from './Components/pics/location.svg'
import pic21 from './Components/pics/dashvec.svg'
import pic22 from './Components/pics/cal.svg'
import pic23 from './Components/pics/clock.svg'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import pic27 from './Components/pics/cars.svg'
import pic28 from './Components/pics/bikes.svg'
import pic29 from './Components/pics/horses.svg'
import photo from './Components/pics/photography.svg'
import singer from './Components/pics/singing.svg'
import dancer from './Components/pics/dancing.svg'
import dj from './Components/pics/dj.svg'
import idea from './Components/pics/idea.svg'
import artists from './Components/pics/artistslined.svg'
import thub from './Components/pics/thub.svg'
import visista from './Components/pics/visista.svg'
import stumagz from './Components/pics/stumagz.svg'
import sg from './Components/pics/sg.svg'
import aic from './Components/pics/aic.svg'
import ktr from './Components/pics/KTR.svg'
import jayesh from './Components/pics/jayeshr.svg'
import manasa from './Components/pics/manasav.svg'
import ramp from './Components/pics/ramp.svg'

const Events = () => {
    return (
        <>
            <div className={styles.eventstc}>
                <img src={pic19} />
                <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg, #4B0082 0%, rgba(75, 0, 130, 0.7) 47.92%, rgba(75, 0, 130, 0.8) 100%)", height: "800px" }}></div>
                <div className={styles.eventstext}> THE 3<span style={{ color: "#FF9A00" }}>C</span> FESTIVAL</div>
                <div className={styles.eventstext2} >
                    <span> <span style={{ color: "#FF9A00" }}>C</span>reate       </span>
                    <span><span style={{ color: "#FF9A00" }}>C</span>ollaborate       </span>
                    <span><span style={{ color: "#FF9A00" }}>C</span>onquer        </span>

                </div>
                <div className={styles.eventstext3}>
                    India’s colossal content creators festival bringing together content creators,<br />
                    students, innovation cell members, special guests and passionate<br />
                    individuals from across different cities, themed<br />
                </div>
                <div className={styles.eventstext4}>
                    'Convert Your Passion Into Business'
                </div>
                <button className={styles.buttonr}>
                    Register Now
                </button>

            </div>

            <div className={styles.threecbottom}>
                <img src={pic20} className={styles.icons} />
                <span style={{ marginTop: "40px", marginLeft: "10px", marginRight: "5%" }}> T-Hub</span>
                <img src={pic21} className={styles.icons} style={{ marginLeft: "10px" }} />
                <img src={pic22} className={styles.icons} style={{ marginLeft: "5%" }} />
                <span style={{ marginTop: "40px", marginLeft: "10px" }}> 23rd Feb 2023</span>
                <img src={pic21} className={styles.icons} style={{ marginLeft: "5%" }} />
                <img src={pic23} className={styles.icons} style={{ marginLeft: "5%" }} />
                <span style={{ marginTop: "40px", marginLeft: "10px" }}> 10AM TO 9PM</span>

            </div>
            <div className={styles.divc}>

            </div>
            <div style={{ textAlign: "center", color: "#000000", fontSize: "42px", fontFamily: "Montserrat", marginTop: "70px" }}>
                Event Highlights
            </div>


            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false" style={{ marginTop: "70px", overflow: "hidden" }} >

                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={ktr} className="d-block w-100" alt="..." width="650px" height="500px" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Poster Launched by</h5>
                            <p>KTR - IT Minister of Telangana</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={jayesh} className="d-block w-100" alt="..." width="650px" height="500px" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Poster Launched by</h5>
                            <p>MSR - CEO of T-Hub</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={manasa} className="d-block w-100" alt="..." width="850px" height="500px" />
                        <div className="carousel-caption d-none d-md-block">
                            <h2 className={styles.animations}>Guest of honor</h2>
                            <h5 className={styles.animations} style={{ color: "#4B0082" }} >Manasa Varanasi</h5>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon primary" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>

            </div>

            <div className={styles.texth}>
                <div className={styles.textspace}> 100+</div>

                <div className={styles.textspace}> 20+</div>
                <div className={styles.textspace}> 100+</div>
                <div className={styles.textspace}> 10+</div>
                <div className={styles.textspace}> 10+</div>
            </div>
            <div className={styles.flexc1} >
                <div className={styles.textspace1}> Content Creators</div>
                <div className={styles.textspace1}> Colleges</div>
                <div className={styles.textspace1}> THub Startups</div>
                <div className={styles.textspace1}> Cooperates</div>
                <div className={styles.textspace1}> Brands</div>

            </div>
            <div className={styles.boxborder}>
                <div style={{ margin: "auto" }}>Overall the event would be graced by 1500+ audience</div>
            </div>

            <div className={styles.textcenter}>
                Special Shows
            </div>

            <div className={styles.linebreak}>

            </div>


            {/* <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false" style={{ marginTop: "70px", overflow: "hidden" }} >

                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={pic28} className="d-block w-100" alt="..." width="650px" height="500px" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={pic29} className="d-block w-100" alt="..." width="650px" height="500px" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Horse Rally</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={pic27} className="d-block w-100" alt="..." width="850px" height="500px" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Super Car Show</h5>
                            <p>20+ Super Car</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon primary" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>

            </div> */}
            <div className={styles.eventsflexbox}>
                <div className={styles.flexchild1}><img className={styles.flexchild1} src={pic29} /></div>
                <div className={styles.flexchild2}><img className={styles.flexchild1} src={pic27} /></div>
                <div className={styles.flexchild3}><img className={styles.flexchild3} src={pic28} /></div>
                <div className={styles.flexchild4}><img className={styles.flexchild4} src={ramp} /></div>
            </div>


            <div className={styles.eventbackground}>

                <div className={styles.eventpics}>
                    <img src={singer} />
                    <div className={styles.eventtext}>Singing</div>
                </div>
                <div className={styles.eventpics}>
                    <img src={dancer} />
                    <div className={styles.eventtext}>Dancer</div>
                </div>
                <div className={styles.eventpics}>
                    <img src={photo} />
                    <div className={styles.eventtext}>Photography</div>
                </div>
                <div className={styles.eventpics}>
                    <img src={idea} />
                    <div className={styles.eventtext}>Idea Pitching</div>
                </div>
                <div className={styles.eventpics}>
                    <img src={dj} />
                    <div className={styles.eventtext}>Musical Concert/Dj</div>
                </div>
            </div>
            <div className={styles.artistsflex}>
                <img src={artists} style={{ marginLeft: "170px", marginTop: "200px" }} />
                <span className={styles.artistsbox}>  </span>
                <span className={styles.artistsbox}>  </span>
            </div>

            <div className={styles.eventpartner}>
                <h1 style={{ textAlign: "center", fontSize: "35px" }}>Event Partners</h1>
                <div className={styles.eventcontent}>
                    <img src={visista} />
                    <img src={thub} style={{ marginRight: "30px" }} />
                    <img src={aic} style={{ marginRight: "30px" }} />
                    <img src={sg} style={{ marginRight: "30px" }} />
                    <img src={stumagz} />

                </div>

            </div>

            <div className={styles.eventbox}>
                <div>
                    <div className={styles.boxes}>
                        <span>08</span>
                    </div>
                    <span>Days</span>
                </div>
                <div>
                    <div className={styles.boxes}>
                        <span>16</span>
                    </div>
                    <span>Hours</span>
                </div>
                <div>
                    <div className={styles.boxes}>
                        <span>34</span>
                    </div>
                    <span>Minutes</span>
                </div>
                <div>
                    <div className={styles.boxes}>
                        <span>12</span>
                    </div>
                    <span>Seconds</span>
                </div>

            </div>

        </>
    )
}

export default Events;