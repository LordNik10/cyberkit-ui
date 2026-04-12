import styles from "./Button.module.css";

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outlined-primary" | "outlined-secondary";
  style?: React.CSSProperties;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  type?: HTMLButtonElement["type"];
}

const variantClass: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: styles.primary,
  secondary: styles.secondary,
  "outlined-primary": styles["outlined-primary"],
  "outlined-secondary": styles["outlined-secondary"],
};

export const Button = ({
  label,
  onClick,
  variant = "primary",
  style,
  startIcon,
  endIcon,
  type,
}: ButtonProps) => {
  return (
    <button
      type={type ?? "button"}
      className={`${styles.button} ${variantClass[variant]}`}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.25rem",
        ...style,
      }}
      onClick={onClick}
    >
      {startIcon}
      {label}
      {endIcon}
    </button>
  );
};
