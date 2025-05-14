// import { useState } from 'react'
import './index.css';
import Header from './components/layout/Header';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      {/* HOME */}
      <section id='home'>
        <div>
          <div>
            <h1>Mitchell Saremba</h1>
            <p>Full Stack Developer</p>
          </div>
          <p>
            I build clean, modern, and responsive web applications with a focus on simplicity and
            performance. Whether it's frontend, backend, or full-stack development, I turn ideas
            into seamless digital experiences.
          </p>
          <a href='#services'>
            <button id='findOutMoreBtn'>Find Out More</button>
          </a>
          <a href='#contact'>
            <button id='callToActionBtn'>Get in Touch</button>
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section id='services'>
        <h3>Our Services</h3>
        <div>
          {/* Service Cards */}
          <div>
            {/* Web Development */}
            <div>
              <div>
                <div>
                  <div>
                    <i>JS</i>
                  </div>
                  <div>
                    <h5>Web Development</h5>
                    <hr />
                    <p>Custom websites built with modern tech</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Similar structure for other service cards */}
            {/* ... */}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id='portfolio' className='min-vh-100 py-5 bg-offset'>
        <h3 className='text-center text-secondary display-5 my-4'>Portfolio</h3>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-6 col-lg-4 my-2'>
              <div className='card'>
                <div>
                  <img
                    src='https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp'
                    className='img-fluid'
                  />
                  <a href='#!'>
                    <div
                      className='mask'
                      style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}
                    ></div>
                  </a>
                </div>
                <div className='card-body'>
                  <h5 className='card-title'>Violette Apothecaries</h5>
                  <p className='card-text'>
                    Some quick example text to build on the card title and make up the bulk of the
                    card's content.
                  </p>
                  <a href='#!' className='btn btn-primary'>
                    Button
                  </a>
                </div>
              </div>
            </div>

            <div className='col-12 col-md-6 col-lg-4 my-2'>
              <div className='card'>
                <div className='bg-image hover-overlay'>
                  <img
                    src='https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp'
                    className='img-fluid'
                  />
                  <a href='#!'>
                    <div
                      className='mask'
                      style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}
                    ></div>
                  </a>
                </div>
                <div className='card-body'>
                  <h5 className='card-title'>Violette Apothecaries</h5>
                  <p className='card-text'>
                    Some quick example text to build on the card title and make up the bulk of the
                    card's content.
                  </p>
                  <a href='#!' className='btn btn-primary'>
                    Button
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id='skills'>
        <h3>Skills</h3>
        <div>
          {/* Skill Cards */}
          <div>
            {/* Frontend Development */}
            <div>
              <div>
                <h3>Frontend Development</h3>
                <div>
                  <div>
                    <i>JS</i>
                  </div>
                  <div>
                    <ul>
                      <li>HTML5</li>
                      <li>CSS3</li>
                      <li>JavaScript</li>
                    </ul>
                    <ul>
                      <li>Cross-Browser Compatibility</li>
                      <li>Responsive Design</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Similar structure for other skill cards */}
            {/* ... */}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id='blog' className='min-vh-100 py-5 bg-offset'>
        <h3 className='text-center text-secondary display-5 my-4'>Blog</h3>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 mb-4'>
              <div className='card'>
                <div className='card-body'>
                  <h3 className='card-title'>Blog 1</h3>
                  <p className='card-text'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, facere!
                  </p>
                  <span>Lorem ipsum dolor sit amet.</span>
                </div>
              </div>
            </div>
            <div className='col-md-6 mb-4'>
              <div className='card'>
                <div className='card-body'>
                  <h3 className='card-title'>Blog 2</h3>
                  <p className='card-text'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, facere!
                  </p>
                  <span>Lorem ipsum dolor sit amet.</span>
                </div>
              </div>
            </div>
            <div className='col-md-6 mb-4'>
              <div className='card'>
                <div className='card-body'>
                  <h3 className='card-title'>Blog 3</h3>
                  <p className='card-text'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, facere!
                  </p>
                  <span>Lorem ipsum dolor sit amet.</span>
                </div>
              </div>
            </div>
            <div className='col-md-6 mb-4'>
              <div className='card'>
                <div className='card-body'>
                  <h3 className='card-title'>Blog 4</h3>
                  <p className='card-text'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, facere!
                  </p>
                  <span>Lorem ipsum dolor sit amet.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id='contact'>
        <h3>Get in Touch</h3>
        <div>
          <p>
            Reach out about a project idea, general inquiry, or with any questions you may have.
          </p>
          <div>
            <form id='contactForm' method='post' action=''>
              <div>
                <div>
                  <div>
                    <span>
                      <i id='nameIcon'></i>
                    </span>
                  </div>
                  <input type='text' id='nameInput' placeholder='Name' required />
                </div>
                <span id='nameError'></span>
              </div>

              {/* Similar structure for email and message inputs */}
              {/* ... */}

              <button type='submit' id='formBtn'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer>
        <div>
          <ul>
            <li>
              <p>&copy; 2025 Mitchell Saremba</p>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/mitchellsaremba/' target='_blank'>
                LinkedIn
              </a>
            </li>
            <li>
              <a href='https://github.com/sarembot' target='_blank'>
                GitHub
              </a>
            </li>
            <li>
              <a href='https://x.com/mitchellsaremba' target='_blank'>
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default App;
