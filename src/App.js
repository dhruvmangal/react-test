
import './App.css';
import Sidebar from './components/sidebar.tsx';
import Header from './components/Header.tsx';
import ListPanel from './components/ListPanel.tsx';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Sidebar></Sidebar>
      <ListPanel></ListPanel>
    </div>
  );
}

export default App;
