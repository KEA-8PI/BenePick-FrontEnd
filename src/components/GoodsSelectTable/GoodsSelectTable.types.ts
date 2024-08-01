export interface GoodsSelectTableRowProps {
  id: string | React.SetStateAction<string> | number;
  selected: boolean;
  columns: IColumnList[];
  handleClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  rowData: { [key: string]: string | number }[];
  setRowData: React.Dispatch<React.SetStateAction<{ [key: string]: string | number }[]>>;
}

export interface IColumnList {
  id: string | number;
  label: string | number;
  type?: string;
}
