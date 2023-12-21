import type { FC } from 'react'
import { Radio } from 'antd'
import { observer } from 'mobx-react-lite'
import { EMethodCheckbox } from '../types'
import { useOrderStore } from '../../../store/OrderStore'

const ObtainingMethodCheckbox: FC = () => {
  const orderStore = useOrderStore()

  return (
    <div>
      <Radio.Group
        onChange={e => orderStore.setObtainingMethod(e.target.value)}
        value={orderStore.state.obtainingMethod.method}
      >
        <Radio checked value={EMethodCheckbox.COURIER}>
          Доставка курьером
        </Radio>
        <Radio value={EMethodCheckbox.SELF_DELIVERY}>Самовывоз</Radio>
      </Radio.Group>
    </div>
  )
}

export default observer(ObtainingMethodCheckbox)
