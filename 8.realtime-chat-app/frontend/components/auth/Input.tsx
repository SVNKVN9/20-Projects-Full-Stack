import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export default function Input(props: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
    return (
        <input className="px-3 py-1 text-gray-700 rounded-lg focus:outline-none" {...props} />
    )
}