import React from 'react'
import styled from 'styled-components'
import { base, BaseStyleProps as BoxProps } from '../../styles/baseStyles'

export interface ExtraBoxProps {
  className?: string
  disabled?: any
  onClick?: () => void
}

const BoxWrapper = styled.div<BoxProps>`
  ${base};
`

export const Box: React.FC<BoxProps & ExtraBoxProps & { as?: any }> = ({
  children,
  ...props
}): JSX.Element => <BoxWrapper {...props}>{children}</BoxWrapper>
