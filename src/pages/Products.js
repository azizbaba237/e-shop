import React, { useContext, useEffect, useState } from "react";
// import link
import { Link } from "react-router-dom";
// import cart context
import { CartContext } from "../contexts/CartContext";
// import skeleton
import Skeleton from "react-loading-skeleton";

export const Products = () => {
  // add to cart
  const { addToCart } = useContext(CartContext);
  // state
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  // get product from api
  useEffect(() => {
    const getProducts = async () => {
      let componentMounted = true;
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.clone().json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  // loading
  const Loading = () => {
    return (
      <>
        <div className="columns-4">
          <Skeleton />
        </div>
      </>
    );
  };

  // fliter product
  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  // ShowProducts
  const ShowProducts = () => {
    return (
      <div className="flex flex-col justify-center items-center">
        <div className=" mx-auto flex justify-center gap-4 my-12 ">
          {/* categories button */}
          <button
            onClick={() => setFilter(data)}
            className=" p-2 border-2 rounded-lg bg-gray-200 text-primary font-medium text-xl hover:bg-gray-800 hover:text-white "
          >
            All
          </button>
          <button
            onClick={() => filterProduct("men's clothing")}
            className=" p-2 border-2 rounded-lg bg-gray-200 text-primary font-medium text-xl hover:bg-gray-800 hover:text-white "
          >
            Men's Clothing
          </button>
          <button
            onClick={() => filterProduct("women's clothing")}
            className=" p-2 border-2 rounded-lg bg-gray-200 text-primary font-medium text-xl hover:bg-gray-800 hover:text-white "
          >
            Women's Clothing
          </button>
          <button
            onClick={() => filterProduct("jewelery")}
            className=" p-2 border-2 rounded-lg bg-gray-200 text-primary font-medium text-xl hover:bg-gray-800 hover:text-white "
          >
            Jewelery
          </button>
          <button
            onClick={() => filterProduct("electronics")}
            className=" p-2 border-2 rounded-lg bg-gray-200 text-primary font-medium text-xl hover:bg-gray-800 hover:text-white "
          >
            Electronic
          </button>
        </div>
        {/* product filter */}
        <div className="mb-32 p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
          {filter.map((product) => {
            return (
              <div className=" mx-auto  ">
                <div
                  key={product.id}
                  className=" relative flex flex-col border p-8 border-[#e4e4e4] h-[350px]  mb-4  overflow-hidden group transition"
                >
                  <div className="w-[200px] mx-auto flex justify-center items-center ">
                    <img
                      className="max-h-[160px] group-hover:scale-110 transition duration-300"
                      src={product.image}
                      alt={product.title}
                    />
                  </div>
                  {/* category & title & price */}
                  <div className="pt-4 absolute bottom-12 mb-4 text-center">
                    <div className="text-sm capitalize text-gray-500">
                      {product.category}
                    </div>
                    <Link to={`/product/${product.id}`}>
                      <h2 className="font-semibold mb-1">
                        {product.title.substring(0, 20)}...
                      </h2>
                    </Link>
                    <div className="font-semibold "> $ {product.price}</div>
                  </div>
                  <div className="absolute bottom-2 left-20   mx-auto">
                    <button
                      onClick={() => addToCart(product, product.id)}
                      className=" bg-pink-200 hover:bg-gray-500 hover:text-white  text-primary font-medium rounded-lg py-2 px-2 "
                    >
                      Buy now{" "}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <section className="pt-32">
      <div className=" sm:mx-[150px] mx-auto md:mx-[240px] ">
        <div className="border-b-slate border-b-2 flex justify-center items-center md:text-center sm:text-center  ">
          <h1 className="text-6xl font-medium pb-6 mx-auto ">
            Latest Products
          </h1>
        </div>
      </div>
      <div className="">
        {/* product list here  */}
        <div className="grid grid-rows justify-items-center ">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </section>
  );
};

export default Products;
