import { FaNotesMedical } from "react-icons/fa6";

export default function NoteLeft() {
  return (
    <div className="w-full blurBg rounded-md p-3">
      <div className="w-full blurBg rounded-md p-2 mb-2 flex gap-3 justify-center items-center cursor-pointer">
        <FaNotesMedical />
        <p className="font-bold">Add Note</p>
      </div>
      <div className="w-full">
        <h3 className="mb-3">Category Type</h3>
        <div className="w-full blurBg rounded-md p-2 mb-2">
          <p className="font-bold">Note for study.</p>
        </div>
        <div className="w-full blurBg rounded-md p-2 mb-2">
          <p className="font-bold">Note for work.</p>
        </div>
        <div className="w-full blurBg rounded-md p-2 mb-2">
          <p className="font-bold">Importent issue.</p>
        </div>
        <div className="w-full blurBg rounded-md p-2">
          <p className="font-bold">Others topic.</p>
        </div>
      </div>
    </div>
  );
}
