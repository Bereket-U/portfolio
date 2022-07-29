import React from "react";
import github from "./images/github.png";
import hangman from "./images/hangman.png";
import purbnb from "./images/purbnb.png";
import lets from "./images/lets.png";
import recipe from "./images/recipe.png";
import chitchat from "./images/chitchat.png";

export default function Portfolio() {
  return (
    <div id="projects">
      <section class="page-section bg-light" id="portfolio">
        <div class="container">
          <div class="text-center">
            <h2 class="section-heading">Top Projects</h2>
            <hr class="divider" />
          </div>
          <div class="row py-4">
            <div class="col-lg-4 col-sm-6 mb-4">
              <div class="portfolio-item">
                <a
                  class="portfolio-link"
                  data-bs-toggle="modal"
                  href="#portfolioModal1"
                >
                  <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                      <div className="portfolio-desc">
                        <p>
                          A simple Javascript application, Using the GitHub Rest
                          API, recreated the GitHub profile page
                        </p>
                        <p>
                          <strong>Tools: </strong> HTML, CSS, JavaScript
                        </p>
                      </div>
                    </div>
                  </div>
                  <img class="img-fluid" src={github} alt="..." />
                </a>
                <div class="portfolio-caption">
                  <div class="portfolio-caption-heading">
                    GitHub Profile Finder
                  </div>
                  <div class="portfolio-caption-subheading text-muted">
                    Using the GitHub Rest API
                  </div>
                  <div className="py-3">
                    <a
                      className="btn btn-success"
                      href="https://glistening-lokum-15880f.netlify.app/"
                    >
                      Live-Demo
                    </a>
                    &nbsp;
                    <a
                      className="btn btn-success"
                      href="https://github.com/Bereket-U/github-profile-finder"
                    >
                      Code-GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-4">
              <div class="portfolio-item">
                <a
                  class="portfolio-link"
                  data-bs-toggle="modal"
                  href="#portfolioModal2"
                >
                  <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                      <div className="portfolio-desc">
                        <p>
                          Hangman is a popular word guessing game where the
                          player attempts to build a missing word by guessing
                          one letter at a time...
                        </p>
                        <p>
                          <strong>Tools: </strong> HTML, CSS, JavaScript
                        </p>
                      </div>
                    </div>
                  </div>
                  <img class="img-fluid" src={hangman} alt="..." />
                </a>
                <div class="portfolio-caption">
                  <div class="portfolio-caption-heading">Hangman Game</div>
                  <div class="portfolio-caption-subheading text-muted">
                    Browser-based Game - javascript
                  </div>
                  <div className="py-3">
                    <a
                      className="btn btn-success"
                      href="https://bereket-u.github.io/hangman-game/"
                    >
                      Live-Demo
                    </a>
                    &nbsp;
                    <a
                      className="btn btn-success"
                      href="https://github.com/Bereket-U/hangman-game"
                    >
                      Code-GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-4">
              <div class="portfolio-item">
                <a
                  class="portfolio-link"
                  data-bs-toggle="modal"
                  href="#portfolioModal3"
                >
                  <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                      <div className="portfolio-desc">
                        <p>
                          (Airbnb for cats) Purrbnb is a cat vacation rental
                          solution.
                        </p>
                        <p>
                          <strong>Tools: </strong> React, JavaScript, JSX, HTML,
                          CSS, Bootstrap, Express, MongoDB, Mongoose, Heroku,
                          Mongodb Atlas
                        </p>
                      </div>
                    </div>
                  </div>
                  <img class="img-fluid" src={purbnb} alt="..." />
                </a>
                <div class="portfolio-caption">
                  <div class="portfolio-caption-heading">PurrBnB</div>
                  <div class="portfolio-caption-subheading text-muted">
                    Full-Stack Web App - React
                  </div>
                  <div className="py-3">
                    <a
                      className="btn btn-success"
                      href="https://my-purrbnb.herokuapp.com/"
                    >
                      Live-Demo
                    </a>
                    &nbsp;
                    <a
                      className="btn btn-success"
                      href="https://github.com/Bereket-U/purrbnb"
                    >
                      Code-GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
              <div class="portfolio-item">
                <a
                  class="portfolio-link"
                  data-bs-toggle="modal"
                  href="#portfolioModal4"
                >
                  <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                      <div className="portfolio-desc">
                        <p>
                          Full stack app, where users post their products and
                          get reviews
                        </p>
                        <p>
                          <strong>Tools: </strong> HTML, CSS, Bootstrap
                          JavaScript, EJS Node.js, Express.Js MongoDB, Mongoose
                        </p>
                      </div>
                    </div>
                  </div>
                  <img class="img-fluid" src={lets} alt="..." />
                </a>
                <div class="portfolio-caption">
                  <div class="portfolio-caption-heading">Lets Review</div>
                  <div class="portfolio-caption-subheading text-muted">
                    Full-Stack Web App - Node.js/Express
                  </div>

                  <div className="py-3">
                    <a
                      className="btn btn-success"
                      href="https://lets-review.herokuapp.com/"
                    >
                      Live-Demo
                    </a>
                    &nbsp;
                    <a
                      className="btn btn-success"
                      href="https://github.com/Bereket-U/lets-review"
                    >
                      Code-GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-4 mb-sm-0">
              <div class="portfolio-item">
                <a
                  class="portfolio-link"
                  data-bs-toggle="modal"
                  href="#portfolioModal5"
                >
                  <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                      <div className="portfolio-desc">
                        <p>A simple Food Recipe Finder using third party api</p>
                        <p>
                          <strong>Tools: </strong> React, HTML, CSS, JavaScript,
                          Material-UI
                        </p>
                      </div>
                    </div>
                  </div>
                  <img class="img-fluid" src={recipe} alt="..." />
                </a>
                <div class="portfolio-caption">
                  <div class="portfolio-caption-heading">Recipe Finder</div>
                  <div class="portfolio-caption-subheading text-muted">
                    Using a third party API
                  </div>
                  <div className="py-3">
                    <a
                      className="btn btn-success"
                      href="https://bereket-u.github.io/food-recipe-app-api/"
                    >
                      Live-Demo
                    </a>
                    &nbsp;
                    <a
                      className="btn btn-success"
                      href="https://github.com/Bereket-U/food-recipe-app-api"
                    >
                      Code-GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="portfolio-item">
                <a
                  class="portfolio-link"
                  data-bs-toggle="modal"
                  href="#portfolioModal6"
                >
                  <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                      <div className="portfolio-desc">
                        <p>
                          A simple social media clone where users can sign up,
                          edit their profile and make posts.
                        </p>
                        <p>
                          <strong>Tools: </strong> Python, Django, HTML, CSS,
                          Bootstrap, PSQL, AWS S3 Buckets.
                        </p>
                      </div>
                    </div>
                  </div>
                  <img class="img-fluid" src={chitchat} alt="..." />
                </a>
                <div class="portfolio-caption">
                  <div class="portfolio-caption-heading">Chit-Chat</div>
                  <div class="portfolio-caption-subheading text-muted">
                    Full-Stack Web App - Django
                  </div>

                  <div className="py-3">
                    <a
                      className="btn btn-success"
                      href="https://chitchat-sei.herokuapp.com/"
                    >
                      Live-Demo
                    </a>
                    &nbsp;
                    <a
                      className="btn btn-success"
                      href="https://github.com/Bereket-U/ChitChat"
                    >
                      Code-GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
