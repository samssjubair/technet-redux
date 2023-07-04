import { useSelector } from "react-redux";
import { RootState } from "./redux/store";


function App() {
  const {count}= useSelector((state: RootState)=> state.counter)
  return (
    <>
      <div className="flex justify-between w-1/2 mx-auto mt-20">
        <button className="p-2 bg-blue-500">Add</button>
        <span>{count}</span>
        <button className="p-2 bg-green-500">Subtract</button>
      </div>
    </>
  );
}

export default App
