import React, { useState } from 'react'
import './calculator.css'
import Container from '@mui/material/Container'

export default function Calculator(){
    const[num, setNum] = useState(0)
    const[oldNum, setOldNum] = useState(0)
    const[operator, setOperator] = useState(0)

    function inputNum(e){
        var input=e.target.value
        if (num===0){
            setNum(input)
        }else{
            setNum(num + input)
        }
    }

    function clear(){
        setNum(0)
    }

    function percentage(){
        setNum(num / 100)
    }

    function signHandler(){
        if(num>0){
            setNum(-num)
        }else{
            setNum(Math.abs(num))
        }
    }
    
    function operatorHandler(e){
        var operatorInput=e.target.value
        setOperator(operatorInput)
        setOldNum(num)
        setNum(0)
    }

    function calculate(){
        if(operator==="/"){
            setNum(oldNum/num)
        } else if (operator==="*"){
            setNum(oldNum*num)
        } else if (operator==="+"){
            setNum(parseFloat(oldNum)+parseFloat(num))
        } else if (operator==="-"){
            setNum(oldNum-num)
        }
    }

    return (
        <Container maxWidth="xs">
            <div className='wrapper'>
                <h1 className='result'>{num}</h1>
                <button onClick={clear}>AC</button>
                <button onClick={signHandler}>+/-</button>
                <button onClick={percentage}>%</button>
                <button className='blue' onClick={operatorHandler} value="/">/</button>
                <button className='gray' onClick={inputNum} value={7}>7</button>
                <button className='gray' onClick={inputNum} value={8}>8</button>
                <button className='gray' onClick={inputNum} value={9}>9</button>
                <button className='blue' onClick={operatorHandler} value="*">x</button>
                <button className='gray' onClick={inputNum} value={4}>4</button>
                <button className='gray' onClick={inputNum} value={5}>5</button>
                <button className='gray' onClick={inputNum} value={6}>6</button>
                <button className='blue' onClick={operatorHandler} value="-">-</button>
                <button className='gray' onClick={inputNum} value={1}>1</button>
                <button className='gray' onClick={inputNum} value={2}>2</button>
                <button className='gray' onClick={inputNum} value={3}>3</button>
                <button className='blue' onClick={operatorHandler} value="+">+</button>
                <button className='zero' onClick={inputNum} value={0}>0</button>
                <button onClick={inputNum} value={"."}>,</button>
                <button className='blue' onClick={calculate}>=</button>
            </div>
        </Container>
    )
}