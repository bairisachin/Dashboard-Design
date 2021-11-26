import {
  MicrophoneIcon,
  HomeIcon,
  UserIcon,
  PlayIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/solid";

function SideBar() {
  return (
    <div className="p-2 h-screen md:w-72  bg-white">
      <div className="flex m-2 justify-evenly align-middle">
        <MicrophoneIcon className="h-10 w-auto self-center text-yellow-600" />
        {/* <img src="" className="w-5 h-5" alt="" /> */}
        <div className="align-left hidden sm:block">
          <h1 className="font-bold text-3xl">Micmonster</h1>
          <small className=" text-gray-500 text-xs">
            THE FUTURE OF VOICEOVER
          </small>
        </div>
      </div>

      <div className="mt-9">
        <div className="btn text-primary  hover:text-red-700">
          <HomeIcon className="h-8 w-auto mx-auto sm:mx-3" />
          <p className="text-center self-center hidden sm:inline-flex">
            Dashboard
          </p>
        </div>
        <div className="btn text-gray-600 hover:text-gray-800">
          <UserIcon className="h-8 w-auto mx-auto sm:mx-3" />
          <p className="text-center self-center hidden sm:inline-flex">
            {" "}
            Profile
          </p>
        </div>
        <div className="btn text-gray-600 hover:text-gray-800">
          <PlayIcon className="h-8 w-auto mx-auto sm:mx-3" />
          <p className="text-center self-center hidden sm:inline-flex">
            Tutorials
          </p>
        </div>
        <div className="btn text-gray-600 hover:text-gray-800">
          <QuestionMarkCircleIcon className="h-8 w-auto mx-auto sm:mx-3" />
          <p className="text-center self-center hidden sm:inline-flex">FAQ</p>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
