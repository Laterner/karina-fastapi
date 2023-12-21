import { types } from 'mobx-state-tree'
import { EMethodCheckbox } from '../../components/ObtainingMethod/types'

export const OrderState = types.model('OrderState', {
  contactDetails: types.optional(
    types.model({
      phone: types.optional(types.string, ''),
      name: types.optional(types.string, ''),
      surname: types.optional(types.string, ''),
      email: types.optional(types.string, ''),
    }),
    {},
  ),
  obtainingMethod: types.optional(
    types.model({
      method: types.maybe(
        types.optional(
          types.enumeration<EMethodCheckbox>('MethodCheckboxType', Object.values(EMethodCheckbox)),
          EMethodCheckbox.COURIER,
        ),
      ),
      city: types.maybe(types.string),
      address: types.optional(
        types.model({
          street: types.optional(types.string, ''),
          houseNumber: types.maybe(types.number),
          apartmentNumber: types.maybe(types.number),
        }),
        {},
      ),
      comment: types.maybe(types.string),
      selfDeliveryAddress: types.maybe(types.string),
    }),
    {},
  ),
})
