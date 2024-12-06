import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export function Carrossel() {
  const images = [
    "/image/quadra_voleidepraia.png",
    "/image/quadra_futebol.png",
    "/image/quadra_tenis.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="mt-8 flex flex-col-reverse lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-8 px-4">
      {/* Carrossel */}
      <div className="relative w-full lg:w-2/3">
        <div className="overflow-hidden rounded-3xl w-full h-60 sm:h-72 md:h-80">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="h-full w-full object-cover"
          />
        </div>

        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 bg-gray-700 bg-opacity-50 hover:bg-opacity-70 rounded-full"
          onClick={prevSlide}
        >
          <CaretLeft
            size={24}
            className="text-gray-300 hover:text-orange-400"
          />
        </button>

        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 bg-gray-700 bg-opacity-50 hover:bg-opacity-70 rounded-full"
          onClick={nextSlide}
        >
          <CaretRight
            size={24}
            className="text-gray-300 hover:text-orange-400"
          />
        </button>

        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex
                  ? "bg-orange-400"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="w-full lg:w-1/3 bg-white dark:bg-gray-900 p-4 sm:p-6 rounded-3xl text-center lg:text-left">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-orange-100 mb-3">
          Praticidade, segurança e estrutura para praticar seus esportes?{" "}
          <span className="text-teal-500">
            Você encontra tudo isso na <span className="font-extrabold">TocLoc</span>.
          </span>{" "}
          ;)
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed dark:text-orange-100">
          <Link
            to="/cadastro"
            className="text-orange-700 hover:text-orange-600"
          >
            Cadastre-se
          </Link>{" "}
          e conheça uma nova experiência na locação de quadras.
        </p>
      </div>
    </div>
  );
}
