import React , { useState,useEffect}from 'react';
import HeaderComponent from '../components/header';
import axios from 'axios';



const Dolist = () => {
    useEffect(() => {
           console.log("This is Contact Page");
       }, []);

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


    return (
        <div>
           <HeaderComponent></HeaderComponent>
           <section className="hero-wrap hero-wrap-2 js-fullheight"  style={{backgroundImage : `url(${require("../images/services-2.jpg")})`}}>
           </section>
            <form action="#" className="bg-light p-5 contact-form">
                      <div className="form-group">
                        <input   type="text" id='date' className="form-control" placeholder="Date"/>
                      </div>
                      <div className="form-group">
                        <input type="text"  id='task' className="form-control" placeholder="Task No"/>
                      </div>
                      <div className="form-group">
                        <input type="text"  id='sub' className="form-control" placeholder="Subject"/>
                      </div>
                      <div className="form-group">
                        <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5"/>
                      </div>
                    </form>
                   
        </div>
    );
};

export default Dolist;