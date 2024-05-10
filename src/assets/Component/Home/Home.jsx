import video from "../../Gallery/update.mp4";
import "./Home.css";
const Home = () => {
  return (
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
      <div className="absolute flex justify-center items-center inset-0 bannerFont text-3xl ">
        <h1>Dhaka Popular Travel Ltd </h1>
      </div>
    </div>
  );
};

export default Home;
