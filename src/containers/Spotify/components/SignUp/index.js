import React, { useReducer } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { FormReducer, FormGenerator } from '../../../../components/FormGenerator'
import REGISTER_USER from './graphql'
import {
    Container, CentralContainer, Button, Table
} from '../../../../components/styles'

const SignUp = () => {
    const [form, setForm] = useReducer(FormReducer, {})
    const [register] = useMutation(REGISTER_USER, {
        variables: ['FirstName', 'LastName', 'Email', 'Username', 'Password', 'House', 'Year'].reduce((acc, cur) => {
            if(form[cur] && form[cur].value)
                acc[cur] = form[cur].value
            return acc
        }, {}),
        onComplete: () => {
            //history.pushState('profile');
        }
    })
    return (
        <Container>
            <CentralContainer>
                <form onSubmit={(e) => {
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
                }}>
                    <Table>
                        <th colspan="2">Sign Up</th>
                        {FormGenerator(form, setForm, {
                            FirstName: {}, LastName: {}, Year: { type: 'sel' }, House: { title: 'House/Dorm' },
                            Email: { span: 2 }, Username: { span: 2 }, Password: { span: 2 }, EmailMe: { span: 2, type: 'box', title: 'Send me email notifications when I get matched!' }
                        },
                            [['FirstName', 'LastName'], ['Username'], ['Password'], ['House', 'Year'], ['Email'], ['EmailMe']])}
                        <tr><td colspan="2" style={{ textAlign: 'center' }}><Button type="submit">Sign up!</Button></td></tr>
                    </Table>
                </form>
            </CentralContainer>
        </Container>
    )
}
export default SignUp
