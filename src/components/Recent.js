import {
  ViewGridAddIcon,
  CollectionIcon,
  VideoCameraIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/solid";

function Recent() {
  return (
    <div className="flex flex-col">
      <div className="flex w-full pt-6 pb-4">
        <h1 className="text-2xl text-gray-600 flex-grow">Recent</h1>
        <div className="flex">
          <CollectionIcon className="h-10 self-center w-auto bg-white mx-4 shadow-lg rounded-md p-2 cursor-pointer" />
          <ViewGridAddIcon className="h-8 w-auto self-center cursor-pointer" />
        </div>
      </div>

      <div className="flex bg-white p-3 rounded-lg shadow-sm hover:shadow-md mb-3">
        <div className="flex flex-grow mx-3">
          <VideoCameraIcon className="h-8 w-auto self-center cursor-pointer mr-4 text-primary" />
          <p className="self-center"> MicMonster Product Animated Video</p>
        </div>
        <DotsHorizontalIcon className="h-8 w-auto self-center cursor-pointer bg-gray-600 text-background rounded-lg p-1" />
      </div>

      <div className="flex bg-white p-3 rounded-lg shadow-sm hover:shadow-md mb-3">
        <div className="flex flex-grow mx-3">
          <VideoCameraIcon className="h-8 w-auto self-center cursor-pointer mr-4 text-primary" />
          <p className="self-center"> You could earn a second income</p>
        </div>
        <DotsHorizontalIcon className="h-8 w-auto self-center cursor-pointer bg-gray-600 text-background rounded-lg p-1" />
      </div>

      <div className="flex bg-white p-3 rounded-lg shadow-sm hover:shadow-md mb-3">
        <div className="flex flex-grow mx-3">
          <VideoCameraIcon className="h-8 w-auto self-center cursor-pointer mr-4 text-primary" />
          <p className="self-center">
            {" "}
            MicMonster Product Launch Animated Video
          </p>
        </div>
        <DotsHorizontalIcon className="h-8 w-auto self-center cursor-pointer bg-gray-600 text-background rounded-lg p-1" />
      </div>
    </div>
  );
}

export default Recent;
