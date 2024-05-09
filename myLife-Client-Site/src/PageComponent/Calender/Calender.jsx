import ShowingCalender from "./ShowingCalender";

export default function Calender() {
  return (
    <div className="container max-h-screen mb-[60px] overflow-scroll mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3">
      <div className="w-full rounded-md flex flex-row sm:flex-col gap-0 sm:gap-2 p-2 blurBg">
        <div className="w-full p-2 rounded-md blurBg">
          <p>Calender</p>
        </div>
        <div className="w-full p-2 rounded-md blurBg">
          <p>Calender</p>
        </div>
      </div>

      <div className="w-full col-span-1 sm:col-span-2 rounded-md blurBg p-3">
        <ShowingCalender />
      </div>
    </div>
  );
}
