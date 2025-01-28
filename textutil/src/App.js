import './App.css';
import Navbar from './component/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Textform from './component/Textform';
function App() {
  return (
    <div className="App">
      <Navbar title='TextUtils'></Navbar>
      <Textform title='Textform'></Textform>
    </div>
  );
}

export default App;
