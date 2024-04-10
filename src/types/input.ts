export interface InputProps {
    placeholder?: string;
    type: string;
    className?: string;
    isError?: boolean;
    setError?: (e: boolean) => void;
}