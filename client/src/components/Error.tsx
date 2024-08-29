import { useEffect, useState } from 'react';

type ErrorProps = {
    status: "success" | "failed",
    error: string,
}

const Error = ({ status, error }: ErrorProps) => {
    const [visible, setVisible] = useState<boolean>(true);
    const isSuccess = status === "success";

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    if (!visible) {
        return null; 
    }

    return (
        <div className={`p-4 my-4 rounded-md shadow-md ${isSuccess ? 'bg-green-100 border-l-4 border-green-500 text-green-700' : 'bg-red-100 border-l-4 border-red-500 text-red-700'}`} role="alert">
            <p className="font-normal">{error}</p>
        </div>
    )
}

export default Error