let scoreNum1 = document.getElementById('socre-num1')
let scoreNum2 = document.getElementById('socre-num2')
let score1= 0;
let score2 =0;


function addScore(player, points){
      if (player === 1) {
        score1 += points;
        scoreNum1.textContent = score1;
    } else if (player === 2) {
        score2 += points;
        scoreNum2.textContent = score2;
    }
   
}
