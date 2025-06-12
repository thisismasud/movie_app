import { useContext, useState } from "react";
import { toast } from "react-toastify";
import Tag from "../../assets/tag.svg";
import { MovieContext } from "../../contexts/index";
import { getImageUrl } from "../../utils/getImageUtility";
import MovieModal from "../MovieModal";
import Rating from "./Rating";

export default function MovieCard({ movie }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { state, dispatch } = useContext(MovieContext);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedMovie(null);
  };

  const handleAddToCart = (event, movie) => {
    event.stopPropagation();

    //check if movie already exists in the cart
    const existingMovie = state.cartData.find((item) => item.id === movie.id);

    if (existingMovie) {
      toast.error("Movie already exist in cart!", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
      });
      return;
    }

    // logic to handle adding the movie to the cart
    dispatch({
      type: "ADD_TO_CART",
      payload: { ...movie },
    });
    toast.success("Movie added to cart!", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
    });
  };

  return (
    <>
      {/* modal */}
      {showModal && (
        <MovieModal
          movie={selectedMovie}
          onClose={handleModalClose}
          addToCart={handleAddToCart}
        />
      )}

      {/* card */}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <div onClick={() => handleMovieClick(movie)}>
          <img
            className="w-full object-cover"
            src={getImageUrl(movie.cover)}
            alt=""
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1 ">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating} />
            </div>
            <button
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm cursor-pointer"
              onClick={(e) => handleAddToCart(e, movie)}
            >
              <img src={Tag} alt="tag" />
              <span>${movie.price} | Add to Cart</span>
            </button>
          </figcaption>
        </div>
      </figure>
    </>
  );
}
