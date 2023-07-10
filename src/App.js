import Feed from './Feed';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
     <Header />

     <div className='app__body'>
      <Sidebar />
      <Feed />
        {/* Feed */}
        {/* Widgets */}

     </div>   
    </div>
  );
}

export default App;
