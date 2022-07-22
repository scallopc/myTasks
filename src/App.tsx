import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePeristedState from './utils/usePersistedState'

import GlobalStyle from './style/GlobalStyle';
import Main from './components/main';
import dark from './style/themes/dark';
import light from './style/themes/light';

const App = () => {

  const [theme, setTheme] = usePeristedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Main toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>
  );
}

export default App;