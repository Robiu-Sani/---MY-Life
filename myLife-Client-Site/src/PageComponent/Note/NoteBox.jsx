import NoteCard from "./NoteCard";

export default function NoteBox() {
  const cards = [];
  for (let i = 0; i < 30; i++) {
    cards.push(<NoteCard key={i} />);
  }

  return (
    <div className="w-full blurBg md:col-span-2 col-span-1 grid gap-3 grid-cols-1 sm:grid-cols-3 rounded-md p-3">
      {cards}
    </div>
  );
}
