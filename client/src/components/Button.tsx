
type ButtonProps = {
    className?: string,
    type: "button" | "submit" | "reset";
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    text: string,
}

const Button = ({className, type, text, onClick} : ButtonProps) => {
  return (
    <button type={type} onClick={onClick} className={`bg-gradient-to-r  text-white font-bold py-2 px-4 rounded-full w-full transition duration-300 ease-in-out transform hover:scale-105 ${className}`}>{text}</button>
  )
}

export default Button