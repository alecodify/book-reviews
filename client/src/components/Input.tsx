
type InputPros = {
    className?: string,
    classNameLabel?: string,
    classNameInput?: string,
    value: any,
    label: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeHolder: string,
    type: string,
    name: string,
    required?: boolean,
    readonly?: boolean,
}


const Input = ({ className, classNameInput, classNameLabel, name, value, onChange, placeHolder, label, type, required = true, readonly = false}: InputPros) => {
    return (
        <div className={`mb-4 ${className}`}>
            <label htmlFor={name} className={`block text-sm font-bold mb-2 ${classNameLabel}`}>{label}</label>
            <input readOnly={readonly} type={type} placeholder={placeHolder} required={required} className={`shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-opacity-50 placeholder-black opacity-75 ${classNameInput}`} value={value} onChange={onChange} />
        </div>
    )
}

export default Input