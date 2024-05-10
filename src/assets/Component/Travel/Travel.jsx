import { useEffect, useState } from "react";

const Travel = () => {
  const [TravelInfo, setTravelInfo] = useState([]);

  useEffect(() => {
    fetch("/Travel.json")
      .then((res) => res.json())
      .then((data) => {
        setTravelInfo(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      {TravelInfo.map((info) => (
        <div>
          <h1>{info.class}</h1>
        </div>
      ))}
    </div>
  );
};

export default Travel;
