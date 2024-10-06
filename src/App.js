import MainContent from './components/main-content';
import MainFooter from './components/main-footer';
import MainHeader from './components/main-header';
import './style/App.css';

function App() {
  return (
    <div className="App">
      <MainHeader />
      <MainContent />
      <MainFooter />
    </div>
  );
}

export default App;
