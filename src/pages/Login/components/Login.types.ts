export interface IModalConfig {
  onClose: () => void;
  open?: boolean;
  buttons?: IButtons;
  contents?: React.ReactNode;
}

export interface IButtons {
  action: () => void;
  label?: string;
}
