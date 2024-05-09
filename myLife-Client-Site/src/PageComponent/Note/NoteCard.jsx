import { MdNoteAlt } from "react-icons/md";

export default function NoteCard() {
  return (
    <div className="w-full blurBg rounded-md p-2 flex gap-3 justify-center items-center">
      <MdNoteAlt className="text-2xl mx-3" />
      <div className="w-full">
        <h3>this is title</h3>
        <p>this is descriptions </p>
      </div>
    </div>
  );
}
