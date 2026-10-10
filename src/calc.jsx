import {useState} from 'react'
function App() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [res,setRes]=useState(0)

  const buttonStyle = {
    width: "90px",
    height: "70px",
    backgroundColor: "#151515",
    color: "#00ffff",
    border: "2px solid #00ffff",
    borderRadius: "10px",
    fontSize: "25px",
    cursor: "pointer",
  };
function result(){

}

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#005f5f",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "400px",
          textAlign: "center",
        }}
      >
        {/* Title */}
        <h1
          style={{
            color: "#00ffff",
            fontSize: "32px",
            marginBottom: "45px",
          }}
        >
          React Calculator
        </h1>

        {/* Display */}
        <div
          style={{
            width: "100%",
            height: "110px",
            backgroundColor: "#151515",
            border: "4px solid #00ffff",
            borderRadius: "12px",
            color: "#00ffff",
            fontSize: "45px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxSizing: "border-box",
            marginBottom: "30px",
          }}
        >
          {res}
        </div>

        {/* Number Buttons */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "12px",
            marginBottom: "18px",
          }}
        >
          {numbers.map((num) => (
            <button key={num} style={buttonStyle}>
              {num}
            </button>
          ))}

          <button style={buttonStyle}>C</button>
          <button style={buttonStyle}>0</button>
          <button style={buttonStyle}>RES</button>
        </div>

        {/* Operators */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "15px",
          }}
        >
          <button style={buttonStyle}>+</button>
          <button style={buttonStyle}>-</button>
          <button style={buttonStyle}>*</button>
          <button style={buttonStyle}>/</button>
        </div>
      </div>
    </div>
  );
}

export default App;