import { ThemeProvider } from "./contexts/ThemeContext";
import { UserContext } from "./contexts/UserContext";

import UserProfile from "./components/user/UserProfile";
import Header from './components/theme/Header'
import Content from './components/theme/Content'
import Footer from './components/theme/Footer'

import './App.css'

export default function App() {
  const userName = "Alice";

  return (
    <UserContext.Provider value={userName}>
      <ThemeProvider>
        <div class="app">
          <UserProfile />

          <hr />

          <Header />
          <Content />
          <Footer />
        </div>
      </ThemeProvider>
    </UserContext.Provider>
  );
}
