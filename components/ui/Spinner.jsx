import { AiOutlineLoading } from "react-icons/ai";

export default function Spinner() {
    return (
        <AiOutlineLoading
            className={`animate-spin`}
            style={{
            fontSize: 24,
        }}
      />
    )
};
