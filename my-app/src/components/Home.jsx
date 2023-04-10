
import HeroImage from "../assets/heroImage.jpg";


const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, nesciunt voluptas veniam ipsa odio deserunt praesentium sed illo culpa accusantium, libero velit necessitatibus, tempora dicta. Voluptatibus asperiores doloremque deserunt dolores!
          </p>

       
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto  md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
