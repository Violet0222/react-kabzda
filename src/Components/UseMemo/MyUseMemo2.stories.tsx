import React, { useCallback, useMemo, useState } from "react";
export default {
  title: "Use memo demo2",
};
const BooksSecret = (props: { books: Array<string>; addBook: () => void }) => {
  console.log("BooksSecret");
  return (
    <div>
      <button onClick={() => props.addBook()}>add User</button>
      {props.books.map((book, i) => (
        <div key={i}>{book}</div>
      ))}
    </div>
  );
};

const Books = React.memo(BooksSecret);
export const LikeUseCallBack = () => {
  console.log("LikeUseCallBack");
  const [counterState, setCounterState] = useState<number>(0);
  const [books, setBooks] = useState(["react", "js", "java", "c++"]);
  const onClickHandler = () => {
    setCounterState(counterState + 1);
  };

  const newArray = useMemo(() => {
    return books.filter((u) => u.toLowerCase().indexOf("a") > -1);
  }, [books]);

  const addBook = () => {
    const newUser = [...books, "Angular" + new Date().getTime()];
    setBooks(newUser);
  };
  const memorizedAddBook = useMemo(() => {
    return addBook;
  }, [books]);
  const memorizedAddBook2 = useCallback(() => {
    const newUser = [...books, "Angular" + new Date().getTime()];
    setBooks(newUser);
  }, [books]);
  return (
    <>
      <div>
        <button onClick={onClickHandler}>+</button>

        {counterState}
      </div>
      <div>
        <Books books={newArray} addBook={memorizedAddBook2} />
      </div>
    </>
  );
};
