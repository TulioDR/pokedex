import React from "react";

type Props = {
   onChange: (e: React.FormEvent<HTMLInputElement>) => void;
   onFocus: () => void;
   onBlur: (e: React.FocusEvent) => void;
   value: string;
};

export default function Input({ onChange, onFocus, onBlur, value }: Props) {
   return (
      <div className="flex-1">
         <input
            type="text"
            className="bg-white text-black rounded-lg h-full w-full outline-none px-5 capitalize"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            value={value}
         />
      </div>
   );
}
