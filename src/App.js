import logo from './logo.svg';
import './App.css';
import Cake from './redux/cake/cake.jsx';
import IceCream from './redux/iceCream/iceCream.jsx';
import User from './redux/user/user.jsx';

function App() {
  return (
    <div className='App'>
      <Cake />
      <IceCream />
      <User />
    </div>
  );
}

export default App;
