import { useEffect, useState } from "react";
import "aos/dist/aos.css"; 
import AOS from "aos";
import "./Travel.css";
const Travel = () => {
  const [TravelInfo, setTravelInfo] = useState([]);

  useEffect(() => {
    AOS.init();
    fetch("/Travel.json")
      .then((res) => res.json())
      .then((data) => {
        setTravelInfo(data.flightOffer);
        console.log(data);
      });
  }, []);

  return (
    <div className="vacationFont ">
      <div className="font p-2 sm:p-8 md:p-16">
        <h1 data-aos="zoom-in" className="text-2xl sm:text-3xl md:text-4xl text-center  pb-10 vacationHeading">
          About <span className="text-blue-400">Destinations</span>{" "}
        </h1>
        <img
          src="https://icons8.com/icon/qkWln6qR0wgr/around-the-globe"
          alt=""
          srcset=""
        />
        <div
          className="flex justify-center items-center text-center vacationFont  rounded-lg overflow-x-auto overflow-y-auto"
          style={{ overflowX: "auto" }}
        >
          <table className="table-auto">
            <thead className="">
              <tr className="px-16 py-4 rounded-md shadow-sm border">
                <th data-aos="zoom-in" className="px-16 text-xl py-4 rounded-md shadow-md border text-blue-400 vacationHeading">
                  Class
                </th>
              
                <th data-aos="zoom-in" className="px-5 md:px-16 py-4 text-xl rounded-md shadow-md border text-blue-400 vacationHeading">
                  Fare Basis
                </th>
                <th data-aos="zoom-in" className="px-5 md:px-16 py-4 text-xl rounded-md shadow-md border text-blue-400 vacationHeading">
                  Itinerary
                </th>
                <th data-aos="zoom-in" className="px-5 md:px-16 py-4 text-xl rounded-md shadow-md border text-blue-400 vacationHeading">
                  Seat
                </th>
                <th data-aos="zoom-in" className="px-5 md:px-16 py-4 text-xl rounded-md shadow-md border text-blue-400 vacationHeading">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {TravelInfo.map((offer, index) => (
                <tr data-aos="zoom-in" key={index} >
                  <td data-aos="zoom-in" className=" px-5 md:px-16 py-4 rounded-lg  shadow-md  border font-semibold">
                    {offer.class}
                  </td>
                 
                  <td data-aos="zoom-in" className=" px-5 md:px-16 py-4 rounded-lg shadow-md  border font-semibold">
                    {offer.fareBasis}
                  </td>
                  <td data-aos="zoom-in" className=" px-5 md:px-16 py-4 rounded-lg shadow-md  border font-semibold">
                    <ul>
                      {offer.itineraries.map((itinerary, i) => (
                        <li key={i}>
                          Duration: {itinerary.duration}
                          {/* Render segment details if needed */}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td data-aos="zoom-in" className="px-16py-4 rounded-lg shadow-md  border font-semibold">
                    {offer.seat}
                  </td>
                  <td data-aos="zoom-in" className=" px-5 md:px-16 py-4 rounded-lg shadow-md  border font-semibold">
                    {offer.price}
                    <br />
                    <button className="bg-blue-400 text-white my-2 px-5 py-1.5 rounded-full">SELECT</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  );
};

export default Travel;
