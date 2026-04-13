export interface ButtonProps {
    label: string;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "outlined-primary" | "outlined-secondary";
    style?: React.CSSProperties;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    type?: HTMLButtonElement["type"];
}
export declare const Button: ({ label, onClick, variant, style, startIcon, endIcon, type, }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
