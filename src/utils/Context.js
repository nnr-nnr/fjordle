import React, { useContext, useState } from "react";

const GuessIndexContext = React.createContext();
const GuessIndexUpdateContext = React.createContext();
const CurrGuessContext = React.createContext();
const CurrGuessUpdateContext = React.createContext();
const AnswerContext = React.createContext();
const AllGuessContext = React.createContext();
const AllGuessUpdateContext = React.createContext();

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
  const [guessIndex, setGuessIndex] = useState(0);
  const [currGuess, setCurrGuess] = useState("");
  const [allGuess, setAllGuess] = useState({ green: [], yellow: [], grey: [] });
  const [ans, setAns] = useState("NIVAS");

  function updateGuessIndex(i) {
    setGuessIndex(i);
  }
  function updateCurrGuess(i) {
    setCurrGuess(i);
  }

  function updateAllGuess(letter, index) {
    console.log(letter);

    if (ans.indexOf(letter) === index) {
      console.log("green letter", letter);
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

  return (
    <AnswerContext.Provider value={ans}>
      <GuessIndexContext.Provider value={guessIndex}>
        <GuessIndexUpdateContext.Provider value={updateGuessIndex}>
          <CurrGuessContext.Provider value={currGuess}>
            <CurrGuessUpdateContext.Provider value={updateCurrGuess}>
              <AllGuessContext.Provider value={allGuess}>
                <AllGuessUpdateContext.Provider value={updateAllGuess}>
                  {children}
                </AllGuessUpdateContext.Provider>
              </AllGuessContext.Provider>
            </CurrGuessUpdateContext.Provider>
          </CurrGuessContext.Provider>
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
