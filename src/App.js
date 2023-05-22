import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-logo" alt="logo" >Counter</h1>
        <p>
          0
        </p>
        <div className="btns-container">
            <div className="btn-dir">
            <div className="left-btn">
              <button href='#' className='add-count'>Add Count</button>
              </div>
              <div className="right-btn">
              <button href='#' className='del-count'>Lower Count</button>
              </div>
            </div>
        </div>
      </header>
    </div>
  );
}

export default App;
