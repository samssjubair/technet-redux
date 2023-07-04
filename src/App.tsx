
import { decrement, increment, incrementByAmount } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";


function App() {
  const {count}= useAppSelector((state)=> state.counter)
  const dispatch= useAppDispatch();
  return (
    <>
      <div className="flex justify-between w-1/2 mx-auto mt-20">
        <button
          onClick={() => dispatch(increment())}
          className="p-2 bg-blue-500"
        >
          Add
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="p-2 bg-blue-500"
        >
          Add 5
        </button>
        <span>{count}</span>
        <button
          onClick={() => dispatch(decrement())}
          className="p-2 bg-green-500"
        >
          Subtract
        </button>
      </div>
    </>
  );
}

export default App
