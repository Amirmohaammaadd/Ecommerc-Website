import { GrSecure } from "react-icons/gr";
import BannerImg from "../../assets/women/women2.jpg";
import { IoFastFood } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 bg-gray-100 dark:bg-gray-950 dark:text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* image section  */}
          <div>
            <img
              src={BannerImg}
              alt="None"
              className="max-w-[400px] h-[350px] w-full mx-auto 
              drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>
          {/* tetx detail section  */}

          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 className="text-3xl sm:text-4xl font-bold">
              Winter Sale upto 50% off
            </h1>
            <p className="text-sm text-gray-500 tracking-wide leading-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
              soluta officia repellendus magni numquam sunt eius minima
              provident aliquid voluptate!
            </p>
            <div className="flex flex-col gap-4">
              {/* --------------- A ------------- */}
              <div className="flex items-center gap-4">
                <GrSecure
                  className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full 
                bg-violet-100 dark:bg-violet-400"
                />
                <p>Quality Products</p>
              </div>
              {/* --------------- B ------------- */}
              <div className="flex items-center gap-4">
                <IoFastFood
                  className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full 
                bg-green-100 dark:bg-green-400"
                />
                <p>Fast Delivery</p>
              </div>
              {/* --------------- C ------------- */}
              <div className="flex items-center gap-4">
                <GrSecure
                  className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full 
                bg-yellow-100 dark:bg-yellow-400"
                />
                <p>Safe Products</p>
              </div>
              {/* --------------- D ------------- */}
              <div className="flex items-center gap-4">
                <GrSecure
                  className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full 
                bg-orange-100 dark:bg-orange-400"
                />
                <p>Safe Products</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
