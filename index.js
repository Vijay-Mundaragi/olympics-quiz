var readlineSync = require("readline-sync");
const chalk = require('chalk');

var question1 = {
  "question": "Who is the first Indian Athelete to win a Gold Medal at Olympics ?",
  "options": ["Milka Singh", "P.T Usha", "Neeraj Chopra"],
  "answer": 3
};

var question2 = {
  "question": "In which Sport does Aditi Ashok represent India ?",
  "options": ["Hockey", "Golf", "Badminton"],
  "answer": 2
};

var question3 = {
  "question": "Who among the following have won medals in consecutive Olympics ?",
  "options": ["P.V Sindhu", "Saikhom Mirabai Chanu", "Mary Kom"],
  "answer": 1
};

var question4 = {
  "question": "In which of the following events did Saikhom Mirabai Chanu win Silver Medal at Tokya 2020 Olympics",
  "options": ["45kg Boxing", "55kg Weightlifting", "49kg Weightlifting"],
  "answer": 3
};

var question5 = {
  "question": "How Medals did India Win at the Tokya 2020 Olympics ?",
  "options": ["7", "9", "6"],
  "answer": 1
};

function playGame(questions, username){
  var result = {"name": username, "score": 0};
  var score = 0;
  for(var i=0; i<questions.length; i++){
    question = questions[i].question;
    options =  questions[i].options;
    answer =  questions[i].answer;
    console.log("---------------------\n");
    console.log(chalk.yellow(question));
    var userAnswer = readlineSync.keyInSelect(options);
    if(userAnswer == answer-1){
      score += 1;
      console.log(chalk.green("Correct Answer !!!"));
    }
    else{
      console.log(chalk.red("Wrong Answer !!!"));
    }
    console.log("Current Score : "+score);
  }
  result.score = score;
  return result;
}


function highScoreCheck(userScore, highScores){
  var res = userScore;
  var beatsHighScore = false;
  for(var i=0;i<highScores.length;i++){
    if(userScore.score > highScores[i].score){
      if(beatsHighScore){
        if (highScores[i].score > res.score){
          res = highScores[i];
        }
      }
      else{
          res = highScores[i];
      }
      beatsHighScore = true;
    }    
  }
  if(beatsHighScore){
    console.log("Congratulations you are now one of the High Scorers !!!!");
    console.log("Your Score : "+userScore.score);
    console.log("You have surpassed "+res.name+" with score "+res.score);
    console.log("Please send Screenshot of the same for the scores to be updated...!!!!");
    
  }
}

var questions = [question1,question2,question3,question4,question5];
var highScores = [{"name":"Vijay", "score": 5}, {"name":"Ram", "score": 3}, {"name":"Ramesh", "score": 2}];

console.log("Welcome to Olympics Quiz...!!!");
var userName = readlineSync.question("Enter your Name : ");
console.log("Welcome "+userName);
var userScore = playGame(questions, userName);

console.log("\n----------------\n");
console.log("--------- Current High Scores -----------");
console.log("Name : Score");
for(var i=0;i<highScores.length;i++){
  console.log(highScores[i].name+" : "+highScores[i].score);
}

console.log("\n----------------\n");
highScoreCheck(userScore, highScores);
