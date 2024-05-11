import { useEffect, useState } from "react";

import "./Travel.css";
const Travel = () => {
  const [TravelInfo, setTravelInfo] = useState([]);

  useEffect(() => {
    fetch("/Travel.json")
      .then((res) => res.json())
      .then((data) => {
        setTravelInfo(data.flightOffer);
        console.log(data);
      });
  }, []);

  return (
    <div className="text-blue-800">
      <div className="font p-8 md:p-16 ">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center about pb-10 gradient-text">
          About <span className="text-orange-300">Destinations</span>{" "}
        </h1>
        <img
          src="https://icons8.com/icon/qkWln6qR0wgr/around-the-globe"
          alt=""
          srcset=""
        />
        <div
          className="flex justify-center items-center text-center  rounded-lg"
          style={{ overflowX: "auto" }}
        >
          <table className="table-auto">
            <thead className="">
              <tr className="px-16 py-4 rounded-md shadow-sm border font-semibold">
                <th className="px-16 text-2xl py-4 rounded-md shadow-sm border font-semibold">
                  Class
                </th>
                <th className="px-16py-4 text-2xl rounded-md shadow-sm border font-semibold">
                  Price
                </th>
                <th className="px-16py-4 text-2xl rounded-md shadow-sm border font-semibold">
                  Fare Basis
                </th>
                <th className="px-16py-4 text-2xl rounded-md shadow-sm border font-semibold">
                  Itinerary
                </th>
                <th className="px-16 py-4 text-2xl rounded-md shadow-sm border font-semibold">
                  Seat
                </th>
              </tr>
            </thead>
            <tbody>
              {TravelInfo.map((offer, index) => (
                <tr key={index}>
                  <td className=" px-16 py-4 rounded-md shadow-sm border font-semibold">
                    {offer.class}
                  </td>
                  <td className=" px-16 py-4 rounded-md shadow-sm border font-semibold">
                    {offer.price}
                  </td>
                  <td className=" px-16 py-4 rounded-md shadow-sm border font-semibold">
                    {offer.fareBasis}
                  </td>
                  <td className=" px-16 py-4 rounded-md shadow-sm border font-semibold">
                    <ul>
                      {offer.itineraries.map((itinerary, i) => (
                        <li key={i}>
                          Duration: {itinerary.duration}
                          {/* Render segment details if needed */}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="px-16py-4 rounded-md shadow-sm border font-semibold">
                    {offer.seat}
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
