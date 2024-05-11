import React, { useEffect } from "react";
import satisfection from "../../Gallery/Satsfaction.jpg";
import Traveller from "../../Gallery/Traveller.jpg";
import "./Vacation.css";
import "aos/dist/aos.css"; 
import AOS from "aos";
const Vacation = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="vacationFont ">
      <div className="flex justify-center items-center vacationFont ">
        <div className="md:flex justify-center items-center vacationFont p-5 md:p-16">
          <div className="md:w-2/3 md:pr-6">
            <h1 data-aos="fade-up"
     data-aos-duration="7000" className="vacationHeading text-2xl sm:text-3xl md:text-4xl">
              Satisfying Travel{" "}
              <span className="text-blue-400">Experiences</span>
            </h1>
            <p data-aos="fade-up"
     data-aos-duration="7000" className="text-base text-blue-400 py-7">
              At our travel agency, client satisfaction is our top priority. We
              pride ourselves on delivering personalized experiences that exceed
              expectations at every turn. From the moment you reach out to us,
              our dedicated team is committed to understanding your needs and
              crafting tailor-made itineraries that fulfill your desires. With
              attention to detail and a passion for creating unforgettable
              moments, we strive to ensure that every journey with us is
              seamless, memorable, and leaves you with a sense of wanderlust
              fulfilled.
            </p>
          </div>
          <div className="">
            <img data-aos="fade-up"
     data-aos-duration="7000" src={satisfection} />
          </div>
        </div>
      </div>

<div data-aos="fade-up"
     data-aos-duration="7000" className="flex justify-center items-center">


      <div className="md:flex justify-center items-center vacationFont p-5 md:p-16">
        <div>
          <img src={Traveller} className="rounded-md" data-aos="fade-up"/>
        </div>
        <div  className="md:w-2/3 md:pl-6">
          <h1 data-aos="zoom-in-up" className="vacationHeading  text-2xl sm:text-3xl md:text-4xl py-8">
          Your Dream Vacation 
            <span className="text-blue-400">Awaits!</span>
          </h1>
          <p  className="text-base font-semibold vacationFont text-blue-400">
          Pack your bags and leave the rest to us. From stunning sights to delightful adventures, get ready for a vacation that exceeds all expectations!Ready to relax and enjoy your vacation? Let's make unforgettable memories together!
          </p>
        </div>
      </div></div>
      
    </div>
  );
};

export default Vacation;
