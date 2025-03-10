import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { TableHeaderProps, Column } from '../types';

export const TableHeader: React.FC<TableHeaderProps> = ({
  columns,
  sortConfig,
  headerStyle,
  headerTextStyle,
  onSort,
}) => {
  const handleSort = (column: Column) => {
    if (!column.sortable || !onSort) return;
    onSort(column);
  };

  return (
    <View style={[styles.header, headerStyle]}>
      {columns.map((column) => (
        <TouchableOpacity
          key={column.key}
          onPress={() => handleSort(column)}
          style={[
            styles.headerCell,
            column.width && { width: column.width },
            column.align && { justifyContent: column.align },
            column.fixed && styles[`fixed${column.fixed}`],
          ]}
        >
          <View style={styles.headerContent}>
            <Text style={[styles.headerText, headerTextStyle]}>
              {column.title}
            </Text>
            {column.sortable && sortConfig?.key === column.key && (
              <Text style={styles.sortIcon}>
                {sortConfig.direction === 'asc' ? '↑' : '↓'}
              </Text>
            )}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};
