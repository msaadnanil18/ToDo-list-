import React from 'react'
import { Button, Form, Input, Checkbox } from 'antd'
import { useTodo } from '../constext'
import { useForm } from 'antd/es/form/Form'
import {Todo} from "../types";

const TodoForm = () => {
  const [from] = useForm()
    const {addTodos} = useTodo()

    const add = (todo :any) => {
        if (!todo) return
        addTodos({id:Date.now(), todo:todo.todoInput, complete:false})
       
    }
  return (
    <div>
        <Form
        onFinish={add}
        form={from}
        >
         <Form.Item name='todoInput' >
         <Input/>    
        </Form.Item>
        {/* <Form.Item name="complited" valuePropName='checked' >
          <Checkbox value={false} >complated</Checkbox>
        </Form.Item> */}
          <Button type='primary' htmlType='submit' style={{backgroundColor:"green"}} >Submit</Button>
        </Form> 
    </div>
  )
}

export default TodoForm