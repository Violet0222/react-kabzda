import React, { useMemo, useState } from "react";

export default {
  title: "My Use memo demo",
};

type studentsType = { studentName: string; age: number; country: string };
const newStudents = (props: { students: Array<studentsType> }) => {
  console.log("Users");
  return (
    <div>
      {props.students.map((u, i) => (
        <div key={i}>{u.studentName}</div>
      ))}
    </div>
  );
};

const Users = React.memo(newStudents);
export const Students = () => {
  console.log("Helper");
  const [counterState, setCounterState] = useState<number>(0);
  const [students, setStudents] = useState([
    { studentName: "Liza", age: 3, country: "Ukraine" },
    { studentName: "Smoky", age: 2, country: "USA" },
    { studentName: "Bublik", age: 1, country: "Spain" },
  ]);
  const onClickHandler = () => {
    setCounterState(counterState + 1);
  };

  const newArray = useMemo(() => {
    return students.filter((u) => u.country === "Spain");
  }, [students]);

  const addNewStudent = () => {
    const newStudent = { studentName: "Kiwi", age: 4, country: "Spain" };
    setStudents([...students, newStudent]);
  };
  return (
    <>
      <div>
        <button onClick={onClickHandler}>+</button>
        <button onClick={() => addNewStudent()}>add User</button>
        {counterState}
      </div>
      <div>
        <Users students={newArray} />
      </div>
    </>
  );
};
