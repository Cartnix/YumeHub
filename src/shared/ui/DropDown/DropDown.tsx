import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DropDownI {
  children: React.ReactNode;
  title: string;
}

export default function DropDown({ children, title }: DropDownI) {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-2">
      <div 
        className="flex items-center justify-between border-b-[#332833] border-b pb-2 cursor-pointer select-none" 
        onClick={() => setOpen(prev => !prev)}
      >
        <h2 className="text-2xl">{title}</h2>
        {isOpen ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="max-h-[420px] overflow-y-auto pr-2 custom-scrollbar">
              <div className="flex gap-2 mt-2 flex-wrap pb-2">
                {children}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}