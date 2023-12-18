import { Input } from 'antd'
import type { ChangeEvent, FC } from 'react'
import { observer } from 'mobx-react-lite'

interface PhoneInputProps {
  value: string
  onChange: (value: string) => void
}

const PhoneInput: FC<PhoneInputProps> = ({ value, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const phoneRegex = /^\+?\d{0,12}$/
    const inputValue = e.target.value

    if (phoneRegex.test(inputValue)) {
      onChange(inputValue)
    }
  }

  return (
    <Input value={value} onChange={handleChange} placeholder="+7 (___) ___-__-__" maxLength={16} />
  )
}

export default observer(PhoneInput)
