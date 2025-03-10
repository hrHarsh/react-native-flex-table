import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { TableRowProps } from '../types';

export const TableRow: React.FC<TableRowProps> = ({
  record,
  columns,
  rowStyle,
  cellStyle,
  cellTextStyle,
  selected,
  selectable,
  onRowPress,
  onCellPress,
  onSelectRow,
}) => {
  return (
    <TouchableOpacity
      onPress={() => onRowPress?.(record)}
      style={[
        styles.row,
        rowStyle,
        selected && styles.selectedRow,
      ]}
    >
      {selectable && (
        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => onSelectRow?.(record.id.toString(), !selected)}
        >
          <View style={[
            styles.checkboxInner,
            selected && styles.checkboxChecked
          ]} />
        </TouchableOpacity>
      )}
      
      {columns.map((column) => (
        <TouchableOpacity
          key={column.key}
          style={[
            styles.cell,
            column.width ? { width: column.width } : undefined,
            column.align ? { 
              justifyContent: column.align === 'left' ? 'flex-start' : 
                            column.align === 'right' ? 'flex-end' : 'center' 
            } : undefined,
            column.fixed ? styles[`fixed${column.fixed}`] : undefined,
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
  );
};
