function Omikuji() {
  let fortune = ["大吉", "中吉", "小吉", "吉", "凶"];
  let random = Math.floor(Math.random() * fortune.length); //0.0~0.9 * 5 (0~4の範囲)
  let resultElement = document.getElementById("result");

  resultElement.innerHTML = fortune[random];

  if (fortune[random] == "大吉") {
    resultElement.style.color = "gold";
  } else if (fortune[random] == "中吉") {
    resultElement.style.color = "red";
  } else if (fortune[random] == "小吉") {
    resultElement.style.color = "green";
  } else if (fortune[random] == "吉") {
    resultElement.style.color = "orange";
  } else if (fortune[random] == "凶") {
    resultElement.style.color = "black";
  }
}
