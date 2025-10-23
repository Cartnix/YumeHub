import { Search } from "lucide-react"; 

export default function InputUI() {
  return (
    <div className="relative w-full">
  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-gray-1)] w-5 h-5 z-10" />

      <input
        placeholder="Search"
        type="text"
        className="
          w-full
          pl-10 pr-4 py-2
          rounded-xl
          text-white
          placeholder:text-[var(--color-gray-1)]

          bg-[var(--white-08)]
          backdrop-blur-md
          border border-[var(--white-15)]

          outline-none
          transition-all duration-300

          hover:bg-[var(--white-12)]
          hover:border-[var(--white-25)]

          focus:bg-[var(--white-15)]
          focus:border-[var(--white-30)]
          focus:shadow-[0_0_15px_var(--white-10-shadow)]
        "
      />
    </div>
  );
}
