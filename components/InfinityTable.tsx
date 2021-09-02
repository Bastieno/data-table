import { useEffect } from 'react'
import { DataTable } from './DataTable'
import { Text, Box } from './primitives'
import { DataTableProps } from './DataTable'

interface InfinityTableProps<T, K extends keyof T>
  extends DataTableProps<T, K> {
  fetchData: VoidFunction
}

export function InfinityTable<T extends {}, K extends keyof T>({
  columns,
  rows,
  onRowClick,
  onSelectionChange,
  selectable,
  loading,
  fetchData,
}: InfinityTableProps<T, K>): JSX.Element {
  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    const node = document.querySelector<HTMLElement>('.table .ant-table-body')
    if (node) {
      node.addEventListener('scroll', () => {
        const perc =
          (node.scrollTop / (node.scrollHeight - node.clientHeight)) * 100
        if (perc >= 100) {
          fetchData()
        }
      })
    }
    return () => node.removeEventListener('scroll', () => {})
  })

  return (
    <Box data-testid="infinity-table-container">
      <DataTable
        columns={columns}
        rows={rows}
        selectable={selectable}
        onRowClick={onRowClick ? onRowClick : () => {}}
        onSelectionChange={onSelectionChange ? onSelectionChange : () => {}}
      />
      {loading && (
        <Text as="p" color="#B50156" mt="12px">
          Loading...
        </Text>
      )}
    </Box>
  )
}
