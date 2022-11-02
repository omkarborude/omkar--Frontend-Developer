export const Modal = ({ showModal, item, handleClose }) => {

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div class="lg:flex">
            <div
              class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              style={{ backgroundImage: `url(${item?.flickr_images[0]})` }}
              title="Woman holding a mug"
            ></div>
            <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div class="mb-8">
                <p class="text-sm text-gray-600 flex items-center">
                  <svg
                    class="fill-current text-gray-500 w-3 h-3 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                  </svg>
                  Members only
                </p>
                <div class="text-gray-900 font-bold text-xl mb-2">
                  {item?.rocket_name}
                </div>
                <p class="text-gray-700 text-base">{item?.description}</p>
              </div>
              <div class="flex items-center">
                <img
                  class="w-10 h-10 rounded-full mr-4"
                  src={item.flickr_images[1]}
                  alt="Avatar of Jonathan Reinink"
                />
                <div class="text-sm">
                  <p class="text-gray-900 leading-none">{item?.country}</p>
                  <p class="text-gray-600">{item?.first_flight}</p>
                </div>
              </div>
              <div className="flex mt-4 md:justify-end">
                <button
                  type="button"
                  onClick={handleClose}
                  class="bg-gray-500 mr-2 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded md:mr-4"
                >
                  Close
                </button>
                <button class="bg-brightRed  text-white font-bold py-2 px-4 rounded">
                  More Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};
