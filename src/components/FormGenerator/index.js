import React from 'react'
import {
    Input, Select, LabelRow, InputRow
} from '../styles'
import theme from '../../theme'

export const FormReducer = (prevState, payload) => {
    if (payload.data)
        return Object.keys(payload.data).reduce((acc, cur) => {
            acc[cur] = {err: false, value: payload.data[cur]}
            return acc
        }, {})
    const copy = Object.assign({}, prevState)
    copy[payload.name] = { err: payload.err, value: payload.value }
    return copy
}

export const FormGenerator = (form, setForm, obj, order) => {
    const table = [];
    order.forEach((row) => {
        const labelRow = [];
        const inputRow = [];
        row.forEach((dataPoint) => {
            const title = obj[dataPoint].title || dataPoint.replace(/([a-z])([A-Z])/, "$1 $2");
            if (obj[dataPoint].type !== 'box')
                labelRow.push(<td colspan={obj[dataPoint].span || 1}>{title}</td>)
            inputRow.push(<td colspan={obj[dataPoint].span || 1}>{(() => {
                switch (obj[dataPoint].type) {
                    case 'box':
                        return (<label><input type="checkbox" name={dataPoint} />{' ' + title}</label>)
                    case 'sel':
                        return (<Select style={form[dataPoint] && form[dataPoint].err ? { boxShadow: '0 0 5px 2px ' + theme.colors.red3 } : {}}
                            onInput={(e) => { setForm({ name: dataPoint, err: false, value: e.target.value }) }}>
                            <option value="">Select...</option>
                            {(obj[dataPoint].options || []).map((item) => <option>{item}</option>)}
                        </Select>)
                    default:
                        return (<Input style={form[dataPoint] && form[dataPoint].err ? { boxShadow: '0 0 5px 2px ' + theme.colors.red3 } : {}}
                            onInput={(e) => {if(obj[dataPoint].type === 'num') numberBoundCheck(e.target, obj[dataPoint].bound || {});
                            setForm({ name: dataPoint, err: false, value: e.target.value }) } } value={form[dataPoint] ? form[dataPoint].value : ''} placeholder={title + '...'}
                             />)
                }
            })()}</td>)
        })
        table.push(<LabelRow>{labelRow}</LabelRow>)
        table.push(<InputRow>{inputRow}</InputRow>)
    })
    return table;
}//

export const numberBoundCheck = (object, {min = 0, maxlength = 5, max = false, limdec = 2, noleadzero = true, nodashes = true, allowcaps = false} = {}) => {
    if(!object.value.length) 
        return;
    var val = object.value.replace(allowcaps ? /[^-.a-zA-Z0-9]/ : /[^-.0-9]/, '');
    if (allowcaps)
        val = val.toUpperCase();
    if (noleadzero)
        val = val.replace(/^-?0+/, '');
    if (nodashes) {
        val = val.replace(/([^\n])-/, '$1');
        if (min >= 0)
            val = val.replace('-', '');
    }
    var integer = val;
    var dec = '';
    if (limdec === 0)
        integer = integer.replace('.', '');
    else if (val.includes('.')) {
        var split = val.split('.', 2);
        integer = split[0];
        dec = '.' + split[1].replace('.', '');
        if (dec.length > limdec + 1)
            dec = dec.slice(0, limdec + 1);
    }
    if (max && parseInt(integer, 10) > max)
        integer = max.toString();
    else if (integer.length > maxlength)
        integer = integer.slice (0, maxlength);
    var newVal = integer + dec;
    if(min && parseFloat(newVal) < min)
        newVal = min;
    if (object.value === newVal) 
        return;
    var cursor = object.selectionStart;
    if (object.value.slice(cursor - 1, cursor).toUpperCase() != newVal.slice(cursor - 1, cursor))
        cursor = cursor - 1;
    object.value = newVal;
    object.selectionStart = cursor;
    object.selectionEnd = cursor;
}