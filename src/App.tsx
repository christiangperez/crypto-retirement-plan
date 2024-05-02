import { AppRouter } from './frontend/router/AppRouter';
import { SnackbarProvider } from 'notistack';

const App = () => {
  return (
    <div className="app">
      <SnackbarProvider
        maxSnack={4}
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
      >
        <AppRouter />
      </SnackbarProvider>
    </div>
  );
};

export default App;
