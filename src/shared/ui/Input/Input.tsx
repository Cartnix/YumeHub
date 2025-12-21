import { Search } from "lucide-react";
import type { InputHTMLAttributes } from "react";

interface InputI extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string,
  type: "email" | "password" | "text"
  withIcon?: boolean
}

export default function InputUI({ placeholder, type = "text", withIcon = false, ...props }: InputI) {
  return (
    <div className="relative w-full">
      {withIcon && (
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-gray-1)] w-5 h-5 z-10" />
      )}
      <input
        {...props}
        placeholder={placeholder}
        type={type}
        className={`
          ${withIcon ? "pl-10" : "pl-5"}
          w-full
          py-2
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
        `}
      />
    </div>
  );
}
