
















import React, { useEffect, useRef } from "react";
// import portfolio css
import "./Portfolio.css"
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.css";

import portfolioimg1 from "../assets/img/portfolio/portfolio-1.webp";
import portfolioimg2 from "../assets/img/portfolio/portfolio-2.webp";
import portfolioimg5 from "../assets/img/portfolio/portfolio-5.webp";
import portfolioimg4 from "../assets/img/portfolio/portfolio-4.webp";
import portfolioimg7 from "../assets/img/portfolio/portfolio-7.webp";
import portfolioimg10 from "../assets/img/portfolio/portfolio-10.webp"

function Portfolio() {
  const isotopeContainer = useRef(null);
  const iso = useRef(null);

  useEffect(() => {
    const lightbox = GLightbox({
      selector: ".glightbox"
    });

    imagesLoaded(isotopeContainer.current, () => {
      iso.current = new Isotope(isotopeContainer.current, {
        itemSelector: ".isotope-item",
        layoutMode: "masonry",
        sortBy: "original-order"
      });
    });

    return () => {
      if (iso.current) iso.current.destroy();
      lightbox.destroy();
    };
  }, []);

  const handleFilterClick = (e, filter) => {
    e.preventDefault();
    const active = document.querySelector(".filter-active");
    if (active) active.classList.remove("filter-active");
    e.target.classList.add("filter-active");
    iso.current.arrange({ filter });
  };

  return (
    <div>
      <main className="main">
        <section id="portfolio" className="portfolio section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Portfolio</h2>
            <p>Some project highlights including images, YouTube and video uploads</p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="portfolio-filters-container" data-aos="fade-up" data-aos-delay="200">
              <ul className="portfolio-filters isotope-filters">
                <li data-filter="*" className="filter-active" onClick={(e) => handleFilterClick(e, "*")}>All Work</li>
                <li data-filter=".filter-powerbi" onClick={(e) => handleFilterClick(e, ".filter-powerbi")}>Power BI</li>
                <li data-filter=".filter-excel" onClick={(e) => handleFilterClick(e, ".filter-excel")}>Excel Automation</li>
                <li data-filter=".filter-powerapp" onClick={(e) => handleFilterClick(e, ".filter-powerapp")}>PowerApp </li>
                <li data-filter=".filter-powerautomata" onClick={(e) => handleFilterClick(e, ".filter-powerautomata")}>Power Automate</li>
                
              </ul>
            </div>

            <div className="row g-4 isotope-container" data-aos="fade-up" data-aos-delay="300" ref={isotopeContainer}>
              {/* Image Item */}
              <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-powerautomata">
                <div className="portfolio-card">
                  <div className="portfolio-image">
                    <img src={portfolioimg1} className="img-fluid" alt="" loading="lazy" />
                    <div className="portfolio-overlay">
                      <div className="portfolio-actions">
                        <a href={portfolioimg1} className="glightbox preview-link" data-gallery="portfolio-gallery-web">
                          <i className="bi bi-eye"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="portfolio-content">
                    <span className="category"> Power Automata </span>
                    <h3>Modern Dashboard Interface</h3>
                  </div>
                </div>
              </div>

              {/* YouTube Video Item */}
              <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-powerautomata">
                <div className="portfolio-card">
                  <div className="portfolio-image">
                    <img src={portfolioimg2} className="img-fluid" alt="" loading="lazy" />
                    <div className="portfolio-overlay">
                      <div className="portfolio-actions">
                        <a
                          href="https://www.youtube.com/watch?v=QaXZJO1WlRA"
                          className="glightbox preview-link"
                          data-gallery="portfolio-gallery-web"
                          data-type="video"
                        >
                          <i className="bi bi-eye"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="portfolio-content">
                    <span className="category">Video Demo</span>
                    <h3>Power Automata</h3>
                  </div>
                </div>
              </div>

              {/* Uploaded Video (MP4) Item */}
              <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-excel">
                <div className="portfolio-card">
                  <div className="portfolio-image">
                    <img src={portfolioimg5} className="img-fluid" alt="" loading="lazy" />
                    <div className="portfolio-overlay">
                      <div className="portfolio-actions">
                        <a
                           href="https://www.youtube.com/watch?v=QaXZJO1WlRA"
                          className="glightbox preview-link"
                          data-gallery="portfolio-gallery-graphics"
                          data-type="video"
                        >
                          <i className="bi bi-eye"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="portfolio-content">
                    <span className="category">Uploaded Video</span>
                    <h3>Excel Dashboard Animation</h3>
                  </div>
                </div>
              </div>

              {/* Another Image */}
              <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-powerautomata">
                <div className="portfolio-card">
                  <div className="portfolio-image">
                    <img src={portfolioimg4} className="img-fluid" alt="" loading="lazy" />
                    <div className="portfolio-overlay">
                      <div className="portfolio-actions">
                        <a href={portfolioimg4} className="glightbox preview-link" data-gallery="portfolio-gallery-graphics">
                          <i className="bi bi-eye"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="portfolio-content">
                    <span className="category">Power Automata</span>
                    <h3>Creative Report Layout</h3>
                  </div>
                </div>
              </div>

              {/* Another Image */}
              <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-powerapp">
                <div className="portfolio-card">
                  <div className="portfolio-image">
                    <img src={portfolioimg7} className="img-fluid" alt="" loading="lazy" />
                    <div className="portfolio-overlay">
                      <div className="portfolio-actions">
                        <a href={portfolioimg7} className="glightbox preview-link" data-gallery="portfolio-gallery-graphics">
                          <i className="bi bi-eye"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="portfolio-content">
                    <span className="category">Power App</span>
                    <h3>Creative Report Layout</h3>
                  </div>
                </div>
              </div>


              {/* Another Image */}
              <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-powerbi">
                <div className="portfolio-card">
                  <div className="portfolio-image">
                    <img src={portfolioimg10} className="img-fluid" alt="" loading="lazy" />
                    <div className="portfolio-overlay">
                      <div className="portfolio-actions">
                        <a href={portfolioimg10} className="glightbox preview-link" data-gallery="portfolio-gallery-graphics">
                          <i className="bi bi-eye"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="portfolio-content">
                    <span className="category">Power Bi</span>
                    <h3>Creative Report Layout</h3>
                  </div>
                </div>
              </div>
            </div>
            {/* End isotope-container */}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Portfolio;
