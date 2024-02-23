import { AiOutlineLoading } from "react-icons/ai";

export default function Spinner({ size = 24 }) {
    return <AiOutlineLoading className={`animate-spin`} size={size} />;
}
