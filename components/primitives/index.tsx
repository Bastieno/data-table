import styled from 'styled-components'
import { base, BaseStyleProps } from '../../styles/baseStyles'

export { Box } from './Box'

export const Heading = styled.h1<BaseStyleProps>`
  ${base};
`
export const Text = styled.span<BaseStyleProps>`
  ${base}
`
