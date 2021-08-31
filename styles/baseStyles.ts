/** This is our base component styles */
import {
  color,
  space,
  typography,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
  ColorProps,
  SpaceProps,
  TypographyProps,
  LayoutProps,
  FlexboxProps,
  GridProps,
  BackgroundProps,
  BorderProps,
  PositionProps,
  ShadowProps,
  compose,
} from 'styled-system'

export type BaseStyleProps = ColorProps &
  SpaceProps &
  TypographyProps &
  LayoutProps &
  FlexboxProps &
  GridProps &
  BackgroundProps &
  BorderProps &
  PositionProps &
  ShadowProps

export const base = compose(
  () => ({ boxSizing: 'border-box' }),
  color,
  space,
  typography,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow
)
