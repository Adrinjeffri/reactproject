import React , { useEffect ,useState }from 'react';
import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';

import axios from 'axios';

const Contact = () => {
  useEffect(() => {
        console.log("This is Contact Page");
    }, []);
    //get method
    const [users, setUsers] = useState([]);
    const [profile, setProfile] = useState([]);

const [isLoading, updateIsLoading]=useState(false);
const loadDetails = () => {
    const url = "http://localhost:4000/api/details";
    updateIsLoading(true);
    axios.get(url)
      .then((response) => {
        setProfile(response.data);
        alert("success");
        updateIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        alert("failure");
        updateIsLoading(false);
      });
  };


  var dataList = profile.map((value, index) => {
    return (
      <tr key={index}>
        <td>{value.name}</td>
        <td>{value.age}</td>
        <td>{value.location}</td>
      </tr>
    );
  });
  //post method
  const [msg, updated] = useState({});
    const handleSubmit = (e) => {
  e.preventDefault(); // prevent page reload
  console.log("clicked a button");

  axios.post("http://localhost:4000/api/details", msg)
    .then((response) => {
      alert("Message sent successfully!");
      console.log(response.data);
      setProfile([...profile, response.data]); // optional: update state
    })
    .catch((error) => {
      console.error(error);
      alert("Failed to send message");
    });
};
//put method
const handleUpdate = (id, updatedData) => {
  axios.put(`http://localhost:4000/api/details/${id}`, updatedData)
    .then((response) => {
      alert("Updated successfully!");
      const updatedProfile = profile.map((item) =>
        item._id === id ? response.data : item
      );
      setProfile(updatedProfile);
    })
    .catch((error) => {
      console.error(error);
      alert("Update failed");
    });
};
//delete method
const handleDelete = (id) => {
  axios.delete(`http://localhost:4000/api/details/${id}`)
    .then(() => {
      alert("Deleted successfully!");
      const newProfile = profile.filter((item) => item._id !== id);
      setProfile(newProfile);
    })
    .catch((error) => {
      console.error(error);
      alert("Delete failed");
    });
};




  
    return (
      <div>
            <HeaderComponent></HeaderComponent>

            <section className="hero-wrap hero-wrap-2 js-fullheight" style={{backgroundImage : `url(${require("../images/bg_2.jpg")})`}}>
              <div className="overlay js-fullheight"></div>
              <div className="container">
                <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-center">
                  <div className="col-md-9  pb-5 text-center">
                    <p className="breadcrumbs"><span className="mr-2"><a href="/index">Home <i
                            className="fa fa-chevron-right"></i></a></span> <span>Contact us <i
                          className="fa fa-chevron-right"></i></span></p>
                    <h1 className="mb-0 bread">Contact us</h1>
                  </div>
                </div>
              </div>
            </section>

            <section className="ftco-section ftco-no-pb contact-section mb-4">
              <div className="container">
                <div className="row d-flex contact-info">
                  <div className="col-md-3 d-flex">
                    <div className="align-self-stretch box p-4 text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-map-marker"></span>
                      </div>
                      <h3 className="mb-2">Address</h3>
                      <p>198 West 21th Street, Suite 721 New York NY 10016</p>
                    </div>
                  </div>
                  <div className="col-md-3 d-flex">
                    <div className="align-self-stretch box p-4 text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-phone"></span>
                      </div>
                      <h3 className="mb-2">Contact Number</h3>
                      <p><a href="tel://1234567920">+ 1235 2355 98</a></p>
                    </div>
                  </div>
                  <div className="col-md-3 d-flex">
                    <div className="align-self-stretch box p-4 text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-paper-plane"></span>
                      </div>
                      <h3 className="mb-2">Email Address</h3>
                      <p><a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                    </div>
                  </div>
                  <div className="col-md-3 d-flex">
                    <div className="align-self-stretch box p-4 text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-globe"></span>
                      </div>
                      <h3 className="mb-2">Website</h3>
                      <p><a href="#">yoursite.com</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="ftco-section contact-section ftco-no-pt">
              <div className="container">
                <div className="row block-9">
                  <div className="col-md-12 order-md-last d-flex">
                    <form action="#" className="bg-light p-5 contact-form">
                      <div className="form-group">
                        <input  onChange={updateIsLoading} type="text" id='name' className="form-control" placeholder="Your Name"/>
                      </div>
                      <div className="form-group">
                        <input type="text" onChange={updateIsLoading} id='mail' className="form-control" placeholder="Your Email"/>
                      </div>
                      <div className="form-group">
                        <input type="text" onChange={updateIsLoading} id='sub' className="form-control" placeholder="Subject"/>
                      </div>
                      <div className="form-group">
                        <textarea name="" onChange={updateIsLoading} id="msg" cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
                      </div>
                      <div className="form-group">
                        <input type="submit" onClick={()=>handleSubmit()} value="Send Message" className="btn btn-primary py-3 px-5"/>
                      </div>
                    </form>
                    <div style={{ marginTop: '20px' }}>
                      {users.map(user => (
                        <div key={user.id} style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px' }}>
                          <p><strong>Name:</strong> {user.first_name} {user.last_name}</p>
                          <img src={user.avatar} alt="avatar" style={{ width: '50px', borderRadius: '50%' }} />
                        </div>
                      ))}
                    </div>
                    {isLoading ?
                      <button disabled>Loading...</button>
                      :
                      <button onClick={loadDetails}>load data</button>
                    }
                    <div>
                      <table id="customers">
                        <thead>
                          <tr>
                            <th>name</th>
                            <th>age</th>
                            <th>location</th>
                          </tr>
                        </thead>
                        <tbody>{dataList}</tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="ftco-intro ftco-section ftco-no-pt">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-12 text-center">
                    <div className="img" style={{backgroundImage : `url(${require("../images/bg_2.jpg")})`}}>
                      <div className="overlay"></div>
                      <h2>We Are Travelix A Travel Agency</h2>
                      <p>We can manage your dream building A small river named Duden flows by their place</p>
                      <p className="mb-0"><a href="#" className="btn btn-primary px-4 py-3">Ask For A Quote</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <FooterComponent></FooterComponent>
      </div>
    );
};
export default Contact;