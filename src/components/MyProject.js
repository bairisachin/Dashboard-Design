import {
  DocumentAddIcon,
  DocumentDownloadIcon,
  PlayIcon,
} from "@heroicons/react/solid";

function MyProject() {
  return (
    <div className="">
      <h1 className="text-2xl text-gray-800 py-4 ">My Projects</h1>
      <div className="grid md:gird-col-2 lg:grid-cols-4 grid-flow-row-dense gap-x-16 mx-2 md:mx-5 text-gray-600 lg:grid-flow-col">
        {/* card1 */}
        <div className="flex flex-col mb-4 lg:mb-0 max-w-sm">
          <div className="flex bg-white p-2 rounded-lg shadow-md cursor-pointer mb-7">
            <DocumentAddIcon className="h-8 w-auto text-primary mx-1" />
            <p className="self-center mx-2">Create New Project</p>
          </div>

          <div className="bg-white p-5 pt-7 flex flex-col rounded-lg shadow-md">
            <p className="mb-4 font-medium text-gray-500">
              Total purchased characters
            </p>
            <span className="mb-5 text-primary">4000</span>
            <p className="mb-4 font-medium text-gray-500">
              Total used characters
            </p>
            {/* <p className="mb-4"></p> */}
            <div className="relative mb-5">
              <input
                type="target"
                min="60"
                max="100"
                className="bg-primary w-40 z-10 mb-3 absolute rounded-lg h-2 self-start"
              />

              <input
                type="target"
                min="60"
                max="100"
                className="bg-red-200 absolute mb-3 rounded-lg h-2 self-start"
              />
            </div>

            <span className="mb-8 text-primary ">2000 / 4000</span>

            <button className="flex p-2 mb-6 rounded-lg shadow-md bg-primary text-white cursor-pointer my-3">
              <DocumentDownloadIcon className="h-8 w-auto  mx-1" />
              <p className="self-center mx-2 font-semibold">Upgrade Plan</p>
            </button>
          </div>
        </div>

        {/* Card2 */}
        <div className="bg-white max-w-sm  p-7 shadow-md rounded-lg flex flex-col justify-between mb-4 lg:mb-0">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            velit architecto magnam facilis ab autem quam! Provident ab rerum
            amet aliquid suscipit ex ipsam qui a laborum quam?
            <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Molestias.
          </p>

          <div className="flex justify-between mt-4">
            <div className="">
              <h2 className="text-primary font-medium">Product Introduction</h2>
              <p className="">Raman saini</p>
            </div>
            <PlayIcon className="h-8 w-auto cursor-pointer" />
          </div>
        </div>

        {/* card3 */}
        <div class="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white mb-4 lg:mb-0">
          <img
            class="w-full"
            src="https://source.unsplash.com/400x400/?nature,mountains"
            alt="Sunset in the mountains"
          />

          <div className="flex justify-between m-4">
            <div className="">
              <h2 className="text-primary font-medium">Product Introduction</h2>
              <p className="">Raman saini</p>
            </div>
            <PlayIcon className="h-8 w-auto cursor-pointer self-center" />
          </div>
        </div>

        {/* card4 */}

        <div class="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white mb-4 lg:mb-0">
          <img
            class="w-full"
            src="https://source.unsplash.com/400x400/?nature,ocean"
            alt="Sunset in the mountains"
          />

          <div className="flex justify-between m-4">
            <div className="">
              <h2 className="text-primary font-medium">Product Introduction</h2>
              <p className="">Raman saini</p>
            </div>
            <PlayIcon className="h-8 w-auto cursor-pointer self-center" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProject;

/* <div className="bg-white shadow-md rounded-lg  flex flex-col justify-between mb-4">
          <img
            src="https://source.unsplash.com/300x300/?coding"
            className="object-fit rounded-md"
            alt=""
          />

          <div className="flex justify-between m-4">
            <div className="">
              <h2 className="text-primary font-medium">Product Introduction</h2>
              <p className="">Raman saini</p>
            </div>
            <PlayIcon className="h-8 w-auto cursor-pointer" />
          </div>
        </div> */
