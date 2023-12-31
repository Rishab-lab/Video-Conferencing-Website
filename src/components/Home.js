import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import conf from "../assets/conf.jpg";
import Navbar from "./Nav";

const Home = () => {
  const [roomCode, setRoomCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setErrorMessage("");
  }, [roomCode]);

  const submitCode = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
     
      await new Promise((resolve) => setTimeout(resolve, 2000));

      navigate(`/room/${roomCode}`);
    } catch (error) {
      setErrorMessage("Invalid meeting room code");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className=" ">
      <Navbar />
      <div className="relative h-screen ">
        <div className="absolute h-full w-full flex overflow-hidden">
          <img src={conf} className="object-cover w-full h-full" alt="Conference" />
        </div>
        <div className="absolute h-full w-full flex overflow-hidden bg-black/60"></div>
        <div className="lg:flex lg:pt-20 flex-col items-center justify-center relative z-10 px-6 md:max-w-[90vw] mx-auto">
          <div className="flex flex-col items-center justify-center pb-8">
            <h1 className="text-[50px] md:text-[80px] text-white font-bold pt-12">
              Video Chat App
            </h1>
            <p className="text-[26px] text-white -mt-2"></p>
          </div>
          <form
            onSubmit={submitCode}
            className="text-white md:pt-12 flex flex-col items-center justify-center"
          >
            <div className="flex flex-col justify-center items-center">
              <label className="text-[30px] md:text-[40px] font-bold pt-6">
                Enter Meeting Id
              </label>
              <input
                type="text"
                required
                placeholder="Enter Meeting Id"
                value={roomCode}
                onChange={(e) => setRoomCode(e.target.value)}
                className="py-1.5 md:py-2 px-4 -full max-w-[14rem] mt-2 text-black md:mt-6 outline-0"
              />
            </div>
            {errorMessage && (
              <p className="text-red-500 mt-2">{errorMessage}</p>
            )}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-400 duration-100 ease-out font-bold w-[5rem] md:w-[7rem] py-[5px] md:py-[7px] mt-2 md:mt-4"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Start"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
