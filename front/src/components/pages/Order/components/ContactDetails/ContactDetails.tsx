import type { FC } from 'react'
import { ContactDetailsContainer } from './ContactDetails.styled'
import { Form, Input } from 'antd'
import { EContactDetailsInput } from './types'
import { EmailInput, PhoneInput } from './components'
import { observer } from 'mobx-react-lite'

const ContactDetails: FC = () => {
  return (
    <ContactDetailsContainer>
      <h1>Контактные данные</h1>

      <PhoneInput />
      <Form.Item
        rules={[{ required: true, message: 'Введите имя' }]}
        name={EContactDetailsInput.NAME}
        label="Имя:"
      >
        <Input />
      </Form.Item>
      <Form.Item
        rules={[{ required: true, message: 'Введите фамилию' }]}
        name={EContactDetailsInput.SURNAME}
        label="Фамилия:"
      >
        <Input />
      </Form.Item>

      <EmailInput />
    </ContactDetailsContainer>
  )
}

export default observer(ContactDetails)
