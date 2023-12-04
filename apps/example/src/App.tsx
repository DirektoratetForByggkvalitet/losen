import schema from './schema'
import { Wizard } from 'losen'
import { Provider } from 'react-redux'
import store, { persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Wizard wizard={schema} />
      </PersistGate>
    </Provider>
  )
}

export default App
