// import { useContext } from "react";
// import { AuthContext } from "../../RootComponent/context/Context";

import NoteBox from "./NoteBox";
import NoteLeft from "./NoteLeft";

export default function Note() {
  // const { loader } = useContext(AuthContext);

  return (
    <div className="w-full p-2 max-h-screen pb-[60px] flex justify-center items-start">
      <div className="w-full grid gap-3 grid-cols-1 md:grid-cols-3 container mx-auto overflow-scroll  max-h-[calc(100vh - 100px)] pb-[60px]">
        <NoteLeft />
        <NoteBox />
      </div>
    </div>
  );
}
