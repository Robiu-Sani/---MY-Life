import BlogCard from "./BlogCard";

export default function Blog() {
  const cards = [];
  for (let i = 0; i < 10; i++) {
    cards.push(<BlogCard key={i} />);
  }

  return (
    <div className="container mx-auto h-full">
      <div className="w-full p-2 h-full gap-3 grid grid-cols-1 md:grid-cols-3">
        <div className="w-full">
          <div className="p-3 my-2 flex justify-center items-center rounded-md blurBg">
            <p>Your Platform</p>
          </div>
          <div className="p-3 my-2 flex justify-between items-center rounded-md blurBg">
            <p>You intereasted</p>
            <p>32</p>
          </div>
          <div className="p-3 my-2 flex justify-between items-center rounded-md blurBg">
            <p>Your blog</p>
            <p>32</p>
          </div>
        </div>

        <div className="w-full max-h-screen pb-[60px] overflow-scroll col-span-1 md:col-span-2">
          {cards} {/*  //this  is remporary for styling */}
        </div>
      </div>
    </div>
  );
}
