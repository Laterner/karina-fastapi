import { types } from 'mobx-state-tree'

enum ERequeststatus {
  INITIAL = 'initial',
  LOADING = 'loading',
  SUCCESS = 'success',
  FAILED = 'failed',
}

export const RequestState = types
  .model({
    status: types.optional(
      types.enumeration<ERequeststatus>('RequestStatus', Object.values(ERequeststatus)),
      ERequeststatus.INITIAL,
    ),
  })
  .views(requestState => ({
    get state() {
      return {
        isIdle: requestState.status === ERequeststatus.INITIAL,
        isLoading: requestState.status === ERequeststatus.LOADING,
        isSuccess: requestState.status === ERequeststatus.SUCCESS,
        isFailed: requestState.status === ERequeststatus.FAILED,
      }
    },
  }))
  .actions(requestState => ({
    reset: () => {
      requestState.status = ERequeststatus.INITIAL
    },
    loading: () => {
      requestState.status = ERequeststatus.LOADING
    },
    finished: () => {
      requestState.status = ERequeststatus.SUCCESS
    },
    failed: () => {
      requestState.status = ERequeststatus.FAILED
    },
  }))
