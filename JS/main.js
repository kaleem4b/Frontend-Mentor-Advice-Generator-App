const produceAdvice = async function () {
  const dataObj = {
    id: "unknown",
    message: "unknown",
  };
  const adviceMessageDisplay =
    document.getElementsByClassName("advice-message")[0];

  const adviceNumDisplay = document.getElementsByClassName("advice-num")[0];

  const dataFetchingFunc = await fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      // console.log(data.slip);
      dataObj.id = data.slip.id;
      dataObj.message = data.slip.advice;

      console.log(dataObj);
    });

  adviceMessageDisplay.innerHTML = `"${dataObj.message}"`;
  adviceNumDisplay.innerHTML = dataObj.id;
};

produceAdvice();

const diceBox = document.getElementsByClassName("dice")[0];

diceBox.addEventListener("click", function () {
  produceAdvice();
});


