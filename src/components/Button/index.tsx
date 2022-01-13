import * as S from './styles'
import { LocalGasStation } from '@styled-icons/material/LocalGasStation'

export type ButtonProps = {
  children?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  icon?: React.ReactNode
}

const Button = ({
  children,
  icon = <LocalGasStation size={20} />,
  size = 'medium',
  fullWidth = false
}: ButtonProps) => (
  <S.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon}>
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
