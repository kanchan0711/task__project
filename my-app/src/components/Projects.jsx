
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { foodItem } from "./Data";

function Projects() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <div
    name="Projects"
    className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
  >
    {/* <div className="Projects"> */}
      <div className='main bg-gray-100 min-h-screen'>
        <div className="heading bg-white py-8 px-4 md:py-12 md:px-8">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">Skills</h1>
        
        </div>
        <Slider {...settings} className="px-4 md:px-8 pt-8">
          {foodItem.map((item) => (
            <div className="card bg-white rounded-lg overflow-hidden shadow-md">
              <div className="card-top">
                <img src={item.cover} className="img w-full h-64 object-cover" alt={item.title} />
              </div>
              <div className='card-bottom py-4 px-6'>
                <p className="text-xl font-medium text-gray-900">{item.title}, {item.price}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div> 
    </div>
  );
}

export default Projects;
