import React, {useReducer} from 'react'
import { FormReducer, FormGenerator } from '../../components/FormGenerator'
import { 
  Container, CentralContainer, Button, Table
} from '../../components/styles'

const Profile = () => {
    const [form, setForm] = useReducer(FormReducer, {})
    return (
        <Container>
            <CentralContainer>
                <div>My Profile</div>
                <div>Change Profile Picture</div>
                <Table>
                    <tr><td>Username:</td><td>Username</td></tr>
                    {FormGenerator(form, setForm, {FirstName: {}, LastName: {}, Year: {type: 'sel'}, House: {title: 'House/Dorm'}, 
                    Email: {span: 2}, OldPassword: {}, NewPassword: {}, EmailMe: {span: 2, type: 'box', title: 'Send me email notifications when I get matched!'}, Bio: {span: 2}},
                    [['OldPassword', 'NewPassword'], ['FirstName', 'LastName'], ['House', 'Year'], ['Email'], ['EmailMe'], ['Bio']])}
                    <tr><td colspan="2" style={{textAlign: 'center'}}><Button>Save changes</Button></td></tr>
                </Table>
            </CentralContainer>
        </Container>)
    }
export default Profile
