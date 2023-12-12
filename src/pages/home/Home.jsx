import "./Home.css";

export const Home = () => {
  return (
    <div className="video-container">
      <div className="text-container">
        <h1>Movie DB in React</h1>
        <p>Login and check movie's info</p>
      </div>
      <video
        className="background-video"
        src="/video.mp4"
        type="video/mp4"
        autoPlay
        loop
        muted
        width="100%"
        height="100%"
      />
    </div>
  );
};
