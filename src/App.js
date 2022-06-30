import './App.css';
import todosData from './data/todosData'

import Navbar from './components/Navbar';
import TodosList from './components/TodosList';




function App() {
  return (
    <div className="App">
     <Navbar />
     <TodosList todos={todosData} />
    </div>
  );
}

export default App;
