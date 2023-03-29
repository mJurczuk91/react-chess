import './App.css';
import List from './components/list';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <List />
    </DndProvider>
  );
}

export default App;
