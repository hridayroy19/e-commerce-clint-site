const NewProduct = () => {
  const handelAddtasl = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const photo = form.photo.value;
    const catagory = form.catagory.value;
    const discription = form.discription.value;
    const newproduct = {
      name,
      price,
      photo,
      catagory,
      discription,
    };
    console.log(newproduct);
  };

  return (
    <div className="p-2">
      <form
        onSubmit={handelAddtasl}
        className="mx-auto lg:w-[800px]  shadow flex flex-col p-3 "
      >
        <div className="text-center opacity-80 bg-slate-600 p-10 mb-14 mt-11 ">
          <h2 className="text-2xl font-bold"> Crate a New Products </h2>

          {/* fomre name  row */}
          <div className="md:flex justify-between">
            <div className="form-control w-1/2 ">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Product name"
                  name="name"
                  className="input input-bordered bg-white text-black w-full "
                />
              </label>
            </div>

            <div className="form-control w-1/2 ml-4 ">
              <label className="label">
                <span className="label-text"> Price </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="price"
                  name="price"
                  className="input input-bordered bg-white text-black w-full "
                />
              </label>
            </div>
          </div>
          {/* fomre supplier */}
          <div className="md:flex justify-between">
            <div className="form-control w-1/2 ">
              <label className="label">
                <span className="label-text"> Photo Url </span>
              </label>
              <label className="input-group">
                <input
                  type="url"
                  placeholder="photo Url"
                  name="photo"
                  className="input input-bordered bg-white text-black w-full "
                />
              </label>
            </div>

            <div className="form-control w-1/2 ml-4 ">
              <label className="label">
                <span className="label-text text-white">Catagory</span>
              </label>
              <select
                name="catagory"
                className="select select-bordered select-warning w-full"
              >
                <option disabled selected>
                  Select a Products ?
                </option>
                <option value="other">select category</option>
                <option value="fruits">Fruits</option>
                <option value="vegetable">Vegetable</option>
                <option value="icream">Icream</option>
                <option value="dosa">Dosa</option>
                <option value="pizza">Pizza</option>
                <option value="rice">rice</option>
                <option value="cake">Cake</option>
                <option value="burger">Burger</option>
                <option value="panner">Panner</option>
                <option value="sandwich">Sandwich</option>
              </select>
            </div>
          </div>
          <div className=" mt-3 flex">
            <textarea
              placeholder="discription"
              name="discription"
              className="textarea textarea-bordered textarea-lg w-full max-w-xs"
            ></textarea>
          </div>
          <div className="mt-4 ">
            <button className="btn btn-block btn-outline text-white ">
              Submite
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewProduct;
