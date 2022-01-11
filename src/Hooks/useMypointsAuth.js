import { store } from '../store/store'

const useMypointsAuth = () => {
  const s = store.getState()
  return s.store.authorized
}

export default useMypointsAuth
