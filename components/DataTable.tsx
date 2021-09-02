import { Table } from 'antd'

export type ColumnDefinitionType<T, K extends keyof T> = {
  id: K
  label: string
  numeric?: boolean
  width?: number | string
}

export interface DataTableProps<T, K extends keyof T> {
  columns: ColumnDefinitionType<T, K>[]
  rows: T[]
  onRowClick?: (rowData: T, rowIndex: React.Key) => void
  onSelectionChange?: (selectedRowKeys: React.Key[], selectedRows: T[]) => void
  selectable?: boolean
  loading?: boolean
  className?: string
}

export function DataTable<T extends {}, K extends keyof T>({
  columns,
  rows,
  onRowClick,
  onSelectionChange,
  selectable,
  loading,
  className = 'table',
}: DataTableProps<T, K>): JSX.Element {
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: T[]) =>
      onSelectionChange(selectedRowKeys, selectedRows),
  }

  function transformColumns(columns) {
    return columns.map((column) => {
      const base = {
        dataIndex: column.id,
        title: column.label,
        align: column.numeric ? 'right' : 'left',
      }
      if (column.width) {
        base['width'] = column.width
      }
      return base
    })
  }

  return (
    <Table
      className={className}
      rowKey="id"
      columns={transformColumns(columns)}
      dataSource={rows}
      pagination={false}
      scroll={{ y: 500, scrollToFirstRowOnChange: false }}
      rowSelection={
        selectable && {
          type: 'checkbox',
          ...rowSelection,
        }
      }
      onRow={(record, rowIndex) => {
        return {
          onClick: (_event) => onRowClick(record, rowIndex),
        }
      }}
      loading={loading}
    />
  )
}
