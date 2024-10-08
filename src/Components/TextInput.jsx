export default ({ value, setValue, label, id, type }) => {
  return (
    <div className="flex flex-col w-48 gap-1">
      <label htmlFor={id} className="text-white">
        {label}
      </label>
      <input
        type={type}
        name={id}
        id={id}
        className="bg-zinc-900 text-white"
        value={value}
        onChange={(e) => {
          return setValue(e.target.value);
        }}
      />
    </div>
  );
};
