import React from 'react'

import {
  ButtonStyles
} from './Button.styles'

const Button = ({children, ...props }) => (
  <ButtonStyles {...props}>
    {children}
  </ButtonStyles>
)

export default Button