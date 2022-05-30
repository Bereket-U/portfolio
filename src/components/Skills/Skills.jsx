import React from "react";

export default function Skills() {
  return (
    <div>
      <section class="page-section" id="skills">
        <div class="container px-4 px-lg-5">
          <h2 class="text-center mt-0">My Skills</h2>
          <hr class="divider" />
          <div class="row gx-4 gx-lg-5">
            <div class="col-lg-3 col-md-6 text-center">
              <div class="mt-5">
                <div class="mb-2">
                  <i class="bi-gem fs-1 text-primary"></i>
                </div>
                <h3 class="h4 mb-2">Languages</h3>
                <p class="text-muted mb-0">
                  HTML | CSS | JavaScript | Python | PHP | Java
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 text-center">
              <div class="mt-5">
                <div class="mb-2">
                  <i class="bi-laptop fs-1 text-primary"></i>
                </div>
                <h3 class="h4 mb-2">Frameworks</h3>
                <p class="text-muted mb-0">
                  React | Node.js | Express.js | Django | Bootstrap |
                  Material-UI | Materialize
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 text-center">
              <div class="mt-5">
                <div class="mb-2">
                  <i class="bi-globe fs-1 text-primary"></i>
                </div>
                <h3 class="h4 mb-2">Databases</h3>
                <p class="text-muted mb-0">
                  MongoDB | PostgreSQL | MySql | SQL
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 text-center">
              <div class="mt-5">
                <div class="mb-2">
                  <i class="bi-heart fs-1 text-primary"></i>
                </div>
                <h3 class="h4 mb-2">Other</h3>
                <p class="text-muted mb-0">
                  Git | GitHub | RESTful API | AWS S3 Buckets | Agile | Teamwork
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
