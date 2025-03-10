# React Native Flex Table

A flexible and customizable table component for React Native applications.

## Installation

```bash
npm install  @harshrathore5/react-native-flex-table
```
or 
```bash
yarn add @harshrathore5/react-native-flex-table
```


## Usage

```javascript
import { Table } from '@harshrathore5/react-native-flex-table';

// Example data
const data = [
    { name: 'John Doe', age: 30, city: 'New York' },
    { name: 'Jane Smith', age: 25, city: 'Los Angeles' },
    { name: 'Jim Beam', age: 40, city: 'Chicago' },
];

// Example columns
const columns = [
    { key: 'name', title: 'Name' },
    { key: 'age', title: 'Age' },
    { key: 'city', title: 'City' },
];

// Render the table
return (
    <Table
        data={data}
        columns={columns}
    />
    );
```

## Customization

The `Table` component supports various customization options:

### Props

The `Table` component accepts the following props:

- `data`: The data to display in the table.
- `columns`: The columns to display in the table.
- `headerStyle`: The style for the table header.
- `rowStyle`: The style for the table rows.
- `cellStyle`: The style for the table cells.


