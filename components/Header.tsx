import { Box, Heading } from '../components/primitives'
import { useMenuContext } from '../components/providers/MenuProvider'

export const Header = (): JSX.Element => {
  const { menuLinks, activeLinkId } = useMenuContext()
  const activeMenu = menuLinks.find(({ id }) => id === activeLinkId)
  const { headerText } = activeMenu
  return (
    <Box borderBottom="0.5px solid #D2D7DB" className="sticky-header">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={'0.7rem 7.5rem 0.7rem 2rem'}
        width={'70%'}
        height="100%"
      >
        <Heading
          data-testid="header"
          fontSize="20px"
          fontWeight={600}
          m={0}
          color="#002E5A"
        >
          {headerText}
        </Heading>
      </Box>
    </Box>
  )
}
