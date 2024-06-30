import { FaStar } from "react-icons/fa";
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";

const TopProducts = () => {
  const ProductsData = [
    {
      id: 1,
      img: Img1,
      title: "Casual wear",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates cupiditate maxime iste quo autem sunt, porro qui molestiae. Soluta, ullam!",
    },
    {
      id: 2,
      img: Img2,
      title: "Printed wear",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates cupiditate maxime iste quo autem sunt, porro qui molestiae. Soluta, ullam!",
    },
    {
      id: 3,
      img: Img3,
      title: "woman wear",
      description:
        "Lorem ipsum dolor sit amet consectetur consecteturv consectetur consectetur adipisicing elit. Voluptates cupiditate maxime iste quo autem sunt, porro qui molestiae. Soluta, ullam!",
    },
  ];
  return (
    <div className="max-h-[500px] bg-gray-100 dark:bg-gray-950 dark:text-white">
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-24 pt-16">
          <p className="text-sm text-primary mb-2 font-medium">
            Top Rated Products for you
          </p>
          <h1 className="text-3xl mb-2 font-bold">Best Products</h1>
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam,
            dolor! adipisicing elit. Nam,
          </p>
        </div>
        {/* Body section */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 
            place-items-center"
        >
          {ProductsData.map((data) => (
            <div
              key={data.id}
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 
            dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* img section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt="None"
                  className="max-w-[140px] block mx-auto transform -translate-y-20 
                  group-hover:scale-110 duration-300 drop-shadow-sm "
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>

                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 
                  rounded-full mt-4 group-hover:bg-white group-hover:text-primary "
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
