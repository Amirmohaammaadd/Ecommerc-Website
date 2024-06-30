import Banner from "../../assets/website/orange-pattern.jpg";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundRepeat: "cover",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  return (
    <div
      className="mb-20 bg-gray-100 dark:bg-gray-800 text-white"
      style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            provident?
          </h1>
          <input
            type="text"
            className="w-full p-3 text-black shadow-lg border-gray-300 border focus:outline-none rounded-md"
            placeholder="Enter your email"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
