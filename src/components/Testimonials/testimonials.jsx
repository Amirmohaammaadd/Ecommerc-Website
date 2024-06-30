import Slider from "react-slick";
import Img1 from "../../assets/women/women2.jpg";

const Testimonials = () => {
  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 5000,
    slidesToScroll: 1,
    autoplay: true,
    // autoplaySpeed: 5000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slideToShow: 3,
          slideToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slideToShow: 2,
          slideToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slideToShow: 1,
          slideToScroll: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      id: 1,
      name: "amir",
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, dolor adipisicing elit. Nam",
      img: Img1,
    },
    {
      id: 2,
      name: "ali",
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, dolor adipisicing elit. Nam",
      img: Img1,
    },
    {
      id: 3,
      name: "rexa",
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, dolor adipisicing elit. Nam",
      img: Img1,
    },
    {
      id: 4,
      name: "awdawd",
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, dolor adipisicing elit. Nam",
      img: Img1,
    },
    {
      id: 5,
      name: "hfdth",
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, dolor adipisicing elit. Nam",
      img: Img1,
    },
  ];
  return (
    <div>
      {/* Header section */}

      <div className="text-center mb-10 max-w-[600px] mx-auto">
        <p className="text-sm text-primary mb-2 font-medium">
          Top Selling Products for you
        </p>
        <h1 className="text-3xl mb-2 font-bold">Products</h1>
        <p className="text-xs text-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, dolor!
          adipisicing elit. Nam,
        </p>
      </div>
      {/* --------- cards ------ */}

      <Slider {...settings} className="flex justify-center  items-center w-full">
        {testimonials.map((data) => (
          <div className="flex justify-center">
            <div
              key={data.id}
              className="flex justify-center gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl w-3/6 sm:!w-1/6 bg-gray-300"
            >
              <div className="w-[100px]">
                <img
                  src={data.img}
                  alt="None"
                  className="rounded-full w-20 h-20"
                />
              </div>

              <div className="w-1/2 flex flex-col items-start gap-4 ">
                <p className="text-xs text-gray-500">{data.text}</p>
                <h1 className="text-xl font-bold text-black/80 dark:text-white">
                  {data.name}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
