import React from "react";

export default function Portfolio() {
  return (
    <div id="projects">
      <h2 className="p-4 display-5">Projects</h2>
      <div className="body-container d-flex mx-auto justify-content-center">
        <div className="d-md-flex flex-md-equal ">
          <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">PurrBnB</h2>
              <p className="lead">Airbnb for cats.</p>
            </div>
            <div className="bg-body project flip-card ">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src="https://i.imgur.com/jnsNoxq.png" alt="Avatar" />
                </div>
                <div className="flip-card-back bg-light">
                  <p>
                    Purrbnb is a cat vacation rental solution with contemporary
                    reatures to manage all your fuzzy friends listings.This is a
                    way to seamlessly make reservations! This is an online
                    market place that eables users to sign up, both view and add
                    listings all while enjoying adorable cats!
                  </p>
                  <h3>Technologies Used</h3>
                  <ul className="card-list">
                    <li>React, JavaScript, Express</li>
                    <li>HTML, CSS, Bootstrap</li>
                    <li>MongoDB, Mongoose</li>
                    <li>Heroku, Mongodb Atlas</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-evenly py-3">
              <a
                className="btn btn-outline-secondary"
                href="https://my-purrbnb.herokuapp.com/"
              >
                Live-Demo
              </a>
              <a
                className="btn btn-outline-secondary"
                href="https://github.com/Bereket-U/purrbnb"
              >
                Code-GitHub
              </a>
            </div>
          </div>
          <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Hangman</h2>
              <p className="lead">Browser-based Game.</p>
            </div>
            <div className="bg-body project flip-card ">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src="https://i.imgur.com/1zEHM3c.png" alt="Avatar" />
                </div>
                <div className="flip-card-back bg-light">
                  <p>
                    Hangman is a popular word guessing game where the player
                    attempts to build a missing word by guessing one letter at a
                    time. After a certain number of incorrect guesses, the game
                    ends and the player loses. The game also ends if the player
                    correctly identifies all the letters of the missing word.
                  </p>
                  <h3>Technologies Used</h3>
                  <ul className="card-list">
                    <li>HTML, CSS, Bootstrap</li>
                    <li>JavaScript, DOM Manipulation</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-evenly py-3">
              <a
                className="btn btn-outline-secondary"
                href="https://bereket-u.github.io/hangman-game/"
              >
                Live-Demo
              </a>
              <a
                className="btn btn-outline-secondary"
                href="https://github.com/Bereket-U/hangman-game"
              >
                Code-GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="body-container d-flex mx-auto justify-content-center">
        <div className="d-md-flex flex-md-equal ">
          <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Lets Review</h2>
              <p className="lead">Full Stack Web App.</p>
            </div>
            <div className="bg-body project flip-card ">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src="https://i.imgur.com/x9jeTfL.png" alt="Avatar" />
                </div>
                <div className="flip-card-back bg-light">
                  <p>
                    Lets Review is a full stack web app, where users post their
                    products and get reviews and feedbacks from other users.
                  </p>
                  <h3>Technologies Used</h3>
                  <ul className="card-list">
                    <li>HTML, CSS, Bootstrap</li>
                    <li>JavaScript, EJS</li>
                    <li>Node.js, Express.Js</li>
                    <li>MongoDB, Mongoose</li>
                    <li>Heroku, Mongodb Atlas</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-evenly py-3">
              <a
                className="btn btn-outline-secondary"
                href="https://lets-review.herokuapp.com/"
              >
                Live-Demo
              </a>
              <a
                className="btn btn-outline-secondary"
                href="https://github.com/Bereket-U/lets-review"
              >
                Code-GitHub
              </a>
            </div>
          </div>
          <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Chit-Chat</h2>
              <p className="lead">Simple forum/social media clone.</p>
            </div>
            <div className="bg-body project flip-card ">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src="https://i.imgur.com/G6JZ6Pl.png" alt="Avatar" />
                </div>
                <div className="flip-card-back bg-light">
                  <p>
                    ChitChat is a simple forum/social media clone where users
                    can sign up, edit their profile and make posts. Users can
                    also see other users posts on the homepage.
                  </p>
                  <h3>Technologies Used</h3>
                  <ul className="card-list">
                    <li>Python, Django</li>
                    <li>HTML, CSS, Bootstrap</li>
                    <li>PSQL, AWS S3 Buckets</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-evenly py-3">
              <a
                className="btn btn-outline-secondary"
                href="https://chitchat-sei.herokuapp.com/"
              >
                Live-Demo
              </a>
              <a
                className="btn btn-outline-secondary"
                href="https://github.com/Bereket-U/ChitChat"
              >
                Code-GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
