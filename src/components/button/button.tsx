import styles from "./button.module.css";

type ButtonType = "primary" | "position" | "back";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;

  type: ButtonType;
  htmlType?: "button" | "submit" | "reset";
};
export default function Button({
  children,
  onClick,
  type,
  htmlType = "button",
}: ButtonProps) {
  return (
    <button
      type={htmlType}
      onClick={onClick}
      className={`${styles.btn} ${styles[type]}`}
    >
      {children}
    </button>
  );
}
