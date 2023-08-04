import React, { Fragment, useState } from "react";
import "../styles/About.css";
import { useEffect } from "react";

export default function About() {
  const [toggleTab, setToggleTab] = useState(1);
  const toggleState = (index) => {
    setToggleTab(index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <section className="about">
        <div className="row">
          <div className="column">
            <div className="about-img"></div>
          </div>
          <div className="column">
            <div className="tabs">
              <div
                className={
                  toggleTab === 1 ? "single-tab active-tab" : "single-tab"
                }
                onClick={() => toggleState(1)}
              >
                <h2>About</h2>
              </div>

              <div
                className={
                  toggleTab === 2 ? "single-tab active-tab" : "single-tab"
                }
                onClick={() => toggleState(2)}
              >
                <h2>Skills</h2>
              </div>

              <div
                className={
                  toggleTab === 3 ? "single-tab active-tab" : "single-tab"
                }
                onClick={() => toggleState(3)}
              >
                <h2>Experience</h2>
              </div>
            </div>

            <div className="tab-content">
              {/* About content */}
              <div
                className={
                  toggleTab === 1
                    ? "about-content active-content"
                    : "about-content "
                }
              >
                <h2>My Story</h2>
                <div className="main-about-underline"></div>
                <p>
                  Hi! I am a 21-year-old guy, a tech enthusiast who is
                  passionate about creating a blog.
                </p>
                <p>
                  Ever since I was young, I have been fascinated by technology.
                  This blog is where I will share all my experiences, opinions,
                  and journey in this exciting world.
                </p>
                <h3>Network Engineering Student</h3>
                <p>
                  I am currently in my fourth year of studying Network
                  Engineering.
                </p>
              </div>

              {/* skills content */}
              <div
                className={
                  toggleTab === 2
                    ? "about-content active-content"
                    : "about-content"
                }
              >
                <h2>Skills</h2>
                <div className="main-about-underline"></div>
                <p>
                  During my university journey, I've explored various
                  programming languages, such as Typescript, Java, C#, C,
                  Flutter, and React. This exposure has allowed me to acquire a
                  diverse skill set in different languages and programming
                  paradigms that I can leverage in the future.
                </p>
                <p>
                  Below, you will find graphics representing my proficiency in
                  different programming languages based on my Github statistics.
                </p>
                <div className="skills-row">
                  <div className="skills-column">
                    <div className="progress-wrap">
                      <h3>Developer</h3>
                      <div className="progress">
                        <div
                          className="progress-bar Developer"
                          style={{ width: "80%" }}
                        >
                          {/* <span>80%</span> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="skills-column">
                    <div className="progress-wrap">
                      <h3>Designer</h3>
                      <div className="progress">
                        <div
                          className="progress-bar Designer"
                          style={{ width: "90%" }}
                        >
                          {/* <span>90%</span> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Add more skills here */}
                  <div className="skills-column">
                    <div className="progress-wrap">
                      <h3>Another Skill</h3>
                      <div className="progress">
                        <div
                          className="progress-bar AnotherSkill"
                          style={{ width: "70%" }}
                        >
                          {/* <span>70%</span> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Add more skills here */}
                  <div className="skills-column">
                    <div className="progress-wrap">
                      <h3>Yet Another Skill</h3>
                      <div className="progress">
                        <div
                          className="progress-bar YetAnotherSkill"
                          style={{ width: "50%" }}
                        >
                          {/* <span>50%</span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* experiece content */}
              <div
                className={
                  toggleTab === 3
                    ? "about-content active-content"
                    : "about-content "
                }
              >
                <div className="exp-column">
                  <h3>Network Engineering</h3>
                  <div className="main-about-underline"></div>
                  <span>2020-2023</span>
                  <p>
                    I've been studying Network Engineering at UPC in Spain for 4
                    years. During this program, I've gained a deep understanding
                    of networking principles and technologies, which has allowed
                    me to explore the vast and ever-evolving world of computer
                    networks.
                  </p>
                </div>

                <div className="exp-column">
                  <h3>Software Development</h3>
                  <div className="main-about-underline"></div>
                  <span>2021-2023</span>
                  <p>
                    I've been learning programming for the past 2 years,
                    striving to become better every day. Through various
                    projects and hands-on experience, I've honed my skills in
                    languages like Typescript, Java, C#, C, Flutter, and React.
                    My passion for problem-solving and creating innovative
                    solutions drives me to continuously expand my knowledge in
                    the field of software development.
                  </p>
                </div>

                {/* <div className="exp-column">
                  <h3>Photoshop</h3>
                  <div className="main-about-underline"></div>
                  <span>2014-2022</span>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eaque est iure nemo? Officiis magnam culpa totam ea repellat iure, mollitia pariatur exercitationem consectetur! Ipsa dolores explicabo molestiae veniam omnis.</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
