import React from "react";

export default function About() {
  return (
    <div id="">
      <header class="masthead">
        <div class="container px-4 px-lg-5 h-100">
          <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
            <div class="col-lg-8 align-self-end">
              <h1 class="text-white font-weight-bold">
                Full Stack Web Developer
              </h1>
              <hr class="divider" />
            </div>
            <div class="col-lg-8 align-self-baseline">
              <p class="text-white-75 mb-5">
                Full Stack Web Developer with a Computer Science degree and 2+
                years of experience, Recently completed an intensive software
                engineering Bootcamp and eager to apply technical skills to a
                new challenge.
                {/* on a lifelong journey of learning */}
              </p>
              <div className="down-arrow">
                <a class="link" href="#skills">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="#ffffff"
                    class="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
