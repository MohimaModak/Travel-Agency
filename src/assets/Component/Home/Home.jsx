import { useState } from "react";
import video from "../../Gallery/update.mp4";
import "./Home.css";
import Travel from "../Travel/Travel";

const Home = () => {
  const [formVisibility, setFormVisibility] = useState(false);

  const toggleForm = () => {
    setFormVisibility(!formVisibility);
  };
  return (
    <div className="">
    <div className="">
      <div className="relative">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="video object-cover h-screen"
        >
          <source src={video} className="video" />
        </video>
      </div>
      <div className="absolute justify-center bannerFont  flex items-center inset-0 text-center ">
        <div className="background text-white p-5 rounded-3xl shadow-2xl">
          {formVisibility ? (
            <div className="text-center md:text-4xl font-bold "></div>
          ) : (
            <div>
              <h1 className="text-4xl mb-3 bannerFont">Round Trip</h1>
              <div>
                <select className="ml-2 mb-2 background text-center rounded-full p-2">
                  <option disabled selected value="">
                    From
                  </option>
                  <option className="" value="All">
                    Dhaka
                  </option>
                  <option className="" value="Japan">
                    Sylhet
                  </option>
                  <option className="" value="France">
                    Chittagong
                  </option>
                  <option className="" value="Mexico">
                    Brahmonbaria
                  </option>
                  <option className="" value="Thailand">
                    Nowakhali
                  </option>
                  <option className="" value="India">
                    Khulna
                  </option>
                  <option className="" value="India">
                    Rajshahi
                  </option>
                </select>

                <select className="ml-2 mb-2 background text-center rounded-full p-2">
                  <option disabled selected value="">
                    To
                  </option>
                  <option value="All">Dhaka</option>
                  <option value="Japan">Sylhet</option>
                  <option value="France">Chittagong</option>
                  <option value="Mexico">Brahmonbaria</option>
                  <option value="Thailand">Nowakhali</option>
                  <option value="India">Khulna</option>
                  <option value="India">Rajshahi</option>
                </select>
              </div>
              <div className="mt-3">
                <input
                  className="ml-2 mb-2 background text-center rounded-full p-2 w-40"
                  type="number"
                />
                <input
                  type="date"
                  className="ml-2 mb-2 background text-center rounded-full p-2"
                />
              </div>
            <div  className="mt-3">
            <input type="checkbox" className="ml-3" />
              <label className="ml-1">Extra Options</label>
              <input type="checkbox" className="ml-3" />
              <label className="ml-1">Environment</label>
              <input type="checkbox" className="ml-3" />
              <label className="ml-1">Dummy</label>
              <input type="checkbox" className="ml-3" />
              <label className="ml-1">PDT</label>
              <button className="background px-3 py-1  rounded-full ml-3">Search</button>
            </div>
            </div>
          )}
          {formVisibility ? (
            <div></div>
          ) : (
            <div>
              <button
                onClick={toggleForm}
                className="opacity background border px-2 py-1 mt-3 rounded-md"
              >
                Another Trip
              </button>
            </div>
          )}

          {formVisibility && (
            <div>
              <h1 className="text-4xl mb-3 bannerFont">Multi City</h1>
              <div>
                <select className="ml-2 mb-2 background text-center rounded-full p-2">
                  <option disabled selected value="">
                    From
                  </option>
                  <option value="All">Dhaka</option>
                  <option value="Japan">Sylhet</option>
                  <option value="France">Chittagong</option>
                  <option value="Mexico">Brahmonbaria</option>
                  <option value="Thailand">Nowakhali</option>
                  <option value="India">Khulna</option>
                  <option value="India">Rajshahi</option>
                </select>

                <select className="ml-2 mb-2 background text-center rounded-full p-2">
                  <option disabled selected value="">
                    To
                  </option>
                  <option value="All">Dhaka</option>
                  <option value="Japan">Sylhet</option>
                  <option value="France">Chittagong</option>
                  <option value="Mexico">Brahmonbaria</option>
                  <option value="Thailand">Nowakhali</option>
                  <option value="India">Khulna</option>
                  <option value="India">Rajshahi</option>
                </select>
              </div>
              <div className="mt-3">
              <input
                  className="ml-2 mb-2 background text-center rounded-full p-2 w-40"
                  type="number"
                />
                <input
                  type="date"
                  className="ml-2 mb-2 background text-center rounded-full p-2"
                />
              </div>
              <div  className="mt-3 mb-2">
            <input type="checkbox" className="ml-3" />
              <label className="ml-1">Extra Options</label>
              <input type="checkbox" className="ml-3" />
              <label className="ml-1">Environment</label>
              <input type="checkbox" className="ml-3" />
              <label className="ml-1">Dummy</label>
              <input type="checkbox" className="ml-3" />
              <label className="ml-1">PDT</label>
              <button className="background px-3 py-1  rounded-full ml-3">Search</button>
            </div>
              <div>
                <button
                  onClick={toggleForm}
                  className="opacity background border px-2 py-1 mt-5 rounded-md"
                >
                  Another Trip
                </button>
              </div>
              
            </div>
          )}
        </div>
      </div>
      </div>
      <Travel></Travel>
    </div>
  );
};

export default Home;
