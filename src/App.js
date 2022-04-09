import { useState } from "react";
import ProgressCard from "./component/ProgressCard";

function App() {
  const [completed, setCompleted] = useState(1);
  const [total, setTotal] = useState(4);

  const randomize = () => {
    const newTotal = Math.floor(Math.random() * 100) + 1;
    const newCompleted = Math.floor(Math.random() * newTotal);
    setCompleted(newCompleted);
    setTotal(newTotal);
  };

  return (
    <div className="h-screen flex justify-center items-center bg-slate-900">
      <div className="flex flex-col gap-2 justify-center items-center w-[400px]">
        <ProgressCard tasks={{ completed, total }} />
        <button
          className="w-full uppercase border-0 px-3 py-2 outline-none 
          font-roboto font-medium text-white rounded-md 
          bg-blue-500 hover:bg-blue-600"
          onClick={randomize}
        >
          randomize
        </button>
      </div>
    </div>
  );
}

export default App;
