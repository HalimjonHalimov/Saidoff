export default function Input({ type, label, placeHolder, state, seTState }) {
  return (
    <div className="w-full h-auto flex flex-col justify-start items-start gap-4 capitalize">
      <label className="text-sm font-normal text-[#01162C]" htmlFor={label}>
        {label}
      </label>
      <input
        className="text-base font-medium text-[#484D52] border border-[#EBEBEB] rounded-md w-full h-auto p-4 outline-none "
        type={type}
        name={type}
        id={label}
        value={state}
        placeholder={placeHolder}
        onChange={(e) => seTState(e.target.value)}
        required
      />
    </div>
  );
}
