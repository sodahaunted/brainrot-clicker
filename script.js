let number = document.querySelector('.value')
let parsedNumber = parseFloat(number.innerHTML)

function incrementValue() {
    parsedNumber += 1
    number.innerHTML = parsedNumber
}

const box = document.getElementById("sayori");

sayori.addEventListener("click", function() {
  box.animate(
    [
      { transform: "translateY(0px)" },
      { transform: "translateY(-10px)" }
    ],
    {
      duration: 200,
      iterations: 2,
      direction: "alternate",
      easing: "ease-in-out"
    })
  });

  let clickerCost = document.querySelector('.clicker-cost')
  let parsedClickerCost = parseFloat(clickerCost.innerHTML)

  function buyClick() {
    if(parsedNumber >= parsedClickerCost) {
      parsedNumber -= parsedClickerCost
      number.innerHTML = parsedNumber
    }
  }