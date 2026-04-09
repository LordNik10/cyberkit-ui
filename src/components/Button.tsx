import styles from './Button.module.css'

export interface ButtonProps {
  label: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'inverted' | 'outlined'
}

const variantClass: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: styles.primary,
  secondary: styles.secondary,
  inverted: styles.inverted,
  outlined: styles.outlined,
}

export const Button = ({
  label,
  onClick,
  variant = 'primary',
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={`${styles.button} ${variantClass[variant]}`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}
