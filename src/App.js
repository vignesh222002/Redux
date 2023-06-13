import logo from './logo.svg';
import './App.css';
import CakeContainer from './Components/CakeContainer';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import HookCakeContainer from './Components/HookCakeContainer';
import CakeIceCream from './Components/CakeIceCream';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer /> */}
        {/* <HookCakeContainer /> */}
        <CakeIceCream />
      </div>
    </Provider>
  );
}

export default App;
