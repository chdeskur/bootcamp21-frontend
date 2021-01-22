import React, { useReducer, useState, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'
import { FormReducer, FormGenerator } from '../../../../components/FormGenerator'
import REGISTER_USER from './graphql'
import {
    Container, CentralContainer, CButton, Table, Title, ErrorLabel
} from '../../../../components/styles'

const SignUp = ({setLog, songs}) => {
    const history = useHistory()
    const [err, setErr] = useState(false)
    const [form, setForm] = useReducer(FormReducer, {})
    const [submission, setSubmission] = useState({})
    const isFirstRender = useRef(true)
    let formValues = {}
    const [register] = useMutation(REGISTER_USER, {
        variables: {input: submission},
        onCompleted: ({ login: { token } }) => {
            localStorage.setItem('token', token)
            setLog(true)
            history.push('/Profile')
          },
        onError: (error) => {
            throw new Error(error)
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
        const graphQl = {FirstName: 'firstName', LastName: 'lastName', Email: 'email', Username: 'username', Password: 'password', Age: 'age', PhoneNumber: 'phoneNumber'}
        const formValues = Object.keys(graphQl).reduce((acc, cur) => {
            if(form[cur] && form[cur].value)
                acc[graphQl[cur]] = (cur === 'Age' ? parseInt(form[cur].value) : form[cur].value);
            return acc
        }, {})
        formValues.songs = songs.map((song) => {
            return {id: song.id, title: song.name}
        });
        setSubmission(formValues)
    }
    useEffect(() => {
        if(isFirstRender.current) 
            return;
        register()
    }, [submission])
    useEffect(() => {
        isFirstRender.current = false;
    },[])
    return (
        <Container>
            <CentralContainer>
                <Title>Sign Up</Title>
                <form onSubmit={submitRegister}>
                    <Table>
                        {FormGenerator(form, setForm, {
                            FirstName: {}, LastName: {}, PhoneNumber: {type: 'num', bound: {limdec: 0, nodashes: false, noleadzero: false, maxlength:15}}, 
                            Age: {type: 'num', bound: {limdec: 0, max: 100}}, Email: { span: 2 }, Username: { span: 2 }, Password: { span: 2 }, 
                            EmailMe: { span: 2, type: 'box', title: 'Send me email notifications when I get matched!' }
                        },
                            [['FirstName', 'LastName'], ['Username'], ['Password'], ['Age', 'PhoneNumber'], ['Email'], ['EmailMe']])}
                        <tr><td colspan="2" style={{ textAlign: 'center' }}><CButton>Sign up!</CButton>
                        {err ? <><br /><ErrorLabel>Email already taken.</ErrorLabel></> : ''}</td></tr>
                    </Table>
                </form>
            </CentralContainer>
        </Container>
    )
}
export default SignUp
