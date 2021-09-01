import { useEffect, useState, useCallback } from 'react'
import { useMenuContext } from './providers/MenuProvider'
import { DataTable } from './DataTable'
import { Box } from './primitives'
import { InfinityTable } from './InfinityTable'
import { VirtualTable } from './VirtualTable'
import {
  data,
  columns,
  columnsAlt,
  largeData,
  columnsForLargeData,
  columnsForRemoteData,
} from '../data'
import { fetchData, fetchRemoteData } from '../utils'

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
  return (
    <Box data-testid="numeric-text" maxWidth={900}>
      <DataTable
        columns={columnsAlt}
        rows={data}
        onRowClick={(rowData, rowIndex) => console.log({ rowData, rowIndex })}
      />
    </Box>
  )
}

const WithCheckboxes = (): JSX.Element => {
  return (
    <DataTable
      columns={columns}
      rows={data}
      selectable={true}
      onRowClick={(rowData, rowIndex) => console.log({ rowData, rowIndex })}
      onSelectionChange={(selectedRowKeys, selectedRow) =>
        console.log({ selectedRowKeys, selectedRow })
      }
    />
  )
}

const WithInfiniteScroll = (): JSX.Element => {
  const [loading, setLoading] = useState(false)
  const [rows, setRows] = useState([])
  const handleFetch = async () => {
    setLoading(true)
    const newData = await fetchData(rows.length)
    setRows((data) => data.concat(newData))
    setLoading(false)
  }
  return (
    <InfinityTable
      columns={columns}
      rows={rows}
      selectable={false}
      loading={loading}
      fetchData={handleFetch}
    />
  )
}

const WithLargeData = (): JSX.Element => {
  return (
    <Box maxWidth={900}>
      <VirtualTable
        columns={columnsForLargeData}
        dataSource={largeData}
        scroll={{
          y: 500,
        }}
      />
    </Box>
  )
}

const WithRemoteData = (): JSX.Element => {
  const [loading, setLoading] = useState(false)
  const [rows, setRows] = useState([])
  const url = 'https://jsonplaceholder.typicode.com/photos'

  const handleFetch = useCallback(async () => {
    setLoading(true)
    try {
      const newData = await fetchRemoteData(url)
      setRows(newData)
    } catch (error) {
      console.log('error.message :>> ', error.message)
    } finally {
      setLoading(false)
    }
  }, [url])

  useEffect(() => {
    handleFetch()
  }, [])

  return (
    <VirtualTable
      columns={columnsForRemoteData}
      dataSource={rows}
      loading={loading}
      scroll={{
        y: 500,
      }}
      data-testid="remote-data-table"
    />
  )
}

export const Content = (): JSX.Element => {
  const { activeLinkId } = useMenuContext()
  return (
    <Box data-testid="content">
      {activeLinkId === 1 && <SimpleTable />}
      {activeLinkId === 2 && <NumericTextRightAligned />}
      {activeLinkId === 3 && <WithCheckboxes />}
      {activeLinkId === 4 && <WithInfiniteScroll />}
      {activeLinkId === 5 && <WithLargeData />}
      {activeLinkId === 6 && <WithRemoteData />}
    </Box>
  )
}
