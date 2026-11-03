const Inputs = ({ placeholder, id, value, onChange, required = false }) => {
    return (
        <input
            onChange={onChange}
            value={value}
            required={required}
            className="bg-blue-200 p-2 rounded-md outline-blue-400"
            type="text"
            placeholder={placeholder}
            id={id}
        />
    );
};

export default Inputs;
