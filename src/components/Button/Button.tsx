import styles from "./Button.module.css";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};

export function Button({
  children,
  onClick
}: Props) {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      style={{
        // padding:'12px 20px',
        // border:'1px solid',
        // borderRadius: '8px',
        // background:'#2563eb',
        // color:'white',
        // cursor:'pointer',
      }}
    >
      {children}
    </button>
  );
}