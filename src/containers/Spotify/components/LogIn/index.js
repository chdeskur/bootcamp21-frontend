import React, { useState, useReducer } from "react"
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'
import { LOG_IN } from './graphql'
import { CentralContainer, Table, CButton, Title, ErrorLabel } from "../../../../components/styles";
import { FormReducer, FormGenerator } from "../../../../components/FormGenerator";

const LogIn = () => {
  const [form, setForm] = useReducer(FormReducer, {})
  const [loginErr, setLoginErr] = useState(false)
  const history = useHistory()
  const [logIn] = useMutation(LOG_IN, {
    variables: {
      email: form.Email && form.Email.value,
      password: form.Password && form.Password.value
    },
    onCompleted: ({ login: { token } }) => {
      localStorage.setItem('token', token)
      history.push('/Profile')
    },
    onError: (error) => {
      setLoginErr(true)
    }
  })
  const loginSubmit = (e) => {
    e.preventDefault()
    setLoginErr(false)
    let err = false;
    ['Email', 'Password'].forEach((item) => {
      if (!(form[item] && form[item].value)) {
        setForm({ name: item, err: true, value: '' });
        err = true;
      }
    })
    if (err)
      return false;
    logIn();
  }

  return (    
      <CentralContainer>
      <form onSubmit={loginSubmit}>
        <Title>Log In</Title>
        <Table>
          {FormGenerator(form, setForm, {
            Email: {}, Password: {}
          },
            [['Email'], ['Password']])}
          <tr><td colspan="2" style={{ textAlign: 'center' }}><CButton>Log in</CButton></td></tr>
        </Table>
        {loginErr ? <ErrorLabel>Incorrect username or password.</ErrorLabel> : null}
      </form>
    </CentralContainer>
  );
}

export default LogIn;