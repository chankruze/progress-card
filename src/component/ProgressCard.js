/*
Author: chankruze (chankruze@gmail.com)
Created: Fri Apr 08 2022 18:43:35 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import ProgressRing from "./ProgressRing";

function ProgressCard({ tasks }) {
  const { total, completed } = tasks;
  const progress = Math.ceil((completed / total) * 100);

  return (
    <div className="flex bg-white p-2 rounded-md w-full h-[180px]">
      <div className="flex-1 flex flex-col justify-center items-center font-poppins">
        <p className="font-semibold text-2xl">Your plan</p>
        <p className="text-xl">for today</p>
        <p className="mt-2 text-gray-400">
          {completed} of {total} completed
        </p>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <ProgressRing progress={progress} />
        <p className="absolute m-auto text-4xl font-black text-blue-500 font-roboto">
          {progress}%
        </p>
      </div>
    </div>
  );
}

export default ProgressCard;
