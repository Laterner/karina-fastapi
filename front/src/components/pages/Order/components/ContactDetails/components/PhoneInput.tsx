import { Form, Input } from 'antd'
import type { FC } from 'react'
import { useState } from 'react'
import { observer } from 'mobx-react-lite'
import { EContactDetailsInput } from '../types'
import { orderStore } from '../../../store/OrderStore'

const PhoneInput: FC = () => {
  const [isValid, setIsValid] = useState(true)

  const isValidPhone = (value: string) => {
    const phoneRegex = /^\+?\d{0,12}$/
    setIsValid(phoneRegex.test(value))
  }

  return (
    <Form.Item
      rules={[
        { required: true, message: 'Введите номер телефона' },
        {
          validator: (_: any, value: string) => {
            isValidPhone(value)

            if (!isValid && value.length > 0) {
              return Promise.reject('Некорректный номер телефона')
            }
            orderStore.setPhone(value)

            return Promise.resolve()
          },
        },
      ]}
      name={EContactDetailsInput.PHONE}
      label="Введите номер мобильного телефона:"
    >
      <Input maxLength={16} />
    </Form.Item>
  )
}

export default observer(PhoneInput)
