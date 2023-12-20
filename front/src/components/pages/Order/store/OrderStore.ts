import type { Instance } from 'mobx-state-tree'
import { flow, types } from 'mobx-state-tree'

import { OrderState } from './models'
import { createContext, useContext } from 'react'
import makeInspectable from 'mobx-devtools-mst'
import type { EMethodCheckbox, IOrderModel } from '../components/ObtainingMethod/types'
import { RequestState } from '../../../../stores/models'
import { fetchData } from '../../../api/API'
import { cartId, createOrderUrl, deleteFromCartUrl } from '../../../../shared/constants'

export const OrderStore = types
  .model('OrderStore', {
    state: OrderState,
    request: types.model({
      submitting: types.optional(RequestState, {}),
    }),
  })
  .actions(store => ({
    setObtainingMethod: (method: EMethodCheckbox) => {
      store.state.obtainingMethod.method = method
    },
    setPhone: (phone: IOrderModel['phone']) => {
      store.state.contactDetails.phone = phone
    },
    setEmail: (email: IOrderModel['email']) => {
      store.state.contactDetails.email = email
    },
    setSelfDeliveryAddress: (selfDeliveryAddress: IOrderModel['selfDeliveryAddress']) => {
      store.state.obtainingMethod.selfDeliveryAddress = selfDeliveryAddress
    },
    setCity: (city: IOrderModel['city']) => {
      store.state.obtainingMethod.city = city
    },
    setComment: (comment: IOrderModel['comment']) => {
      store.state.obtainingMethod.comment = comment
    },
    submitForm: flow(function* () {
      store.request.submitting.loading()
      //TODO: дописать, когда будет готова ОМ для запроса на создание заказа
      const response = yield fetchData(`${createOrderUrl}`, 'POST')

      if (response) {
        store.request.submitting.finished()
      } else {
        store.request.submitting.failed()
      }
    }),
  }))

export const orderStore = OrderStore.create({
  state: {},
  request: {},
})

export const OrderStoreContext = createContext(orderStore)
export const useOrderStore = () => useContext(OrderStoreContext)
export type TOrderStore = Instance<typeof OrderStore>

makeInspectable(orderStore)
