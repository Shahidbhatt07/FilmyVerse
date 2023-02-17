import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import ReactStars from "react-stars";
import { getDocs } from "firebase/firestore";
import { moviesRef } from "./firebase/firebase";

const Cards = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const _data = await getDocs(moviesRef);
      // console.log(_data);
      _data.forEach((doc) => {
        setData((prv) => [...prv, {...(doc.data()), id: doc.id}])
      })
      setLoading(false);
    }
    getData();
  }, []);

  return (
    <div className="flex flex-wrap justify-between p-3 mt-2">
      {loading ? <div className="w-full flex justify-center items-center h-96 "> <ThreeDots height={40} color="white"/></div> : 
      data.map((e, i) => {
        return (
          <div className="card font-medium shadow-lg p-2 mt-4 cursor-pointer hover:-translate-y-1 transition-all duration-500 ">
            <img className="h-60 md:72" src={e.image} alt="Avengers Endgame" />
            <h1>
              <span className="text-gray-500">Name:</span>
              {e.title}
            </h1>
            <h1 className="flex items-center ">
              <span className="text-gray-500 mr-1">Rating:</span>
              <ReactStars size={20} half={true} value={5} edit={false} />
            </h1>
            <h1>
              <span className="text-gray-500">Year:</span> {e.year}
            </h1>
          </div>
        );
      })}
      
    </div>
  );
};

export default Cards;
