export interface HeadLabel {
  id: string;
  label: string;
  align?: 'left' | 'right' | 'center' | 'justify' | 'inherit';
  width?: string | number;
  minWidth?: string | number;
}

export interface TableHeadProps {
  headLabel: HeadLabel[];
}

export interface TableRowProps {
  columns: IColumnList[];
  index: number;
  sequence?: number;
  propsId?: string | number;
  setColumns?: React.Dispatch<React.SetStateAction<{ [key: string]: string | number }[]>>;
}

export interface IColumnList {
  id: string | number;
  label: string | number;
}
