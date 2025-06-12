import RemoveSvg from "../assets/delete.svg";
import CheckoutSvg from "../assets/icons/checkout.svg";
import { getImageUrl } from "../utils/getImageUtility";

export default function CartDetails({ onClose, cartData, dispatch }) {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[790px] p-4 max-h-[90vh] overflow-auto">
        <div className="bg-white shadow-md dark:bg-[#12141D] rounded-2xl overflow-hidden p-5 md:p-9">
          <h2 className="text-2xl lg:text-[30px] mb-10 font-bold">
            Your Carts
          </h2>
          <div className="space-y-8 lg:space-y-12 max-h-[450px] overflow-auto mb-10 lg:mb-14">
            {cartData.length > 0 ? (
              <>
                {cartData.map((item) => (
                  <div
                    className="grid grid-cols-[1fr_auto] gap-4"
                    key={item.id}
                  >
                    <div className="flex items-center gap-4">
                      <img
                        className="rounded overflow-hidden h-[80px]"
                        src={getImageUrl(item.cover)}
                        alt=""
                      />
                      <div>
                        <h3 className="text-base md:text-xl font-bold">
                          {item.title}
                        </h3>
                        <p className="max-md:text-xs text-[#575A6E]">
                          {item.genre}
                        </p>
                        <span className="max-md:text-xs">${item.price}</span>
                      </div>
                    </div>
                    <div className="flex justify-between gap-4 items-center">
                      <button
                        className="bg-[#D42967] rounded-md p-2 md:px-4 inline-flex items-center space-x-2 text-white cursor-pointer"
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: item,
                          })
                        }
                      >
                        <img className="w-5 h-5" src={RemoveSvg} alt="" />
                        <span className="max-md:hidden">Remove</span>
                      </button>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div className="flex items-center justify-center h-full text-xl">
                <p className="text-center">No items in your cart!</p>
              </div>
            )}
          </div>
          <div className="flex items-center justify-end gap-2">
            <a
              className="rounded-md p-2 md:px-4 inline-flex items-center space-x-2 bg-primary text-[#171923] text-sm"
              href="#"
            >
              <img src={CheckoutSvg} width="24" height="24" alt="" />
              <span>Checkout</span>
            </a>
            <a
              className="border border-[#74766F] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#6F6F6F] dark:text-gray-200 font-semibold text-sm"
              href="#"
              onClick={onClose}
            >
              Cancel
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
