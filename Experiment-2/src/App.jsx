import { Provider } from 'react-redux';
import { store } from './store/index.js';
import { UserProvider } from './context/UserContext.jsx';
import Header from './components/Header.jsx';
import Counter from './components/Counter.jsx';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <UserProvider>
        <div className="app">
          <Header />
          <Counter />
        </div>
      </UserProvider>
    </Provider>
  );
}

export default App;
