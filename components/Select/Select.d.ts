export declare const MenuItem: ({ value, label }: {
    value: string;
    label: string;
}) => import("react/jsx-runtime").JSX.Element;
export interface SelectProps {
    children: React.ReactNode;
    value?: string | number;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLSelectElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLSelectElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLSelectElement>) => void;
    onKeyUp?: (event: React.KeyboardEvent<HTMLSelectElement>) => void;
    style?: React.CSSProperties;
}
export declare const Select: ({ children, value, onChange, onBlur, onFocus, onKeyDown, onKeyUp, style, }: SelectProps) => import("react/jsx-runtime").JSX.Element;
