import React, {Fragment, useState} from 'react'
import '../styles/About.css'

export default function About(){
  const [toggleTab, setToggleTab] = useState(1)
  const toggleState = (index) =>{
    setToggleTab(index)
  }
  return(
    <Fragment>
      <section className='about'>
        <div className="row">
          <div className="column">
            <div className="about-img"></div>
          </div>
          <div className="column">

            <div className="tabs">
                <div className={toggleTab === 1 ? "single-tab active-tab": "single-tab"}
                onClick={() => toggleState(1)}>
                  <h2>About</h2>
                </div>

                <div className={toggleTab === 2 ? "single-tab active-tab": "single-tab"}
                onClick={() => toggleState(2)}>
                  <h2>Skills</h2>
                </div>

                <div className={toggleTab === 3 ? "single-tab active-tab": "single-tab"}
                onClick={() => toggleState(3)}>
                  <h2>Experience</h2>
                </div>
            </div>

            <div className="tab-content">
              {/* About content */}
              <div className={toggleTab === 1 ? "about-content active-content":"about-content "}>
                <h2>My Story</h2>
                <div className="main-about-underline"></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt reprehenderit dolorum assumenda mollitia at pariatur soluta asperiores id architecto molestias distinctio harum doloremque accusamus minus, tempora officia voluptas accusantium quia.</p>
                <h3>I Am a web designer and developer with x years of experience</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, officia? Dolor dolorem quasi, in facilis ea magnam veritatis cumque ratione perspiciatis modi aliquam minus quas illo natus porro magni? Optio.</p>
              </div>

              {/* skills content */}
              <div className={toggleTab === 2 ? "about-content active-content":"about-content "}>
                <h2>Skills</h2>
                <div className="main-about-underline"></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt reprehenderit dolorum assumenda mollitia at pariatur soluta asperiores id architecto molestias distinctio harum doloremque accusamus minus, tempora officia voluptas accusantium quia.</p>
                <div className="skills-row">
                  <div className="skills-column">
                    <div className="progress-wrap">
                      <h3>Developer</h3>
                      <div className="progress-bar Developer">
                        <span>80%</span>
                      </div>
                    </div>
                  </div>

                  <div className="skills-column">
                    <div className="progress-wrap">
                      <h3>Designer</h3>
                      <div className="progress-bar Designer">
                        <span>90%</span>
                      </div>
                    </div>
                  </div>

                  <div className="skills-column">
                    <div className="progress-wrap">
                      <h3>Designer</h3>
                      <div className="progress-bar Designer">
                        <span>90%</span>
                      </div>
                    </div>
                  </div>

                  <div className="skills-column">
                    <div className="progress-wrap">
                      <h3>Designer</h3>
                      <div className="progress-bar Designer">
                        <span>90%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* experiece content */}
              <div className={toggleTab === 3 ? "about-content active-content":"about-content "}>
                <div className="exp-column">
                  <h3>Web Developer</h3>
                  <div className="main-about-underline"></div>
                  <span>2014-2022</span>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eaque est iure nemo? Officiis magnam culpa totam ea repellat iure, mollitia pariatur exercitationem consectetur! Ipsa dolores explicabo molestiae veniam omnis.</p>
                </div>

                <div className="exp-column">
                  <h3>Graphic dessigner</h3>
                  <div className="main-about-underline"></div>
                  <span>2014-2022</span>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eaque est iure nemo? Officiis magnam culpa totam ea repellat iure, mollitia pariatur exercitationem consectetur! Ipsa dolores explicabo molestiae veniam omnis.</p>
                </div>

                <div className="exp-column">
                  <h3>Photoshop</h3>
                  <div className="main-about-underline"></div>
                  <span>2014-2022</span>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eaque est iure nemo? Officiis magnam culpa totam ea repellat iure, mollitia pariatur exercitationem consectetur! Ipsa dolores explicabo molestiae veniam omnis.</p>
                </div>
              </div>
            </div>
          </div>
        </div>


      </section>
    </Fragment>
  )
}