import image1 from "../../assets/hero/women.png";
import image2 from "../../assets/hero/shopping.png";
import image3 from "../../assets/hero/sale.png";
import Slider from "react-slick";

const Hero = () => {
  const ImageList = [
    {
      id: 1,
      img: image1,
      title: "Upto 50% off on all Men's Wear",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias dolores molestiae placeat tempora minus veritatis, earum sint assumenda asperiores omnis deleniti mollitia dignissimos sapiente ullam quidem aperiam culpa fugit. Sequi.",
    },
    {
      id: 2,
      img: image2,
      title: "Upto 50% off on all Men's Wear",

      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias dolores molestiae placeat tempora minus veritatis, earum sint assumenda asperiores omnis deleniti mollitia dignissimos sapiente ullam quidem aperiam culpa fugit. Sequi.",
    },
    {
      id: 3,
      img: image3,
      title: "Upto 50% off on all Men's Wear",

      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias dolores molestiae placeat tempora minus veritatis, earum sint assumenda asperiores omnis deleniti mollitia dignissimos sapiente ullam quidem aperiam culpa fugit. Sequi.",
    },
  ];

  let settings = {
    arrows: false,
    infinite: true,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: false,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 5000,
  };
  
  return (
    <div
      className="relative overflow-hidden min-h-[550px] sm:min-h-[650px]
   bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
    >
      {/* ------ background pattern ----- */}
      <div
        className="h-[700px] w-[700px] bg-primary/40 absolute
       -top-1/2 right-0 rounded-3xl rotate-45 "
      ></div>
      {/* ------ hero section ----- */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* ----- text content section ----- */}
                <div
                  className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left
             order-2 sm:order-1 relative z-10"
                >
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold z-10">
                    {data.title}
                  </h1>
                  <p className="text-sm">{data.description}</p>

                  <div>
                    <button
                      className="bg-gradient-to-r from-primary to-secondary hover:scale-105
                duration-200 text-white py-2 px-4 rounded-full"
                    >
                      Order Now
                    </button>
                  </div>
                </div>

                {/* ---------- img section -------- */}
                <div className="order-1 sm:order-2">
                  <div className="relative z-10">
                    <img
                      src={data.img}
                      alt="None"
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] 
                  sm:scale-105 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
