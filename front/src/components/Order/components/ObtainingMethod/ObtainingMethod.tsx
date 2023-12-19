import type { FC } from 'react'
import { observer } from 'mobx-react-lite'
import { ObtainingMethodContainer } from './ObtainingMethod.styled'
import ObtainingMethodCheckbox from './components/ObtainingMethodCheckbox'
import { Form, Input, InputNumber, Select } from 'antd'
import { EObtainingMethodInput } from './types'

const ObtainingMethod: FC = () => {
  return (
    <ObtainingMethodContainer>
      <h1>Способ получения</h1>

      <ObtainingMethodCheckbox />
      <Form layout="horizontal">
        <Form.Item
          required={true}
          className={EObtainingMethodInput.CITY}
          name={EObtainingMethodInput.CITY}
          label="Город:"
          wrapperCol={{ span: 16 }}
        >
          <Select showSearch />
        </Form.Item>
        <Form.Item
          required={true}
          className={EObtainingMethodInput.ADDRESS}
          name={EObtainingMethodInput.ADDRESS}
          label="Адрес:"
          wrapperCol={{ span: 16 }}
        >
          <Input required={true} placeholder="Улица" />
          <InputNumber controls={false} placeholder="Дом" />
          <InputNumber controls={false} placeholder="Квартира" />
        </Form.Item>
        <Form.Item
          required={true}
          className={EObtainingMethodInput.COMMENT}
          name={EObtainingMethodInput.COMMENT}
          label="Комментарий к заказу:"
          wrapperCol={{ span: 16 }}
        >
          <Input />
        </Form.Item>
      </Form>
    </ObtainingMethodContainer>
  )
}

export default observer(ObtainingMethod)
