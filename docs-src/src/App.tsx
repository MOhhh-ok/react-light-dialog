import { SimpleDialogProvider } from 'react-simple-dialog'
import { Page } from './Page'

export default function App() {
  return <SimpleDialogProvider>
    <Page />
  </SimpleDialogProvider>
}

