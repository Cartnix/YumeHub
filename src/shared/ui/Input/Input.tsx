import { Search } from "lucide-react"; 

export default function InputUI() {
  return (
    <div className="relative w-full">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#c5c5c5] w-5 h-5 z-10" />

      <input
        placeholder="Search"
        type="text"
        className="
          w-full
          pl-10 pr-4 py-2
          rounded-xl
          text-white
          placeholder:text-[#c5c5c5]

          bg-[rgba(255,255,255,0.08)]
          backdrop-blur-md
          border border-[rgba(255,255,255,0.15)]

          outline-none
          transition-all duration-300

          hover:bg-[rgba(255,255,255,0.12)]
          hover:border-[rgba(255,255,255,0.25)]

          focus:bg-[rgba(255,255,255,0.15)]
          focus:border-[rgba(255,255,255,0.3)]
          focus:shadow-[0_0_15px_rgba(255,255,255,0.1)]
        "
      />
    </div>
  );
}
