import React, { useState, useEffect } from "react";
import "../style/Grid.css";

import {
  useAnswer,
  useAllGuessUpdate,
  useHasSolvedContext,
  useHasSolvedUpdateContext,
} from "../utils/Context";

import {
  useGuessIndex,
  useGuessIndexUpdate,
  useRowIndex,
  useRowIndexUpdate,
} from "../components/Grid";

import { useCurrGuess, useCurrGuessUpdate } from "../components/Row";

export default function Cell({
  id,
  decimalIndex,
  invalidGuess,
  toggleInvalidGuess,
  rowNum,
  addAttempt,
  // currGuess, // if props drilled instead of context
  // updateCurrGuess,
}) {
  const hasSolved = useHasSolvedContext();
  const setHasSolved = useHasSolvedUpdateContext();
  const currGuess = useCurrGuess();
  const updateCurrGuess = useCurrGuessUpdate();
  const updateAllGuess = useAllGuessUpdate();
  const guessIndex = useGuessIndex();
  const updateGuessIndex = useGuessIndexUpdate();
  const ansData = useAnswer();
  const ans = ansData.strCoords;
  const currRowIndex = useRowIndex();
  const updatecurrRowIndex = useRowIndexUpdate();

  const isSignedCell = () => {
    return (
      (id % 12 === 0 || id % 12 === 6) &&
      rowNum === currRowIndex &&
      (value === "" || value === "+/-")
    );
  };
  const isComma = () => {
    return id % 12 === 5;
  };
  const isDecimalCell = () => {
    return id % 12 === 3 || id % 12 === 10;
  };
  const skipNextCell = () => {
    return id % 12 === 4 || id % 12 === 2 || id % 12 === 9;
  };
  const skipPrevCell = () => {
    return id % 12 === 4 || id % 12 === 6 || id % 12 === 11;
  };
  const [value, setValue] = useState(
    isDecimalCell() ? "." : isComma() ? "," : isSignedCell() ? "+/-" : ""
  );

  const [tempClasses, setTempClasses] = useState("");

  useEffect(() => {
    if (rowNum === currRowIndex - 1) {
      setTempClasses(checkGuess());
    }
  }, [currRowIndex]);

  const isValidGuess = () => {
    const latGuess = parseFloat(currGuess.substring(0, 4)) / 10.0;
    const lngGuess = parseFloat(currGuess.substring(4, 12)) / 10.0;
    return (
      -90.0 <= latGuess &&
      latGuess <= 90.0 &&
      -180.0 <= lngGuess &&
      lngGuess <= 180.0
    );
  };

  const cellColor = () => {
    const ansArr = ans.split("");
    // console.log(ansArr);
    // const tempArr = [];
    // currGuess.split("").forEach((v, index) => {
    //   if (ansArr[index] === v) {
    //     ansArr[index] = "_";
    //     tempArr.push("green");
    //   } else if (ansArr.indexOf(v) < 0) {
    //     tempArr.push("grey");
    //   } else if (currGuess[ansArr.indexOf(v)] != v) {
    //     // in ans at wrong spot AND available
    //     ansArr[ansArr.indexOf(v)] = "_";
    //     tempArr.push("yellow");
    //   } else {
    //     tempArr.push("grey");
    //   }
    // });

    const tempArr = Array(9).fill(null);
    currGuess.split("").forEach((v, index) => {
      if (ansArr[index] === v) {
        ansArr[index] = "_";
        tempArr[index] = "green";
      } else if (ansArr.indexOf(v) < 0) {
        tempArr[index] = "grey";
      }
    });
    currGuess.split("").forEach((v, index) => {
      if (!tempArr[index]) {
        if (ansArr.indexOf(v) < 0) {
          tempArr[index] = "grey";
        } else {
          ansArr[ansArr.indexOf(v)] = "_";
          tempArr[index] = "yellow";
        }
      }
    });
    return tempArr[decimalIndex];
  };

  const checkGuess = () => {
    const classes = "Ind" + (id % 12).toString();
    if (!isDecimalCell() && !isComma()) {
      if (value === "") {
        return classes;
      } else {
        return classes + " " + cellColor();
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;
      // console.log("\n\nKEYDOWN", key);

      // check backspace
      if (key === "Backspace") {
        if (id % 12 === 0) {
          // console.log("Backspace1");
          setValue("+/-");
          updateCurrGuess(currGuess.substring(0, currGuess.length - 1));
        } else if (value === "" || value === "+/") {
          // console.log("BackspaceR");
          updateCurrGuess(currGuess.substring(0, currGuess.length - 1) + "R");
          skipPrevCell()
            ? updateGuessIndex(guessIndex - 2)
            : updateGuessIndex(guessIndex - 1);
        } else {
          // console.log("Backspace3");
          setValue(isSignedCell() ? "+/-" : "");
          updateCurrGuess(currGuess.substring(0, currGuess.length - 1));
        }
      } else if (isSignedCell()) {
        if (key.match(/\+|-/) && key.length === 1) {
          // console.log("+/-");
          setValue(key);
          updateCurrGuess(currGuess + key);
          skipNextCell()
            ? updateGuessIndex(guessIndex + 2)
            : updateGuessIndex(guessIndex + 1);
        }
      } else if (key.match(/[0-9]/) && key.length === 1) {
        // check last in row
        if (id % 12 === 11 && value === "") {
          // console.log("0-9 ( last)");
          setValue(key);
          updateCurrGuess(currGuess + key);
        } else if (id % 12 < 11) {
          // console.log("0-9");
          setValue(key);
          updateCurrGuess(currGuess + key);
          skipNextCell()
            ? updateGuessIndex(guessIndex + 2)
            : updateGuessIndex(guessIndex + 1);
        }
      } else if (key === "Enter" && id % 12 === 11 && value !== "") {
        if (isValidGuess()) {
          // console.log("Enter (valid)");
          updatecurrRowIndex(currRowIndex + 1);
          updateGuessIndex(guessIndex + 1);
          [...currGuess].forEach((letter, index) => {
            updateAllGuess(letter, index, decimalIndex);
          });
          addAttempt(currGuess);
          if (currGuess === ans) {
            // console.log("solved");
            setHasSolved(1);
          } else {
            if (id >= 59) {
              setHasSolved(2);
            }
            // console.log("not solved");
          }
          // updateCurrGuess("");
        } else {
          // console.log("INVALID");
          invalidGuess ? toggleInvalidGuess(false) : toggleInvalidGuess(true);
        }
      }
      // console.log("id", id);
      // console.log("guessIndex", guessIndex);
      // console.log("currGuess", currGuess);
      // console.log("ans", ans);
      // console.log("currRowIndex", currRowIndex);
      // console.log("allGuesses", allGuesses);
    };

    if (guessIndex === id && hasSolved < 1) {
      if (currGuess.indexOf("R") > -1) {
        updateCurrGuess(currGuess.substring(0, currGuess.length - 1));

        setValue("");
      }
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  });

  return (
    <div
      className={`cell ${
        guessIndex === id && rowNum === currRowIndex ? "curr" : ""
      } ${value !== "" && value !== "+/-" ? "guessed" : ""} ${tempClasses} ${
        isSignedCell() ? "signedCell" : ""
      } ${isDecimalCell() ? "decimalCell" : ""} ${
        isComma() ? "commaCell" : ""
      } `}
    >
      <span>{isSignedCell() ? "+/-" : value}</span>
    </div>
  );
}
