import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import Theme from "./styles/theme";
import Routes from "./routes";
import { AuthProvider } from "./context/auth";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <GlobalStyles />
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
