import * as React from 'react';
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box
} from '@mui/material';
import { Routes, Route, Link as RouterLink } from 'react-router-dom';

export default function App() {
  // Crea il tema MUI basato sul mode scelto
  const theme = React.useMemo(() => createTheme({
    palette: {

      primary: {  },
      background: {
      }
    },
    typography: {
      // opzionale: attiva font size responsive
      // (per MUI v5/v6: import { responsiveFontSizes } e wrappalo;
      // su MUI 7 puoi lasciarlo così o regolarlo a parte)
      fontFamily: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'].join(','),
    },
    components: {
      // Esempio override componenti
      MuiButton: {
        defaultProps: { variant: 'contained' }
      }
    }
  }), []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            React + Redux + MUI
          </Typography>

          <Button color="inherit" component={RouterLink} to="/">
            Home
          </Button>
        </Toolbar>
      </AppBar>

      <Box component="main" sx={{ py: 3 }}>
        <Container maxWidth="lg">
          <Routes>
            <Route path="/" element={null} />
            {/* Aggiungi qui altre route:
                <Route path="/about" element={<About />} /> */}
          </Routes>
        </Container>
      </Box>
    </ThemeProvider>
  )
}