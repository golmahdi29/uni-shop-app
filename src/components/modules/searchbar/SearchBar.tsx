import { IoSearch } from "react-icons/io5";

export default function SearchBar() {
  return (
    <div className="lg:bg-neutral-100 bg-white rounded-xl flex items-center md:w-full lg:w-3/5 h-12">
      <button className="bg-sky-600 hover:bg-sky-600/90 transition-colors p-2 rounded-xl cursor-pointer">
        <IoSearch className="text-white md:text-2xl text-xl" />
      </button>
      <input
        type="text"
        placeholder="دنبال چی می گردی؟"
        className="border-0 outline-0 p-0 mx-5 placeholder:text-sm placeholder:text-neutral-400 lg:block hidden  "
      />
    </div>
  );
}
