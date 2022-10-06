import React, { useContext, useState, useEffect } from "react";

const GuessIndexContext = React.createContext();
const GuessIndexUpdateContext = React.createContext();
const CurrGuessContext = React.createContext();
const CurrGuessUpdateContext = React.createContext();
const AnswerContext = React.createContext();
const AllGuessContext = React.createContext();
const AllGuessUpdateContext = React.createContext();

const RowIndexContext = React.createContext();
const RowIndexUpdateContext = React.createContext();

export function useRowIndex() {
  return useContext(RowIndexContext);
}

export function useRowIndexUpdate() {
  return useContext(RowIndexUpdateContext);
}

export function useGuessIndex() {
  return useContext(GuessIndexContext);
}

export function useCurrGuess() {
  return useContext(CurrGuessContext);
}

export function useAnswer() {
  return useContext(AnswerContext);
}

export function useAllGuess() {
  return useContext(AllGuessContext);
}

export function useAllGuessUpdate() {
  return useContext(AllGuessUpdateContext);
}

export function useCurrGuessUpdate() {
  return useContext(CurrGuessUpdateContext);
}

export function useGuessIndexUpdate() {
  return useContext(GuessIndexUpdateContext);
}

export function GuessProvider({ children }) {
  const [guessIndex, setGuessIndex] = useState(0); // MOVE TO GRID PROPERTY
  const [rowIndex, setRowIndex] = useState(0); //MOVE TO GRID PROPERTY
  const [currGuess, setCurrGuess] = useState(""); // MOVE TO GRID PROPERTY
  const [allGuess, setAllGuess] = useState({ green: [], yellow: [], grey: [] }); //check where this is used
  const [ans, setAns] = useState("+192-1732");

  function updateGuessIndex(i) {
    setGuessIndex(i);
  }
  function updateCurrGuess(i) {
    setCurrGuess(i);
    console.log("curr guess", i);
  }
  function updateRowIndex(i) {
    setRowIndex(i);
  }

  // function updateAns() {
  //   useEffect(() => {
  //     fetch("http://localhost:3000/users")
  //       .then((response) => response.json())
  //       .then((res) => {
  //         if (res && res.data) {
  //           console.log(res.data);
  //           setAns(res.data[0]);
  //         }
  //       });
  //   });
  // }

  function updateAllGuess(letter, index, decimalIndex) {
    // console.log(letter);

    // console.log("\n\nans", ans);
    // console.log("letter", letter);
    // console.log("ans.indexOf(letter)", ans.indexOf(letter));
    // console.log("ans[decimalIndex]", ans[decimalIndex]);
    // console.log("index of letter in guess", index);

    if (ans[index] === letter) {
      console.log("green");
      setAllGuess((prevState) => ({
        green:
          prevState.green.indexOf(letter) === -1
            ? prevState.green.concat(letter)
            : prevState.green,
        yellow: prevState.yellow,
        grey: prevState.grey,
      }));
    } else if (ans.includes(letter)) {
      console.log("yellow");
      setAllGuess((prevState) => ({
        green: prevState.green,
        yellow:
          prevState.yellow.indexOf(letter) === -1
            ? prevState.yellow.concat(letter)
            : prevState.yellow,
        grey: prevState.grey,
      }));
    } else {
      console.log("grey");
      setAllGuess((prevState) => ({
        green: prevState.green,
        yellow: prevState.yellow,
        grey:
          prevState.grey.indexOf(letter) === -1
            ? prevState.grey.concat(letter)
            : prevState.grey,
      }));
    }

    // console.log("allGuess in context: ", allGuess);
  }

  // updateAns();

  return (
    <AnswerContext.Provider value={ans}>
      <GuessIndexContext.Provider value={guessIndex}>
        <GuessIndexUpdateContext.Provider value={updateGuessIndex}>
          <RowIndexContext.Provider value={rowIndex}>
            <RowIndexUpdateContext.Provider value={updateRowIndex}>
              <CurrGuessContext.Provider value={currGuess}>
                <CurrGuessUpdateContext.Provider value={updateCurrGuess}>
                  <AllGuessContext.Provider value={allGuess}>
                    <AllGuessUpdateContext.Provider value={updateAllGuess}>
                      {children}
                    </AllGuessUpdateContext.Provider>
                  </AllGuessContext.Provider>
                </CurrGuessUpdateContext.Provider>
              </CurrGuessContext.Provider>
            </RowIndexUpdateContext.Provider>
          </RowIndexContext.Provider>
        </GuessIndexUpdateContext.Provider>
      </GuessIndexContext.Provider>
    </AnswerContext.Provider>
  );
}

// function updateAllGuess(word) {
//   [...word].forEach((letter) => {
//     if (!ans.includes(letter) && allGuess.grey.concat(letter) === -1) {
//       this.setAllGuess((prevState) => ({
//         green: [...prevState.green],
//         yellow: [...prevState.yellow],
//         grey: allGuess.grey.concat(letter),
//       }));
//     } else if (
//       ans.indexOf(letter) === word.indexOf(letter) &&
//       allGuess.green.indexOf(letter) === -1
//     ) {
//       this.setAllGuess((prevState) => ({
//         green: allGuess.green.concat(letter),
//         yellow: [...prevState.yellow],
//         grey: [...prevState.grey],
//       }));
//       // allGuess.green.concat(letter);
//     } else if (!allGuess.green.includes(letter) && ans.includes(letter)) {
//       this.setAllGuess((prevState) => ({
//         green: [...prevState.yellow],
//         yellow: allGuess.yellow.concat(letter),
//         grey: [...prevState.grey],
//       }));
//       // allGuess.yellow.concat(letter);
//     }
//   });
//   console.log("allGuess in context: ", allGuess);
// }
