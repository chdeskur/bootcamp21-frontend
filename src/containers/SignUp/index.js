import React from 'react'
import { 
  Container, CentralContainer, Text, Button, Input, Select, LabelRow, InputRow, Table
} from '../../components/styles'

const SignUp = () => {
    return (
        <Container>
            <CentralContainer>
                <Table>
                    {formGenerator({FirstName: {}, LastName: {}, Year: {type: 'sel'}, House: {title: 'House/Dorm'}, Email: {span: 2}, Username: {span: 2}, Password: {span: 2}},
                    [['FirstName', 'LastName'], ['Username'], ['Password'], ['House', 'Year'], ['Email']])}
                </Table>
                <div style={{display: 'inline-block', margin: 'auto', textAlign: 'center'}}><Button>Sign up!</Button></div>
            </CentralContainer>
        </Container>
    )
}
const formGenerator = (obj, order) => {
    const table = [];
    order.forEach((row) => {
        const labelRow = [];
        const inputRow = [];
        row.forEach((dataPoint) => {
            const title = obj[dataPoint].title || dataPoint.replace(/([a-z])([A-Z])/, "$1 $2");
            labelRow.push(<td colspan={obj[dataPoint].span || 1}>{title}</td>)
            inputRow.push(<td colspan={obj[dataPoint].span || 1}>{
                obj[dataPoint].type ? <Select>
                    <option value="">Year...</option>
                    <option>Freshman</option>
                    <option>Sophomore</option>
                    <option>Junior</option>
                    <option>Senior</option>
                </Select> : <Input name={dataPoint} placeholder={title + '...'} />
            }</td>)
        })
        table.push(<LabelRow>{labelRow}</LabelRow>)
        table.push(<InputRow>{inputRow}</InputRow>)
    })
    return table;
}

export default SignUp
