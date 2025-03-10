import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    paddingVertical: 10,
    alignItems: 'center',
  },
  selectedRow: {
    backgroundColor: '#F0F7FF',
  },
  header: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#D1D1D1',
    paddingVertical: 12,
    backgroundColor: '#F7F7F7',
  },
  headerCell: {
    flex: 1,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  sortIcon: {
    marginLeft: 4,
    fontSize: 12,
  },
  cell: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  cellText: {
    fontSize: 14,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#D1D1D1',
    borderRadius: 4,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxInner: {
    width: 12,
    height: 12,
    borderRadius: 2,
  },
  checkboxChecked: {
    backgroundColor: '#1890ff',
  },
  emptyText: {
    textAlign: 'center',
    padding: 20,
    color: '#999999',
  },
  fixedleft: {
    position: 'sticky',
    left: 0,
    backgroundColor: '#FFFFFF',
    zIndex: 1,
  },
  fixedright: {
    position: 'sticky',
    right: 0,
    backgroundColor: '#FFFFFF',
    zIndex: 1,
  },
});