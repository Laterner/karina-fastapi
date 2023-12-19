import type { FC } from 'react'
import { useState } from 'react'
import type { RadioChangeEvent } from 'antd'
import { Radio } from 'antd'
import { observer } from 'mobx-react-lite'

const ObtainingMethodCheckbox: FC = () => {
  const [selectedValue, setSelectedValue] = useState('')

  const handleRadioChange = (e: RadioChangeEvent) => {
    setSelectedValue(e.target.value)
  }

  return (
    <div>
      <Radio.Group onChange={handleRadioChange} value={selectedValue}>
        <Radio value="option1">Доставка курьером</Radio>
        <Radio value="option2">Самовывоз</Radio>
      </Radio.Group>
    </div>
  )
}

export default observer(ObtainingMethodCheckbox)
