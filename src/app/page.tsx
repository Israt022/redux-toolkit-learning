'use client';
import { decrement, increment, incrementByValue, selectValue } from "@/redux/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
// import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  // const selector = useSelector((state: RootState) => state.counter.value);
  // const dispatch = useDispatch();
  const selector = useAppSelector(selectValue);
  const dispatch = useAppDispatch();
  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/40">
      <div className="flex flex-col items-center gap-8 rounded-2xl border bg-background p-10 shadow-sm">

        <h1 className="text-2xl font-semibold tracking-tight">
          Redux Counter
        </h1>

        <span className="text-7xl font-bold tabular-nums">
          {selector}
        </span>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => dispatch(decrement())}
            className="rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 hover:bg-red-700 active:scale-95 cursor-pointer"
          >
            Decrease
          </button>

          <button
            type="button"
            onClick={() => dispatch(incrementByValue(2))}
            className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 hover:bg-blue-700 active:scale-95 cursor-pointer"
          >
            Increase
          </button>
        </div>

      </div>
    </main>
  );
}