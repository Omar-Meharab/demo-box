import './App.css';

function App() {
  return (
    <div className="box">
      <div className="bg-blue">
        <h6 className="small-header">COURSE</h6>
        <h1 className="jsf">JavaScript <br /> Fundamentals</h1>
        <h6 className="small-header">view all chapters{">"}</h6>
      </div>
      <div className="bg-white">
        <div className="progress-line">
          <h6 className="small-header">CHAPTER 4</h6>
          <div class="progress">
            <div class="progress-bar" role="progressbar" style={{width: "67%"}} aria-valuenow="67" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <br />
          <h6>6/9 challenges</h6>
        </div>
        <h1 className="cnc">Callbacks and Closures</h1>
        <div className="button-box">
          <button className="button">Continue</button>
        </div>
      </div>
    </div>
  );
}

export default App;
