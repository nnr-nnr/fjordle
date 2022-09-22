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
  const [allGuess, setAllGuess] = useState([]);

  function updateGuessIndex(i) {
    setGuessIndex(i);
  }
  function updateCurrGuess(i) {
    setCurrGuess(i);
  }
  function updateAllGuess(letter) {
    console.log(allGuess.concat(letter));
    setAllGuess(allGuess.concat(letter));
  }

  return (
    <AnswerContext.Provider value="NIVAS">
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
