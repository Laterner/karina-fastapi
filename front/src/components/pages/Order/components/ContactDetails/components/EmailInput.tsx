import { Form, Input } from 'antd'
import type { FC } from 'react'
import { useState } from 'react'
import { observer } from 'mobx-react-lite'
import { useOrderStore } from '../../../store/OrderStore'
import { EContactDetailsInput } from '../types'

const EmailInput: FC = () => {
  const orderStore = useOrderStore()
  const [isValid, setIsValid] = useState(true)

  const isValidEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    setIsValid(emailRegex.test(value))
  }

  return (
    <Form.Item
      rules={[
        { required: true, message: 'Введите Email' },
        {
          validator: (_: any, value: string) => {
            isValidEmail(value)
            if (!isValid && value.length > 0) {
              return Promise.reject('Некорректный адрес почты')
            }
            orderStore.setEmail(value)

            return Promise.resolve()
          },
        },
      ]}
      name={EContactDetailsInput.EMAIL}
      label="E-mail адрес:"
    >
      <Input type="email" />
    </Form.Item>
  )
}

export default observer(EmailInput)
