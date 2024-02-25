export interface TextareaProps {
    placeholder?: string;
    className?: string;
    isError: boolean;
    setError: (e: boolean) => void;
}