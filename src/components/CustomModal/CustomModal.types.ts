export interface IModalConfig {
  onClose: () => void;
  buttons?: IButtons;
  open?: boolean;
  size?: string | number;
  contents?: React.ReactNode;
}

export interface IButtons {
  action: () => void;
  label?: string;
}
