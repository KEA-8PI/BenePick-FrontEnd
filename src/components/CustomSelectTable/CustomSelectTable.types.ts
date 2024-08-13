export interface HeadLabel {
  id: string;
  label: string;
  align?: 'left' | 'right' | 'center' | 'justify' | 'inherit';
  width?: string | number;
  minWidth?: string | number;
}

export interface SelectTableHeadProps {
  rowCount: number;
  headLabel: HeadLabel[];
  numSelected: number;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface SelectTableRowProps {
  id: string | React.SetStateAction<string> | number;
  selected: boolean;
  columns: IColumnList[];
  handleClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isModify: boolean;
  setIsModify: React.Dispatch<React.SetStateAction<string>>;
  rowData: { [key: string]: string | number }[];
  setRowData: React.Dispatch<React.SetStateAction<{ [key: string]: string | number }[]>>;
}

export interface IColumnList {
  id: string | number;
  label: string | number;
  type?: string;
}
