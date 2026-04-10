import type { HTMLInputTypeAttribute } from "react"
import styles from './Input.module.css'

export interface InputProps {
    type: HTMLInputTypeAttribute 
    placeholder?: string
    value?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
    onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void
    style?: React.CSSProperties
}

export const Input = ({ type, placeholder, value, onChange, onBlur, onFocus, onKeyDown, onKeyUp, style }: InputProps)=>{
    return (
        <input className={styles.input} type={type} placeholder={placeholder} value={value} onChange={onChange} onBlur={onBlur} onFocus={onFocus} onKeyDown={onKeyDown} onKeyUp={onKeyUp} style={style} />
    )
}