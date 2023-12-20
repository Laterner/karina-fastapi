import type { FC } from 'react'
import { observer } from 'mobx-react-lite'
import { ObtainingMethodContainer } from './ObtainingMethod.styled'
import ObtainingMethodCheckbox from './components/ObtainingMethodCheckbox'
import { Form, Input, InputNumber, Select, Space } from 'antd'
import {
  EMethodCheckbox,
  EObtainingMethodFieldName,
  selectCityOptions,
  selfDeliveryOptions,
} from './types'
import { useOrderStore } from '../../store/OrderStore'

const ObtainingMethod: FC = () => {
  const orderStore = useOrderStore()

  return (
    <ObtainingMethodContainer>
      <h1>Способ получения</h1>

      <ObtainingMethodCheckbox />

      {orderStore.state.obtainingMethod.method === EMethodCheckbox.COURIER ? (
        <>
          <Form.Item
            rules={[{ required: true, message: 'Выберите город' }]}
            className={EObtainingMethodFieldName.CITY}
            name={EObtainingMethodFieldName.CITY}
            label="Город:"
          >
            <Select
              showSearch
              options={selectCityOptions}
              onChange={orderStore.setCity}
              optionFilterProp="label"
            />
          </Form.Item>
          <Form.Item
            className={EObtainingMethodFieldName.ADDRESS}
            name={EObtainingMethodFieldName.ADDRESS}
            label="Адрес:"
          >
            <Space style={{ width: '100%' }}>
              <Form.Item
                rules={[{ required: true, message: 'Введите улицу' }]}
                name={EObtainingMethodFieldName.STREET}
              >
                <Input placeholder="Улица" style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item
                rules={[{ required: true, message: 'Введите номер дома' }]}
                name={EObtainingMethodFieldName.HOUSE_NUMBER}
              >
                <InputNumber controls={false} placeholder="Дом" style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item
                rules={[{ required: true, message: 'Введите номер квартиры' }]}
                name={EObtainingMethodFieldName.APARTMENT_NUMBER}
              >
                <InputNumber controls={false} placeholder="Квартира" style={{ width: '100%' }} />
              </Form.Item>
            </Space>
          </Form.Item>
          <Form.Item
            className={EObtainingMethodFieldName.COMMENT}
            name={EObtainingMethodFieldName.COMMENT}
            label="Комментарий к заказу:"
          >
            <Input onChange={value => orderStore.setComment(value.target.value)} />
          </Form.Item>
        </>
      ) : (
        <Form.Item
          name={EObtainingMethodFieldName.SELF_DELIVERY_ADDRESS}
          label="Адрес магазина:"
          rules={[{ required: true, message: 'Выберите магазин' }]}
        >
          <Select
            style={{ width: '100%' }}
            options={selfDeliveryOptions}
            onChange={orderStore.setSelfDeliveryAddress}
            optionFilterProp="label"
          />
        </Form.Item>
      )}
    </ObtainingMethodContainer>
  )
}

export default observer(ObtainingMethod)
