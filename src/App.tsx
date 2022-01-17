import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import Theme from "./styles/theme";
import Routes from "./routes";
import { AuthProvider } from "./context/auth";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider theme={Theme}>
          <GlobalStyles />
          <Routes />
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
