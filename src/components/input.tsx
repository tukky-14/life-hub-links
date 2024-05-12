type InputProps = {
    type: string;
    id: string;
    name: string;
    label: string;
    required: boolean;
    style: string;
};

const Input = (props: InputProps) => {
    const { type, id, name, label, required, style } = props;

    return (
        <div className={style}>
            <label htmlFor={id} className="block text-sm font-medium">
                {label}
            </label>
            <input
                type={type}
                id={id}
                name={name}
                className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-gray-300 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
                required={required}
            />
        </div>
    );
};

export default Input;
