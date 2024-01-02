import React, { useState } from "react";
import "../../styles/QuizAboutMe.css"; // Ensure this path is correct for your project

function QuizAboutMe() {
  const [userChoice, setUserChoice] = useState("");

  const handleQuiz = () => {
    const choice = prompt(
      "What is your choice: `historian`, `developer` or `entrepreneurship`?"
    );
    if (choice) {
      // Checks if the user didn't press 'Cancel'
      const formattedChoice = choice.toLowerCase(); // Convert user input to lowercase

      setUserChoice(formattedChoice);
      if (formattedChoice === "historian") {
        alert("You are a winner 🎉");
      } else if (
        formattedChoice === "developer" ||
        formattedChoice === "entrepreneurship"
      ) {
        alert("Game over, please try again!");
      } else {
        alert("Wrong value⚠️. Try again!");
      }
    } else {
      alert("No input provided!");
    }
  };

  return (
    <section className="interactive-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 interactive-col">
            <h2 className="new-section-title">Quiz About Me</h2>

            <button
              type="button"
              className="btn btn-outline-success btn-lg btn-block"
              onClick={handleQuiz}
            >
              Do you know the name of my first degree? 🔬
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuizAboutMe;
