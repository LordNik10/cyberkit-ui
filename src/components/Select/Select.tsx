import styles from './Select.module.css'

export const MenuItem = ({ value, label }: { value: string; label: string }) => {
  return (
    <option className={styles.item} value={value}>
      {label}
    </option>
  )
}

export interface SelectProps {
  children: React.ReactNode
  value?: string | number
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLSelectElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLSelectElement>) => void
  onKeyDown?: (event: React.KeyboardEvent<HTMLSelectElement>) => void
  onKeyUp?: (event: React.KeyboardEvent<HTMLSelectElement>) => void
  style?: React.CSSProperties
}

export const Select = ({
  children,
  value,
  onChange,
  onBlur,
  onFocus,
  onKeyDown,
  onKeyUp,
  style,
}: SelectProps) => {
  return (
    <div className={styles.root} style={style}>
      <select
        className={styles.select}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
      >
        {children}
      </select>
    </div>
  )
}
