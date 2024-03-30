import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import TodoApp from './components/TodoApp';

function App() {
  return (
    <Provider store={store}>
      <main className='h-screen p-4 w-screen'>
        <TodoApp />
      </main>
    </Provider>
  );
}

export default App;
