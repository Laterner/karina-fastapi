import type { FC } from 'react'
import { useState } from 'react'
import { ContactDetailsContainer } from './ContactDetails.styled'
import { Form, Input } from 'antd'
import { EContactDetailsInput } from './types'
import { EmailInput, PhoneInput } from './components'
import { observer } from 'mobx-react-lite'

const ContactDetails: FC = () => {
  const [phone, setPhone] = useState('')

  return (
    <ContactDetailsContainer>
      <h1>Контактные данные</h1>
      <Form>
        <Form.Item
          required={true}
          name={EContactDetailsInput.PHONE}
          label="Введите номер мобильного телефона:"
        >
          <PhoneInput value={phone} onChange={value => setPhone(value)} />
        </Form.Item>
        <Form.Item required={true} name={EContactDetailsInput.NAME} label="Имя:">
          <Input />
        </Form.Item>
        <Form.Item required={true} name={EContactDetailsInput.SURNAME} label="Фамилия:">
          <Input />
        </Form.Item>
        <Form.Item required={true} name={EContactDetailsInput.EMAIL} label="E-mail адрес:">
          <EmailInput />
        </Form.Item>
      </Form>
    </ContactDetailsContainer>
  )
}

export default observer(ContactDetails)
