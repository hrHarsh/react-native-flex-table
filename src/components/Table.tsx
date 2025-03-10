import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { styles } from './styles';

export interface Column {
  key: string;
  title: string;
  width?: number;
  sortable?: boolean;
  render?: (value: any, record: any) => React.ReactNode;
}

export interface TableProps {
  data: any[];
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
  // Event handlers
  onRowPress?: (record: any) => void;
  onCellPress?: (value: any, record: any, column: Column) => void;
  onSort?: (key: string, direction: 'asc' | 'desc') => void;
  onSelectRow?: (recordId: string, selected: boolean) => void;
}

export const Table: React.FC<TableProps> = ({
  data,
  columns,
  headerStyle,
  rowStyle,
  cellStyle,
  headerTextStyle,
  cellTextStyle,
  containerStyle,
  loading = false,
  loadingComponent,
  emptyText = 'No data available',
  emptyComponent,
  selectable = false,
  selectedRows = [],
  onRowPress,
  onCellPress,
  onSort,
  onSelectRow,
}) => {
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);

  const handleSort = (column: Column) => {
    if (!column.sortable || !onSort) return;

    const direction = sortConfig?.key === column.key && sortConfig.direction === 'asc' ? 'desc' : 'asc';
    setSortConfig({ key: column.key, direction });
    onSort(column.key, direction);
  };

  if (loading) {
    return loadingComponent || <ActivityIndicator size="large" />;
  }

  if (!data.length) {
    return emptyComponent || <Text style={styles.emptyText}>{emptyText}</Text>;
  }

  return (
    <ScrollView horizontal>
      <View style={[styles.container, containerStyle]}>
        {/* Header */}
        <View style={[styles.header, headerStyle]}>
          {columns.map((column) => (
            <TouchableOpacity
              key={column.key}
              onPress={() => handleSort(column)}
              style={[
                styles.headerCell,
                column.width && { width: column.width },
              ]}
            >
              <View style={styles.headerContent}>
                <Text style={[styles.headerText, headerTextStyle]}>
                  {column.title}
                </Text>
                {column.sortable && sortConfig?.key === column.key && (
                  <Text>{sortConfig.direction === 'asc' ? '↑' : '↓'}</Text>
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Rows */}
        <ScrollView>
          {data.map((record, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => onRowPress?.(record)}
              style={[
                styles.row,
                rowStyle,
                selectedRows.includes(record.id) && styles.selectedRow,
              ]}
            >
              {selectable && (
                <TouchableOpacity
                  style={styles.checkbox}
                  onPress={() => onSelectRow?.(record.id, !selectedRows.includes(record.id))}
                >
                  <View style={[
                    styles.checkboxInner,
                    selectedRows.includes(record.id) && styles.checkboxChecked
                  ]} />
                </TouchableOpacity>
              )}
              {columns.map((column) => (
                <TouchableOpacity
                  key={column.key}
                  style={[
                    styles.cell,
                    column.width && { width: column.width },
                    cellStyle,
                  ]}
                  onPress={() => onCellPress?.(record[column.key], record, column)}
                >
                  {column.render ? (
                    column.render(record[column.key], record)
                  ) : (
                    <Text style={[styles.cellText, cellTextStyle]}>
                      {record[column.key]}
                    </Text>
                  )}
                </TouchableOpacity>
              ))}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};