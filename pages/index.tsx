import { Layout } from '../components/Layout'
import { Content } from '../components/Content'
import { MenuContextProvider } from '../components/providers/MenuProvider'

const Home = (): JSX.Element => {
  return (
    <MenuContextProvider>
      <Layout>
        <Content />
      </Layout>
    </MenuContextProvider>
  )
}

export default Home
