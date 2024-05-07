import profile from "../../images/profile.png";
export default function BlogCard() {
  return (
    <div className="w-full blurBg p-2 my-2 rounded-md">
      <div
        className="w-full h-[60px] p-3 flex justify-between items-center mb-3"
        style={{ borderBottom: "1px solid gray" }}
      >
        <div className="flex h-full gap-3 justify-center items-center">
          <div className="h-full rounded-full overflow-hidden">
            <img src={profile} alt="profile image" className="h-full" />
          </div>
          <div className="h-full flex flex-col justify-between">
            <p>user name</p>
            <small>23/34/23</small>
          </div>
        </div>
        <button className="bg-blue-500 border p-1 text-white px-4 rounded-md cursor-pointer">
          interesting
        </button>
      </div>
      <div className="w-full p-2">
        <p>title</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore,
          voluptatibus! Quas, error. Tempora suscipit voluptates beatae cum
          nulla vero repellendus totam inventore id tenetur ducimus eius nobis
          neque facere autem velit maxime amet, impedit molestias illo quibusdam
          earum. Iusto doloremque, rerum voluptatum facilis qui soluta ratione a
          asperiores nulla consequuntur.
        </p>
      </div>
      <div className="w-full mt-3">this is commmmin section</div>
    </div>
  );
}
