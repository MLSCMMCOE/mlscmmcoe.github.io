import NavBar from "../components/navbar";
import TeamSection from "../components/teamcards";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/bundle'
import "../styles/home.css";
import TestimonialCard from "../components/testimonialcard";
import testimonials from "./testimonial_data";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      {/* <NavBar /> */}
      <section id="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="header-font-800">Microsoft Learn Student Club MMCOE</h1>
            <p className="body-font-500">Be A Force For Good.</p>
          </div>
          <div className="hero-img">
            <img src="assets/logos/logo_main.png" alt="" id="hero-img" />
          </div>
        </div>
        <div className="icons">
          <img src="assets/logos/teams.png" alt="" id="icon" />
          <img src="assets/logos/office.png" alt="" id="icon" />
          <img src="assets/logos/excel.png" alt="" id="icon" />
          <img src="assets/logos/devops.png" alt="" id="icon" />
          <img src="assets/logos/github.png" alt="" id="icon" />
          <img src="assets/logos/azure.png" alt="" id="icon" />
          <img src="assets/logos/linkedin.png" alt="" id="icon" />
        </div>
      </section>
      <section id="about">
        <div className="about-container">
          <div className="about-content">
            <h2 className="header-font-700">Who are we?</h2>
            <p className="body-font-regular">
              In June 2023, the Microsoft Learn Students' Club was established
              in order to promote technological growth by using different
              Microsoft technologies. Through a friendly, supportive and
              motivated environment, this technical club has been set up to
              enhance and improve coding skills, critical thinking, logic and
              management skills of students. With a vision to empower
              individuals with the latest advancements and tools, MLSC is
              dedicated to strengthening a community of tech enthusiasts and
              innovators.
              <br />
              <br />
              <br />
              The mission of MLSC is to foster development in technological
              domains through various effective channels including, hands-on
              approach projects, international collaborations, seminars and
              competitions with the use of various Microsoft technologies and
              solutions. We inspire students through creativity and emerging
              technologies. MLSC will prepare students for the rapidly changing
              tech industry through a modern and innovative manner. By working
              towards these goals, MLSC hopes to make a real difference in the
              lives of its members and in the world around them.
            </p>
          </div>
          <div className="about-img">
            <img src="assets/logos/about-img.svg" alt="" id="about-img" />
          </div>
        </div>
      </section>
      <TeamSection />

      <section id="events-section">
        <div className="events-nav">
          <button className="events-nav-btn active">Upcoming</button>
          <button className="events-nav-btn">Past</button>
        </div>
      </section>

      <section id="gallery-section">
        <h1 class="header-font-700">Gallery</h1>
        <div className="gallery-container">

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={true}
            spaceBetween={50}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <img src="assets/gallery_preview/1.jpg" class="d-block" alt="image" id="carousel-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/gallery_preview/2.jpg" class="d-block" alt="image" id="carousel-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/gallery_preview/3.jpg" class="d-block" alt="image" id="carousel-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/gallery_preview/4.jpg" class="d-block" alt="image" id="carousel-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/gallery_preview/5.jpg" class="d-block" alt="image" id="carousel-img" />
            </SwiperSlide>
          </Swiper>
        </div>

        <Link to={"/gallery"} class="btn bg-color-primary-blue color-white"
        >Visit Gallery</Link>
      </section >


      <section id="testimonials-section">
        <div class="heading">
          <h1 class="header-font-700">Testimonials</h1>
          <p class="body-font-500">Hear From Our Community</p>
        </div>
        <div class="testimonial-container">
          {
            testimonials.map((testimonial) => {
              return (
                <TestimonialCard
                  name={testimonial.name}
                  designation={testimonial.designation}
                  testimonial={testimonial.testimonial}
                  avatar={testimonial.avatar}
                />
              )
            })
          }
        </div>
      </section>

    </>
  );
}
