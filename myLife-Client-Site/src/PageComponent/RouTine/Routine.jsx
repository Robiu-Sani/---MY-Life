import ChangeRoutine from "./ChangeRoutine";
import MyRoutine from "./MyRoutine";

export default function Routine() {
  return (
    <div className="container mb-[70px] mx-auto rounded-md p-3 blurBg">
      <div className="flex gap-3 mb-3 justify-center items-center">
        <button className="btn w-[200px]"> Routine </button>
        <button className="btn w-[200px]"> Add or Change Routine </button>
      </div>
      <ChangeRoutine />
      <MyRoutine />
    </div>
  );
}
