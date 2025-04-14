function TextField({ value, onChange, name, label }) {
  return (
    <div>
      <label className="mb-2 block" htmlFor={name}>
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        className="textField__input"
        type="text"
        name={name}
        autoComplete="off"
        id={name}
      />
    </div>
  );
}

export default TextField;
