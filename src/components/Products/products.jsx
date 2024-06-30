import { FaStar } from "react-icons/fa";
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
const Products = () => {
  const productData = [
    {
      id: 1,
      img: Img1,
      title: "Women 1",
      rating: 5.0,
      color: "White",
      aosDelay: "0",
    },
    {
      id: 2,
      img: Img2,
      title: "Women 2",
      rating: 4.5,
      color: "red",
      aosDelay: "200",
    },
    {
      id: 3,
      img: Img3,
      title: "Women check",
      rating: 4.7,
      color: "brown",
      aosDelay: "400",
    },
    {
      id: 4,
      img: Img4,
      title: "Women style",
      rating: 4.4,
      color: "yellow",
      aosDelay: "600",
    },
    {
      id: 5,
      img: Img2,
      title: "Women T-shirt",
      rating: 4.5,
      color: "pink",
      aosDelay: "800",
    },
  ];
  return (
    <div className="bg-gray-100 dark:bg-gray-950 dark:text-white">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-sm text-primary mb-2 font-medium">Top Selling Products for you</p>
          <h1 className="text-3xl mb-2 font-bold">Products</h1>
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam,
            dolor! adipisicing elit. Nam,
          </p>
        </div>
        {/* Body section */}
        <div>
          <div
            className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 
            place-items-center gap-5"
          >
            {/* card section */}
            {productData.map((data) => (
              <div key={data.id} className="space-y-3 p-4 border px-10 bg-white rounded-md hover:bg-slate-50">
                <img
                  src={data.img}
                  alt="None"
                  className="h-[220px] w-[150px] object-cover rounded-md shadow-xl hover:-translate-y-8 duration-300"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
