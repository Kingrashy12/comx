import { ElementType } from "react";

export type DivProps = React.HTMLAttributes<HTMLDivElement>;
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export interface CardProps extends DivProps {
  renderHeader?: React.ReactNode;
  classNames?: {
    body?: string;
    root?: string;
  };
}

export interface BoxInterface extends DivProps {
  column?: boolean;
  between?: boolean;
  center?: boolean;
  itemsCenter?: boolean;
  fullWidth?: boolean;
  stack?: boolean;
  stackDirection?: "col" | "row";
}

export interface SelectButtonInterface extends ButtonProps {
  active?: boolean;
  disabled?: boolean;
}

export interface LabelInterface
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  value: string;
}

export interface TextInputInterface extends InputProps {
  variant?: "outline" | "surface";
  error?: boolean;
  errorMessage?: string;
  hideErr?: boolean;
  inputClass?: string;
}

export interface InputWithIconInterface extends InputProps {
  variant?: "outline" | "surface";
  error?: boolean;
  errorMessage?: string;
  hideErr?: boolean;
  inputClass?: string;
  icon?: ElementType;
}

export interface ButtonInterface extends ButtonProps {
  variant?: "solid" | "outline" | "ghost" | "surface";
  colorScheme?: "danger" | "success" | "primary";
  fullWidth?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  icon?: React.ElementType;
  between?: boolean;
  iconSize?: number;
}

export interface SelectTriggerInterface {
  placeholder: string;
  className?: string;
  label?: string;
}

export type IconBaseType = {
  icon: React.ElementType;
  size?: number;
  className?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  styles?: React.CSSProperties;
  color?: string;
  title?: string;
};

export interface ModalHeaderType extends DivProps {
  showBorder?: boolean;
}

export interface ModalContentType extends DivProps {
  centerContent?: boolean;
}
