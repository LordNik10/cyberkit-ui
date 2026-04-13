import { HTMLInputTypeAttribute } from '../../../node_modules/react';
export interface InputProps {
    type: HTMLInputTypeAttribute;
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    style?: React.CSSProperties;
}
export declare const Input: ({ type, placeholder, value, onChange, onBlur, onFocus, onKeyDown, onKeyUp, style }: InputProps) => import("react/jsx-runtime").JSX.Element;
