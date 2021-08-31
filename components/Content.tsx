import { Box } from './primitives'
import { useMenuContext } from './providers/MenuProvider'
import { DataTable } from './DataTable'
import { data, columns } from '../data'

const SimpleTable = (): JSX.Element => {
  return (
    <DataTable
      columns={columns}
      rows={data}
      onRowClick={(rowData, rowIndex) => console.log({ rowData, rowIndex })}
    />
  )
}

const NumericTextRightAligned = (): JSX.Element => {
  return <Box>Numeric Text Right Aligned</Box>
}

const WithCheckboxes = (): JSX.Element => {
  return <Box>With Checkboxes</Box>
}

const WithInfiniteScroll = (): JSX.Element => {
  return <Box>With Infinite Scroll</Box>
}

const WithLargeData = (): JSX.Element => {
  return <Box>With Large Data</Box>
}

export const Content = (): JSX.Element => {
  const { activeLinkId } = useMenuContext()
  return (
    <Box>
      {activeLinkId === 1 && <SimpleTable />}
      {activeLinkId === 2 && <NumericTextRightAligned />}
      {activeLinkId === 3 && <WithCheckboxes />}
      {activeLinkId === 4 && <WithInfiniteScroll />}
      {activeLinkId === 5 && <WithLargeData />}
    </Box>
  )
}
