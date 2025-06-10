import React ,{useEffect } from 'react';
import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';

const About = () => {

  useEffect(() => {
        console.log("This is About Page");
    }, []);

    return (
        <div>
           {/* <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
    <div className="container">
      <a className="navbar-brand" href="/index">Travelix<span>Travel Agency</span></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
        aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="oi oi-menu"></span> Menu
      </button>

      <div className="collapse navbar-collapse" id="ftco-nav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item"><a href="/index" className="nav-link">Home</a></li>
          <li className="nav-item active"><a href="/" className="nav-link">About</a></li>
          <li className="nav-item"><a href="/destination" className="nav-link">Destination</a></li>
          <li className="nav-item"><a href="/hotel" className="nav-link">Hotel</a></li>
          <li className="nav-item"><a href="/contact" className="nav-link">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav> */}
  <HeaderComponent></HeaderComponent>

  <section className="hero-wrap hero-wrap-2 js-fullheight"  style={{backgroundImage : `url(${require("../images/services-2.jpg")})`}}>
    <div className="overlay js-fullheight"></div>
    <div className="container">
      <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-center">
        <div className="col-md-9 pb-5 text-center">
          <p className="breadcrumbs"><span className="mr-2"><a href="/index">Home <i
                  className="fa fa-chevron-right"></i></a></span> <span>About us <i className="fa fa-chevron-right"></i></span>
          </p>
          <h1 className="mb-0 bread">About Us</h1>
        </div>
      </div>
    </div>
  </section>

  <section className="ftco-section services-section">
    <div className="container">
      <div className="row d-flex">
        <div className="col-md-6 order-md-last heading-section pl-md-5 d-flex align-items-center">
          <div className="w-100">
            <span className="subheading">Welcome to Travelix</span>
            <h2 className="mb-4">It's time to start your adventure</h2>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a
              paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
              blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
              ocean.
              A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            <p><a href="/destination" className="btn btn-primary py-3 px-4">Search Destination</a></p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
              <div className="services services-1 color-1 d-block img"
style={{backgroundImage : `url(${require("../images/services-1.jpg")})`}}>
                <div className="icon d-flex align-items-center justify-content-center"><span
                    className="flaticon-paragliding"></span></div>
                <div className="media-body">
                  <h3 className="heading mb-3">Activities</h3>
                  <p>A small river named Duden flows by their place and supplies it with the necessary</p>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
              <div className="services services-1 color-2 d-block img"
style={{backgroundImage : `url(${require("../images/services-2.jpg")})`}}>
                <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-route"></span>
                </div>
                <div className="media-body">
                  <h3 className="heading mb-3">Travel Arrangements</h3>
                  <p>A small river named Duden flows by their place and supplies it with the necessary</p>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
              <div className="services services-1 color-3 d-block img"
style={{backgroundImage : `url(${require("../images/services-3.jpg")})`}}>
                <div className="icon d-flex align-items-center justify-content-center"><span
                    className="flaticon-tour-guide"></span></div>
                <div className="media-body">
                  <h3 className="heading mb-3">Private Guide</h3>
                  <p>A small river named Duden flows by their place and supplies it with the necessary</p>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
              <div className="services services-1 color-4 d-block img"
style={{backgroundImage : `url(${require("../images/services-4.jpg")})`}}>
                <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-map"></span>
                </div>
                <div className="media-body">
                  <h3 className="heading mb-3">Location Manager</h3>
                  <p>A small river named Duden flows by their place and supplies it with the necessary</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="ftco-section ftco-about img" style={{backgroundImage : `url(${require("../images/bg_4.jpg")})`}}>
    <div className="overlay"></div>
    <div className="container py-md-5">
      <div className="row py-md-5">

      </div>
    </div>
  </section>

  <section className="ftco-section ftco-about ftco-no-pt img">
    <div className="container">
      <div className="row d-flex">
        <div className="col-md-12 about-intro">
          <div className="row">
            <div className="col-md-6 d-flex align-items-stretch">
              <div className="img d-flex w-100 align-items-center justify-content-center"
style={{backgroundImage : `url(${require("../images/about-1.jpg")})`}}>              </div>
            </div>
            <div className="col-md-6 pl-md-5 py-5">
              <div className="row justify-content-start pb-3">
                <div className="col-md-12 heading-section">
                  <span className="subheading">About Us</span>
                  <h2 className="mb-4">Make Your Tour Memorable and Safe With Us</h2>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                    the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large
                    language ocean.</p>
                  <p><a href="/destination" className="btn btn-primary">Book Your Destination</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

 {/*  <footer className="ftco-footer bg-bottom ftco-no-pt" style={{backgroundImage: `url(${require("../images/bg_3.jpg")})`}}>
    <div className="container">
      <div className="row mb-5">
        <div className="col-md pt-5">
          <div className="ftco-footer-widget pt-md-5 mb-4">
            <h2 className="ftco-heading-2">About</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
              blind texts.</p>
            <ul className="ftco-footer-social list-unstyled float-md-left float-lft">
              <li className="ftco-animate"><a href="#"><span className="fa fa-twitter"></span></a></li>
              <li className="ftco-animate"><a href="#"><span className="fa fa-facebook"></span></a></li>
              <li className="ftco-animate"><a href="#"><span className="fa fa-instagram"></span></a></li>
            </ul>
          </div>
        </div>
        <div className="col-md pt-5 border-left">
          <div className="ftco-footer-widget pt-md-5 mb-4 ml-md-5">
            <h2 className="ftco-heading-2">Infromation</h2>
            <ul className="list-unstyled">
              <li><a href="#" className="py-2 d-block">Online Enquiry</a></li>
              <li><a href="#" className="py-2 d-block">General Enquiries</a></li>
              <li><a href="#" className="py-2 d-block">Booking Conditions</a></li>
              <li><a href="#" className="py-2 d-block">Privacy and Policy</a></li>
              <li><a href="#" className="py-2 d-block">Refund Policy</a></li>
              <li><a href="#" className="py-2 d-block">Call Us</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md pt-5 border-left">
          <div className="ftco-footer-widget pt-md-5 mb-4">
            <h2 className="ftco-heading-2">Experience</h2>
            <ul className="list-unstyled">
              <li><a href="#" className="py-2 d-block">Adventure</a></li>
              <li><a href="#" className="py-2 d-block">Hotel and Restaurant</a></li>
              <li><a href="#" className="py-2 d-block">Beach</a></li>
              <li><a href="#" className="py-2 d-block">Nature</a></li>
              <li><a href="#" className="py-2 d-block">Camping</a></li>
              <li><a href="#" className="py-2 d-block">Party</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md pt-5 border-left">
          <div className="ftco-footer-widget pt-md-5 mb-4">
            <h2 className="ftco-heading-2">Have a Questions?</h2>
            <div className="block-23 mb-3">
              <ul>
                <li><span className="icon fa fa-map-marker"></span><span className="text">203 Fake St. Mountain View, San
                    Francisco, California, USA</span></li>
                <li><a href="#"><span className="icon fa fa-phone"></span><span className="text">+2 392 3929 210</span></a></li>
                <li><a href="#"><span className="icon fa fa-paper-plane"></span><span
                      className="text">info@yourdomain.com</span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer> */}
  <FooterComponent></FooterComponent>

  
        </div>
    );
};

export default About;