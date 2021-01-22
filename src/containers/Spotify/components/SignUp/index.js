import React, { useReducer, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'
import { FormReducer, FormGenerator } from '../../../../components/FormGenerator'
import REGISTER_USER from './graphql'
import {
    Container, CentralContainer, CButton, Table, Title, ErrorLabel
} from '../../../../components/styles'

const SignUp = ({setLog}) => {
    const history = useHistory()
    const [err, setErr] = useState(false)
    const [form, setForm] = useReducer(FormReducer, {})
    const [register] = useMutation(REGISTER_USER, {
        variables: ['FirstName', 'LastName', 'Email', 'Username', 'Password', 'House', 'Year', 'EmailMe'].reduce((acc, cur) => {
            if(form[cur] && form[cur].value)
                acc[cur] = form[cur].value
            return acc
        }, {}),
        onCompleted: ({ login: { token } }) => {
            localStorage.setItem('token', token)
            setLog(true)
            history.push('/Profile')
          },
        onError: (error) => {
            setErr(true)
        }
    })
    const submitRegister = (e) => {
        e.preventDefault();
        let err = false;
        ['FirstName', 'LastName', 'Email', 'Username', 'Password'].forEach((item) => {
            if (!(form[item] && form[item].value)) {
                setForm({ name: item, err: true, value: '' });
                err = true;
            }
        })
        if (err)
            return false;
        register();
    }

    return (
        <Container>
            <CentralContainer>
                <Title>Sign Up</Title>
                <form onSubmit={submitRegister}>
                    <Table>
                        {FormGenerator(form, setForm, {
                            FirstName: {}, LastName: {}, Year: { type: 'sel' }, House: { title: 'House/Dorm' },
                            Email: { span: 2 }, Username: { span: 2 }, Password: { span: 2 }, 
                            EmailMe: { span: 2, type: 'box', title: 'Send me email notifications when I get matched!' }
                        },
                            [['FirstName', 'LastName'], ['Username'], ['Password'], ['House', 'Year'], ['Email'], ['EmailMe']])}
                        <tr><td colspan="2" style={{ textAlign: 'center' }}><CButton>Sign up!</CButton>
                        {err ? <><br /><ErrorLabel>Email already taken.</ErrorLabel></> : ''}</td></tr>
                    </Table>
                </form>
            </CentralContainer>
        </Container>
    )
}
export default SignUp
