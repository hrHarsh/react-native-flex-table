export type SortDirection = 'asc' | 'desc';

export interface Column {
  key: string;
  title: string;
  width?: number;
  sortable?: boolean;
  render?: (value: any, record: any) => React.ReactNode;
  align?: 'left' | 'center' | 'right';
  fixed?: 'left' | 'right';
}

export interface TableRecord {
  id: string | number;
  [key: string]: any;
}

export interface SortConfig {
  key: string;
  direction: SortDirection;
}

export interface TableProps {
  // Required props
  data: TableRecord[];
  columns: Column[];
  
  // Style customization
  headerStyle?: object;
  rowStyle?: object;
  cellStyle?: object;
  headerTextStyle?: object;
  cellTextStyle?: object;
  containerStyle?: object;
  
  // Functionality
  loading?: boolean;
  loadingComponent?: React.ReactNode;
  emptyText?: string;
  emptyComponent?: React.ReactNode;
  selectable?: boolean;
  selectedRows?: string[];
  stickyHeader?: boolean;
  resizableColumns?: boolean;
  
  // Event handlers
  onRowPress?: (record: TableRecord) => void;
  onCellPress?: (value: any, record: TableRecord, column: Column) => void;
  onSort?: (key: string, direction: SortDirection) => void;
  onSelectRow?: (recordId: string, selected: boolean) => void;
  onColumnResize?: (columnKey: string, newWidth: number) => void;
}

export interface TableHeaderProps {
  columns: Column[];
  sortConfig: SortConfig | null;
  headerStyle?: object;
  headerTextStyle?: object;
  onSort?: (column: Column) => void;
}

export interface TableRowProps {
  record: TableRecord;
  columns: Column[];
  rowStyle?: object;
  cellStyle?: object;
  cellTextStyle?: object;
  selected?: boolean;
  selectable?: boolean;
  onRowPress?: (record: TableRecord) => void;
  onCellPress?: (value: any, record: TableRecord, column: Column) => void;
  onSelectRow?: (recordId: string, selected: boolean) => void;
}
