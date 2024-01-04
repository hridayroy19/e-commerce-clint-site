import { CiForkAndKnife } from "react-icons/ci";

const Yourproducts = ({catagory,onClick}) => {
  return (
    <>
      <div onClick={onClick} className=" p-3 flex justify-center text-xl items-center bg-yellow-300 rounded-full">
        <CiForkAndKnife />
        <p className=" text-lg font-bold uppercase items-center text-center "> {catagory} </p>
      </div>


    </>
  );
};

export default Yourproducts;
