import { Box, Text } from './primitives'
import { useMenuContext } from './providers/MenuProvider'

const AsideMenuLinks = (): JSX.Element => {
    const { setActiveLinkId, menuLinks, addActiveClass } =
    useMenuContext()
  
    return (
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        height="calc(100% - 120px)"
        minHeight="200px"
        overflowY="scroll"
      >
        <Box width="100%" mt={'50px'}>
          {menuLinks.map(({ id, text }) => {
            return (
              <Box
                key={id}
                className={`nav-item ${addActiveClass(id)}`}
                onClick={() => setActiveLinkId(id)}
              >
                <Text as="p" ml="13px" fontSize="14px" mt="16px">
                  {text}
                </Text>
              </Box>
            )
          })}
        </Box>
      </Box>
    )
  }

export const AsideMenu = (): JSX.Element => {
  return (
    <Box pt={'50px'} bg="#F6F7F9" borderRight="1px solid #DEDBDB">
      <AsideMenuLinks />
    </Box>
  )
}
