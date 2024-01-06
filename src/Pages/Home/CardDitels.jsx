import { useLoaderData } from "react-router-dom";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoShareSocialSharp } from "react-icons/io5";
import FrishVigitable from "./FrishVigitable";

const CardDitels = () => {
  const productDisplay = useLoaderData();

  return (
    <>
      <div className="p-2 md:p-4 ">
        <div className="w-full  max-w-4xl border m-auto    md:flex bg-white">
          <div className="max-w-sm  overflow-hidden w-full p-5">
            <img
              src={productDisplay.photo}
              className="hover:scale-105 w-[70%] transition-all h-full"
            />
          </div>
          <div className="flex flex-col ml-5 gap-1">
            <h3 className="font-semibold text-slate-600 my-2 text-xl capitalize  md:text-4xl">
              {productDisplay.name}
            </h3>

            
              <div className="flex text-xs items-center mt-2 gap-3">
                <div className="rating text-xl ">
                  <input
                    type="radio"
                    name="rating-3"
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
                  <p className="text-[12px] mt-1 items-center">610 Ratings8 Answered Questions</p>
                
                </div>
                
              </div>
             <div className="flex items-center gap-6  ">
             <h1 className="mb-2">
                  <span className=" font-bold text-red-500">Brand:</span> No BrandMore Audio from No Brand
                  </h1>
                  <a className="text-2xl text-red-500" href=""> <IoIosHeartEmpty /> </a> <span className="text-2xl text-red-500"><IoShareSocialSharp />
</span>
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
                <span className="font-bold ">Description :</span>{productDisplay.discription}
              </p>
              <p>{productDisplay.description}</p>
            </div>
            <div className="flex  mb-3 mt-4 gap-4">
              <button className="bg-blue-400 py-1 mt-2 rounded hover:bg-green-400 min-w-[100px]">
                Buy
              </button>
              <button className="bg-yellow-500 py-1 mt-2 rounded hover:bg-red-500 min-w-[100px]">
                Add Cart
              </button>
            </div>
          </div>
        </div>

        {/* <AllProduct heading={"Related Product"}/> */}
      </div>
      <FrishVigitable/>
    </>
  );
};

export default CardDitels;
