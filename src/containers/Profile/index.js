import { useMutation, useQuery } from '@apollo/react-hooks'
import React, {useEffect, useReducer, useState, useRef } from 'react'
import { FormReducer, FormGenerator } from '../../components/FormGenerator'
import { UPDATE_PROFILE, GET_USER } from './graphql'
import { 
  Container, CentralContainer, CButton, Table, Title, LabelRow
} from '../../components/styles'

const Profile = () => {
    const [initForm, setInitForm] = useState({})
    const [form, setForm] = useReducer(FormReducer, {})
    const [submission, setSubmission] = useState({})
    const [updateSuccess, setUpdateSuccess] = useState(false)
    const [updateProfile] = useMutation(UPDATE_PROFILE, {
        variables: {profile: {token: localStorage.getItem('token'), ...submission}},
        onCompleted: () => {
            setUpdateSuccess(true)
        }
    })
    const isFirstRender = useRef(true)
    const submitUpdate = (e) => {
        e.preventDefault();
        let err = false;
        ['FirstName', 'LastName', 'Email'].forEach((item) => {
            if (!(form[item] && form[item].value)) {
                setForm({ name: item, err: true, value: '' });
                err = true;
            }
        })
        if (err)
            return false;
        const graphQl = {FirstName: 'firstName', LastName: 'lastName', Age: 'age', PhoneNumber: 'phoneNumber', NewPassword: 'password', Bio: 'bio'}
        setSubmission(Object.keys(graphQl).reduce((acc, cur) => {
            if(form[cur] && form[cur].value !== initForm[cur])
                acc[graphQl[cur]] = (cur === 'Age' ? parseInt(form[cur].value) : form[cur].value)
            return acc
        }, {}))
    }
    const {data: profile, loading, error} = useQuery(GET_USER, {
        variables: {token: localStorage.getItem('token')}
    })
    useEffect(() => {
        if(isFirstRender.current) 
            return;
        if(Object.keys(submission).length) {
            // alert(JSON.stringify(submission))
            updateProfile()
        }
    }, [submission])
    useEffect(() => {
        isFirstRender.current = false;
        if(loading || error) return;
        else {
            setInitForm(Object.assign({}, profile && profile.userByToken))
            setForm({data: profile && profile.userByToken})
        }
    },[profile])
    return (
        <Container>
            <CentralContainer>
                <Title>My Profile</Title>
                {<form onSubmit={submitUpdate}>
                    <Table>
                        <tbody>
                        <LabelRow><td>Username:</td><td>{form.username && form.username.value || 'Loading...'}</td></LabelRow>
                        <LabelRow><td>Email:</td><td>{form.Email && form.Email.value || 'Loading...'}</td></LabelRow>
                        {FormGenerator(form, setForm, {FirstName: {}, LastName: {}, PhoneNumber: {type: 'num', bound: {limdec: 0, nodashes: false, noleadzero: false, maxlength:15}}, 
                        Age: {type: 'num', bound: {limdec: 0, max: 100}}, NewPassword: {span: 2}, EmailMe: {span: 2, type: 'box', title: 'Send me email notifications when I get matched!'}, Bio: {span: 2}},
                        [['NewPassword'], ['FirstName', 'LastName'], ['Age', 'PhoneNumber'], ['EmailMe'], ['Bio']])}
                        <tr><td colspan="2" style={{textAlign: 'center'}}><CButton>Save changes</CButton></td></tr>
                        {updateSuccess ? <tr><td colspan="2" style={{textAlign: 'center'}}>Profile updated successfully.</td></tr>: null }
                        </tbody>
                </Table>
                </form>}
            </CentralContainer>
        </Container>)
    }
export default Profile
