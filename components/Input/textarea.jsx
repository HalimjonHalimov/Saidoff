import React from "react";

export default function Textarea({type, label, placeHolder,state, setState}) {
  return (
    <div className="w-full h-auto flex flex-col justify-start items-start gap-4 capitalize">
      <label className="text-sm font-normal text-[#01162C]" htmlFor={label}>
        {label}
      </label>
      <textarea
        className="text-base font-medium text-[#484D52] border border-[#EBEBEB] rounded-md w-full h-auto p-4 outline-none "
        name={type}
        id={label}
        value={state}
        placeholder={placeHolder}
        onChange={(e) => setState(e.target.value)}
        required
      />
    </div>
  );
}
