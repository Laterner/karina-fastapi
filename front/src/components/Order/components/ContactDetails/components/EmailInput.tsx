import { Input } from 'antd'
import type { FC } from 'react'
import { useState } from 'react'
import { observer } from 'mobx-react-lite'

const EmailInput: FC = () => {
  const [email, setEmail] = useState('')
  const [isValid, setIsValid] = useState(true)

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setEmail(value)

    // Проверка на валидность email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    setIsValid(emailRegex.test(value))
  }

  return (
    <div>
      <Input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Введите адрес электронной почты"
      />
      {!isValid && <span style={{ color: 'red' }}>Некорректный адрес электронной почты</span>}
    </div>
  )
}

export default observer(EmailInput)
