import React from 'react'

import styled from 'styled-components'

import Button from '../Button/Button'

const Form = () => (
  <form action="#" method="post">
    <ul>
     <li>
       <label for="name">Name:</label>
       <input type="text" id="name" name="user_name"/>
     </li>
     <li>
       <label for="mail">E-mail:</label>
       <input type="email" id="mail" name="user_email"/>
     </li>
     <li>
       <label for="msg">Message:</label>
       <textarea id="msg" name="user_message"></textarea>
     </li>
     <ButtonContainer>
       <Button>
         Send
       </Button>
     </ButtonContainer>
    </ul>
  </form>
)

const ButtonContainer = styled.div`

`

export default Form