import Feed from './Feed';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Widgets from './Widget'
import Login from './Login';

function App() {
  const user = null;
  return (
    //BEM naming conversions
    <div className="app">

      {/* if not user, login else homepaga */}
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className='app__body'>
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}

    </div>
  );
}

export default App;
