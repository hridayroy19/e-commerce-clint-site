import { useLoaderData } from "react-router-dom";

const CardDitels = () => {
  const productDisplay = useLoaderData();

  return (
    <>
      <div className="p-2 md:p-4 ">
        <div className="w-full bg-slate-200 max-w-4xl border m-auto justify-center items-center md:text-center md:flex bg-white">
          <div className="max-w-sm  overflow-hidden w-full p-5">
            <img
              src={productDisplay.photo}
              className="hover:scale-105 w-[70%] transition-all h-full"
            />
          </div>
          <div className="flex flex-col ml-5 gap-1">
            <h3 className="font-semibold text-slate-600  capitalize text-2xl md:text-4xl">
              {productDisplay.name}
            </h3>

            
              <div className="flex text-xs items-center gap-3">
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <div>
                  <p>610 Ratings8 Answered Questions</p>
                </div>
              </div>
            
            <p className=" text-slate-500  font-medium text-2xl">
              {productDisplay.category}
            </p>
            <p className=" font-bold md:text-2xl">
              <span className="text-red-500 my-2 ">$</span>
              <span>{productDisplay.price}</span>
            </p>

            <div>
              <p className="text-slate-600 font-medium">
                Description :{productDisplay.discription}{" "}
              </p>
              <p>{productDisplay.description}</p>
            </div>
            <div className="flex md:justify-center  mb-3 mt-4 gap-4">
              <button className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 min-w-[100px]">
                Buy
              </button>
              <button className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 min-w-[100px]">
                Add Cart
              </button>
            </div>
          </div>
        </div>

        {/* <AllProduct heading={"Related Product"}/> */}
      </div>
    </>
  );
};

export default CardDitels;
