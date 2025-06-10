import React , {useEffect} from 'react';
import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';


const Hotel = () => {
  useEffect(() => {
          console.log("This is Hotel Page");
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
          <li className="nav-item"><a href="/" className="nav-link">About</a></li>
          <li className="nav-item"><a href="/destination" className="nav-link">Destination</a></li>
          <li className="nav-item active"><a href="/hotel" className="nav-link">Hotel</a></li>
          <li className="nav-item"><a href="/contact" className="nav-link">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav> */}
<HeaderComponent></HeaderComponent>
  <section className="hero-wrap hero-wrap-2 js-fullheight" style={{backgroundImage : `url(${require("../images/bg_1.jpg")})`}}>
    <div className="overlay js-fullheight"></div>
    <div className="container">
      <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-center">
        <div className="col-md-9 pb-5 text-center">
          <p className="breadcrumbs"><span className="mr-2"><a href="/index">Home <i
                  className="fa fa-chevron-right"></i></a></span> <span>Hotel <i className="fa fa-chevron-right"></i></span></p>
          <h1 className="mb-0 bread">Hotel</h1>
        </div>
      </div>
    </div>
  </section>

  <section className="ftco-section ftco-no-pb">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="search-wrap-1">
            <form action="#" className="search-property-1">
              <div className="row no-gutters">
                <div className="col-lg d-flex">
                  <div className="form-group p-4 border-0">
                    <label htmlFor="#">Destination</label>
                    <div className="form-field">
                      <div className="icon"><span className="fa fa-search"></span></div>
                      <input type="text" className="form-control" placeholder="Search place"/>
                    </div>
                  </div>
                </div>
                <div className="col-lg d-flex">
                  <div className="form-group p-4">
                    <label htmlFor="#">Check-in date</label>
                    <div className="form-field">
                      <div className="icon"><span className="fa fa-calendar"></span></div>
                      <input type="text" className="form-control checkin_date" placeholder="Check In Date"/>
                    </div>
                  </div>
                </div>
                <div className="col-lg d-flex">
                  <div className="form-group p-4">
                    <label htmlFor="#">Check-out date</label>
                    <div className="form-field">
                      <div className="icon"><span className="fa fa-calendar"></span></div>
                      <input type="text" className="form-control checkout_date" placeholder="Check Out Date"/>
                    </div>
                  </div>
                </div>
                <div className="col-lg d-flex">
                  <div className="form-group p-4">
                    <label htmlFor="#">Price Limit</label>
                    <div className="form-field">
                      <div className="select-wrap">
                        <div className="icon"><span className="fa fa-chevron-down"></span></div>
                        <select name="" id="" className="form-control">
                          <option value="">$5,000</option>
                          <option value="">$10,000</option>
                          <option value="">$50,000</option>
                          <option value="">$100,000</option>
                          <option value="">$200,000</option>
                          <option value="">$300,000</option>
                          <option value="">$400,000</option>
                          <option value="">$500,000</option>
                          <option value="">$600,000</option>
                          <option value="">$700,000</option>
                          <option value="">$800,000</option>
                          <option value="">$900,000</option>
                          <option value="">$1,000,000</option>
                          <option value="">$2,000,000</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg d-flex">
                  <div className="form-group d-flex w-100 border-0">
                    <div className="form-field w-100 align-items-center d-flex">
                      <input type="submit" value="Search" className="align-self-stretch form-control btn btn-primary"/>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>


<section className="ftco-section">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="project-wrap hotel">
            <a href="#" className="img" style={{backgroundImage : `url(${require("../images/hotel-resto-1.jpg")})`}}>
              <span className="price">$200/person</span>
            </a>
            <div className="text p-4">
              <p className="star mb-2">
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
              </p>
              <span className="days">8 Days Tour</span>
              <h3><a href="#">Manila Hotel</a></h3>
              <p className="location"><span className="fa fa-map-marker"></span> Manila, Philippines</p>
              <ul>
                <li><span className="flaticon-shower"></span>2</li>
                <li><span className="flaticon-king-size"></span>3</li>
                <li><span className="flaticon-mountains"></span>Near Mountain</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="project-wrap hotel">
            <a href="#" className="img" style={{backgroundImage : `url(${require("../images/hotel-resto-2.jpg")})`}}>
              <span className="price">$200/person</span>
            </a>
            <div className="text p-4">
              <p className="star mb-2">
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
              </p>
              <span className="days">10 Days Tour</span>
              <h3><a href="#">Manila Hotel</a></h3>
              <p className="location"><span className="fa fa-map-marker"></span> Manila, Philippines</p>
              <ul>
                <li><span className="flaticon-shower"></span>2</li>
                <li><span className="flaticon-king-size"></span>3</li>
                <li><span className="flaticon-sun-umbrella"></span>Near Beach</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="project-wrap hotel">
            <a href="#" className="img" style={{backgroundImage : `url(${require("../images/hotel-resto-3.jpg")})`}}>
              <span className="price">$200/person</span>
            </a>
            <div className="text p-4">
              <p className="star mb-2">
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
              </p>
              <span className="days">7 Days Tour</span>
              <h3><a href="#">Manila Hotel</a></h3>
              <p className="location"><span className="fa fa-map-marker"></span> Manila, Philippines</p>
              <ul>
                <li><span className="flaticon-shower"></span>2</li>
                <li><span className="flaticon-king-size"></span>3</li>
                <li><span className="flaticon-sun-umbrella"></span>Near Beach</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="project-wrap hotel">
            <a href="#" className="img" style={{backgroundImage : `url(${require("../images/hotel-resto-4.jpg")})`}}>
              <span className="price">$200/person</span>
            </a>
            <div className="text p-4">
              <p className="star mb-2">
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
              </p>
              <span className="days">8 Days Tour</span>
              <h3><a href="#">Manila Hotel</a></h3>
              <p className="location"><span className="fa fa-map-marker"></span> Manila, Philippines</p>
              <ul>
                <li><span className="flaticon-shower"></span>2</li>
                <li><span className="flaticon-king-size"></span>3</li>
                <li><span className="flaticon-sun-umbrella"></span>Near Beach</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="project-wrap hotel">
            <a href="#" className="img" style={{backgroundImage : `url(${require("../images/hotel-resto-5.jpg")})`}}>
              <span className="price">$200/person</span>
            </a>
            <div className="text p-4">
              <p className="star mb-2">
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
              </p>
              <span className="days">10 Days Tour</span>
              <h3><a href="#">Manila Hotel</a></h3>
              <p className="location"><span className="fa fa-map-marker"></span> Manila, Philippines</p>
              <ul>
                <li><span className="flaticon-shower"></span>2</li>
                <li><span className="flaticon-king-size"></span>3</li>
                <li><span className="flaticon-sun-umbrella"></span>Near Beach</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="project-wrap hotel">
            <a href="#" className="img" style={{backgroundImage : `url(${require("../images/hotel-resto-6.jpg")})`}}>
              <span className="price">$200/person</span>
            </a>
            <div className="text p-4">
              <p className="star mb-2">
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
              </p>
              <span className="days">7 Days Tour</span>
              <h3><a href="#">Manila Hotel</a></h3>
              <p className="location"><span className="fa fa-map-marker"></span> Manila, Philippines</p>
              <ul>
                <li><span className="flaticon-shower"></span>2</li>
                <li><span className="flaticon-king-size"></span>3</li>
                <li><span className="flaticon-sun-umbrella"></span>Near Beach</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="project-wrap hotel">
            <a href="#" className="img" style={{backgroundImage : `url(${require("../images/hotel-resto-7.jpg")})`}}>
              <span className="price">$200/person</span>
            </a>
            <div className="text p-4">
              <p className="star mb-2">
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
              </p>
              <span className="days">7 Days Tour</span>
              <h3><a href="#">Manila Hotel</a></h3>
              <p className="location"><span className="fa fa-map-marker"></span> Manila, Philippines</p>
              <ul>
                <li><span className="flaticon-shower"></span>2</li>
                <li><span className="flaticon-king-size"></span>3</li>
                <li><span className="flaticon-sun-umbrella"></span>Near Beach</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="project-wrap hotel">
            <a href="#" className="img" style={{backgroundImage : `url(${require("../images/hotel-resto-8.jpg")})`}}>
              <span className="price">$200/person</span>
            </a>
            <div className="text p-4">
              <p className="star mb-2">
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
              </p>
              <span className="days">7 Days Tour</span>
              <h3><a href="#">Manila Hotel</a></h3>
              <p className="location"><span className="fa fa-map-marker"></span> Manila, Philippines</p>
              <ul/>
                <li><span className="flaticon-shower"></span>2</li>
               <ul>
                <li><span className="flaticon-shower"></span>2</li>
                <li><span className="flaticon-king-size"></span>3</li>
                <li><span className="flaticon-sun-umbrella"></span>Near Beach</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="project-wrap hotel">
            <a href="#" className="img" style={{backgroundImage : `url(${require("../images/hotel-resto-9.jpg")})`}}>
              <span className="price">$200/night</span>
            </a>
            <div className="text p-4">
              <p className="star mb-2">
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
              </p>
              <span className="days">3 Days Tour</span>
              <h3><a href="#">Manila Hotel</a></h3>
              <p className="location"><span className="fa fa-map-marker"></span> Manila, Philippines</p>
              <ul>
                <li><span className="flaticon-shower"></span>2</li>
                <li><span className="flaticon-king-size"></span>3</li>
                <li><span className="flaticon-sun-umbrella"></span>Near Beach</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col text-center">
          <div className="block-27">
            <ul>
              <li><a href="#">&lt;</a></li>
              <li className="active"><span>1</span></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#">5</a></li>
              <li><a href="#">&gt;</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <FooterComponent></FooterComponent>
        </div>
    );
};

export default Hotel;