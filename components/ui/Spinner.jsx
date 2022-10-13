import { LoadingOutlined } from "@ant-design/icons";

export default function Spinner() {
    return (
        <LoadingOutlined
            className={`animate-spin`}
            style={{
            fontSize: 24,
        }}
      />
    )
};
