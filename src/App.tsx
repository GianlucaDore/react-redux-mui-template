import { ThemeProvider, CssBaseline, Button } from '@mui/material'
import { theme } from './theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Button color="primary">Azione</Button>
      <Button color="secondary">Secondaria</Button>
    </ThemeProvider>
  )
}