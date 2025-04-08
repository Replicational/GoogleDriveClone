import './App.css';
import Header from './components/header';
import Sidebar from './components/sidebar';

function App() {
  // authentication

  return (
    <div className="App">
      <Header />
      <Sidebar />
      {/* auth = true
          sidebar
          filesView
          sideIcons
      */}
    
      {/* no auth: log in */}
    </div>
  );
}

export default App;
