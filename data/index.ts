import { ColumnDefinitionType } from '../components/DataTable'

interface Cat {
  id: React.Key
  name: string
  age: number
  gender: string
  color: string
  activityLevel?: string
  favoriteFood?: string
}

export const data: Cat[] = [
  {
    id: 1,
    name: 'Mittens',
    color: 'black',
    age: 2,
    gender: 'female',
    activityLevel: 'high',
    favoriteFood: 'milk',
  },
  {
    id: 2,
    name: 'Mons',
    color: 'grey',
    age: 2,
    gender: 'male',
    favoriteFood: 'old socks',
    activityLevel: 'medium',
  },
  {
    id: 3,
    name: 'Luna',
    color: 'black',
    age: 2,
    gender: 'female',
    activityLevel: 'medium',
    favoriteFood: 'fish',
  },
  {
    id: 4,
    name: 'Bella',
    color: 'grey',
    age: 1,
    gender: 'female',
    activityLevel: 'high',
    favoriteFood: 'mice',
  },
  {
    id: 5,
    name: 'Oliver',
    color: 'orange',
    age: 1,
    gender: 'male',
    activityLevel: 'low',
    favoriteFood: 'fish',
  },
]

export const columns: ColumnDefinitionType<Cat, keyof Cat>[] = [
  {
    id: 'name',
    label: 'Cat Name',
    width: 250,
  },
  {
    id: 'age',
    label: 'Age in years',
  },
  {
    id: 'color',
    label: 'Color',
  },
]

export const columnsAlt: ColumnDefinitionType<Cat, keyof Cat>[] = [
  {
    id: 'name',
    label: 'Cat Name',
    width: 200,
  },
  {
    id: 'age',
    label: 'Age in years',
    numeric: true,
    width: 150,
  },
  {
    id: 'color',
    label: 'Color',
  },
]

export const columnsForLargeData = [
  {
    title: 'A',
    dataIndex: 'key',
    width: 150,
  },
  {
    title: 'B',
    dataIndex: 'key',
  },
  {
    title: 'C',
    dataIndex: 'key',
  },
  {
    title: 'D',
    dataIndex: 'key',
  },
  {
    title: 'E',
    dataIndex: 'key',
    width: 200,
  },
  {
    title: 'F',
    dataIndex: 'key',
    width: 100,
  },
]

export const columnsForRemoteData = [
  {
    title: 'Id',
    dataIndex: 'id',
    width: 150,
  },
  {
    title: 'Description',
    dataIndex: 'title',
  },
  {
    title: 'Url',
    dataIndex: 'url',
  },
]

export const largeData = Array.from(
  {
    length: 100000,
  },
  (_, key) => ({
    key,
  })
)
