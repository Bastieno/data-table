import { useEffect } from 'react'
import { DataTable } from './DataTable'
import { Text, Box } from './primitives'

export const InfinityTable = ({
  columns,
  rows,
  selectable,
  loading,
  fetchData,
}): JSX.Element => {
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
        onRowClick={(rowData, rowIndex) => console.log({ rowData, rowIndex })}
        onSelectionChange={(selectedRowKeys, selectedRow) =>
          console.log({ selectedRowKeys, selectedRow })
        }
      />
      {loading && (
        <Text as="p" color="#B50156" mt="12px">
          Loading...
        </Text>
      )}
    </Box>
  )
}
