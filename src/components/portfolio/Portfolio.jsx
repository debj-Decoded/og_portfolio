import React from "react";
import "./portfolio.css";
// import IMG1 from "../../assets/img/tourBooking.png";
import IMG1 from "../../assets/img/tours.png";
import IMG2 from "../../assets/img/portfolio2.jpg";
// import IMG3 from "../../assets/img/portfolio3.jpg";
import IMG3 from "../../assets/img/calorieapp.png";
import IMG4 from "../../assets/img/portfolio4.jpg";
import IMG5 from "../../assets/img/angularPage.png";
// import IMG6 from "../../assets/img/portfolio6.jpg";
import IMG6 from "../../assets/img/ecommerce.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const data = [
  {
    id: 1,
    title: "A stunning tour booking website using React with modern UI/UX design.",
    image: IMG1,
    github: "http://github.com",
    demo: "https://tour-booking-sooty.vercel.app/",
  },
  {
    id: 2,
    title: "Charts templates and infographic in figma",
    image: IMG2,
    github: "http://github.com",
    demo: "http://github.com",
  },
  {
    id: 3,
    title: "AI Diet Planner Full Stack App with React Native & Expo",
    image: IMG3,
    github: "http://github.com",
    demo: "http://ai-cal-app-landing-page.vercel.app/",
  },
  {
    id: 4,
    title: "Maintaining tasks and tracking progress",
    image: IMG4,
    github: "http://github.com",
    demo: "http://github.com",
  },
  {
    id: 5,
    title: "Build Faster with Angular’s Modern Template System",
    image: IMG5,
    github: "http://github.com",
    demo: "https://angular-template-app.vercel.app"

  },
  {
    id: 6,
    title: "Orion UI kit & Finacial progress Dashboard",
    image: IMG6,
    github: "http://github.com",
    demo: "http://ecommerce-mern-new-7rh8.vercel.app/"}
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div
        className="container portfolio__container"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {data.map((item, index) => {
          return (
            <article className="portfolio__item" key={index}>
              <div className="portfolio__item-image">
                <LazyLoadImage
                  src={item.image}
                  alt={item.title}
                  effect="blur"
                />
              </div>
              <h3>{item.title}</h3>
              <div className="portfolio__item-cta">
                <a href={item.github} target="_blank" className="btn ">
                  Github
                </a>
                <a href={item.demo} target="_blank" className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
