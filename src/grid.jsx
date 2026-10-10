import { useState } from "react";

function Grid() {
    const [clr, setClr] = useState("");

    const boxes = Array(8).fill(0);
    function select(box,i){
        if(i<=index){
            setClr("green")
        }
    }


    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 50px)",
                gap: "5px",
                border:"1px solid black",
                width:"200px"

            }}
        >
            {boxes.map((box, index) => (
                <div 
                    key={index}
                    style={{
                        width: "50px",
                        height: "50px",
                        border: "1px solid black",
                        margin:'10px',
                        backgroundColor:clr
                    }}
                >
                </div>
            ))}
        </div>
    );
}

export default Grid;