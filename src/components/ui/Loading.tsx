import Spinner from "@/components/ui/Spinner";

export default function Loading() {
    return (
        <div className="flex h-full justify-center align-middle items-center py-32">
            <Spinner size={56} />
        </div>
    )
};
