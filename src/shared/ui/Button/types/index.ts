export interface IBtn {
  onClick?: () => void;
  type?: "submit" | "button" | undefined;
  className?: string;
  children?: React.ReactNode;
}
