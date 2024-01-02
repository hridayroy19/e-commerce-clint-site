import { useEffect, useState } from "react";
import VagitableCard from "./VagitableCard";

const FrishVigitable = () => {
  const [vegetableTasks, setVegetableTasks] = useState([]);
  // const [allTask, setAlltask] = useState([]);
  // console.log(allTask);
  // const vegetableProducts = allTask.filter((task) => task.catagory === 'vegetable');
  // setVegetableTasks(vegetableProducts);
  console.log(vegetableTasks);

  useEffect(() => {
    const url = `http://localhost:5000/products`;
    fetch(url)
      .then((res) => res.json())
      .then((task) => {
        // setAlltask(task);
        const vegetableProducts = task.filter(
          (task) => task.catagory === "vegetable"
        );
        setVegetableTasks(vegetableProducts);
      });
  }, []);

  return (
    <div>
      <h2 className="font-bold text-2xl text-slate-800 mb-4">
        Fresh Vegetables
      </h2>

      <div className=" flex gap-8 overflow-scroll  ">
        {vegetableTasks.map((task) => (
          <div key={task._id} className=" w-full min-w-[200px] max-w-[200px] bg-white hover:shadow-lg drop-shadow-lg py-5 px-4 cursor-pointer flex flex-col" >
            <div className="h-28 flex flex-col justify-center items-center">
              <img src={task.photo} className="h-full" />
            </div>
            <h3 className="font-semibold text-slate-600  capitalize text-lg mt-4 whitespace-nowrap overflow-hidden">
              {task.name}
            </h3>
            <p className=" text-slate-500  font-medium">{task.category}</p>
            <p className=" font-bold">
              <span className="text-red-500">₹</span>
              <span>{task.price}</span>
            </p>

            <button className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 w-full">
              Add Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrishVigitable;
{
  /* <VagitableCard key={task._id} props={task} ></VagitableCard> */
}
