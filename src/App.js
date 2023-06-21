import "./App.css";
import MainContainer from "./components/MainContainer";
import { useState } from "react";
import dustin from "./assets/dustin.png";
import daniel from "./assets/daniel.jpeg";
import max from "./assets/max.jpg";
import justin from "./assets/justin.png";

function App() {
  const studentData = [
    { name: "dustin", img: dustin, team:"default"  },
    { name: "daniel", img: daniel, team:"default"  },
    { name: "max", img: max, team:"default" },
    { name: "justin", img: justin, team:"default"  },
  ];
  const [students, setStudents] = useState(studentData);
  const [bcArray, setBcArray] = useState([]);
  const [binaryArray, setBinaryArray] = useState([]);

  const removeFromStudents = (studentToRemove, targetArray) => {
    if (students.includes(studentToRemove) === true) {
      setStudents((prevStudents) =>
        prevStudents.filter((student) => student.name !== studentToRemove.name)
      );
    }

    if (bcArray.includes(studentToRemove) === true) {
      setBcArray((prevStudents) =>
        prevStudents.filter((student) => student.name !== studentToRemove.name)
      );
    }

    if (binaryArray.includes(studentToRemove) === true) {
      setBinaryArray((prevStudents) =>
        prevStudents.filter((student) => student.name !== studentToRemove.name)
      );
    }

    if (targetArray === "bcArray") {
      setBcArray((prevBcArray) => [...prevBcArray, {...studentToRemove, team: "BC Crew"}]);
    } else if (targetArray === "binaryArray") {
      setBinaryArray((prevBinaryArray) => [
        ...prevBinaryArray,
        {...studentToRemove, team: "Binary Bots"}
      ]);
    }
  };

  return (
    <div className="topcontainer">
      <h1>Student Team React Challenge</h1>
      <button
        className="button-24"
        onClick={() => {
           setStudents(studentData);
          setBcArray([]);
           setBinaryArray([]);
        }}
      >
        Reset
      </button>
      <div className="App">
        <MainContainer
          students={students}
          bcArray={bcArray}
          binaryArray={binaryArray}
          removeFromStudents={removeFromStudents}
        />
      </div>
    </div>
  );
}

export default App;
