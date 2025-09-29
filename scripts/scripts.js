// おみくじ
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

// ボタンでworksを非表示
document.querySelectorAll('.toggle-works-btn').forEach(button => {
  button.addEventListener('click', function() {
    const targetNum = this.dataset.target
    const targetWork = document.getElementById(`work_${targetNum}`);

    // コンテンツの現在の表示状態を確認
    if (targetWork.style.display == 'none') {
      targetWork.style.display = '';
      this.textContent = `work${targetNum}を非表示`;
    } else {
      targetWork.style.display = 'none';
      this.textContent = `work${targetNum}を表示`;
    }
  });

  button.textContent = `work${button.dataset.target}を非表示`
})

// ボタンで作成箇所の非表示
const toggleHighlightsBtn = document.querySelector('.toggle-highlights-btn');
const highlights = document.querySelectorAll('[class^="highlight-"');

// 初期状態の設定
let highlightsVisible = true;

toggleHighlightsBtn.addEventListener('click', function() {
  if (highlightsVisible) {
    highlights.forEach(element => {
      element.style.display = 'none';
    });
    this.textContent =' 担当箇所を表示';
    highlightsVisible = false;
  } else {
    highlights.forEach(element => {
      element.style.display = 'block';
    });
    this.textContent = '担当箇所を非表示';
    highlightsVisible = true;
  }
});