export interface HeadLabel {
  id: string;
  label: string;
  align?: 'left' | 'right' | 'center' | 'justify' | 'inherit';
  width?: string | number;
  minWidth?: string | number;
}

export interface SelectTableHeadProps {
  order: 'asc' | 'desc';
  orderBy: string;
  rowCount: number;
  headLabel: HeadLabel[];
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: string) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface SelectTableRowProps {
  selected: boolean;
  content: string;
  columns: IColumnList[];
  handleClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onRowClick: (event: React.MouseEvent<unknown>) => void;
}

export interface IColumnList {
  id: string | number;
  label: string | number;
  type: string;
}
