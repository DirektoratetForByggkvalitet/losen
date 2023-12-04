import { Wizard } from 'losen'
import { Provider } from 'react-redux'
import schema from './schema'
import store from './store'

export default function App() {
  return (
    <Provider store={store}>
      <Wizard wizard={schema} />
    </Provider>
  )
}