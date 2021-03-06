// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

/*const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};*/

const oldPointStructure = {
  //0: [' '],
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};
let scoringAlgorithms=[];
let newPointStructure=transform(oldPointStructure);

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
  let score=0;
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
      score=score+Number(pointValue);
		 }
 
	  }
  }
  console.log(`Score for ${word}: ${score}`);

  return score;
 }




// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //


let simpleScore=function(word)
{
let score=0;

	word = word.toUpperCase().trim();
  for(i=0;i<word.length;i++)
  {
     score=score+1;

  }
  console.log(`Score for ${word}: ${score}`);
return score;
};

let vowelBonusScore=function(word)
{	
  word = word.toUpperCase().trim();
  let newWord = word.split('');
  let vowelArr=["A","E","I","O","U"]
  let score=0;
  let newScore=0;
  let totalScore=0
  for(i=0;i<newWord.length;i++)
  {
      if((vowelArr).includes(newWord[i]))
        {
        score+= 3;
        }
        else
        {
          newScore+=1;
        }
           
  }    

  totalScore= score+newScore;
  console.log(`Score for ${word}: ${totalScore}`);
  return totalScore;
}



function transform(oldPointStructure) {
  let newOldPointStructure={};
  for(items in oldPointStructure )
    {
    let letters=oldPointStructure[items];
    for(j=0;j<letters.length;j++)
      {
          newOldPointStructure[letters[j].toLowerCase()]=Number(items);
      }
    }

return newOldPointStructure;
};

let scrabbleScore=function(word)
{
    word = word.toLowerCase().trim();

  let score=0;
	for (let i = 0; i < word.length; i++) 
  {
    	  for (const pointValue in newPointStructure)
        {
        if (pointValue.includes(word[i]))
        {
          score=score+newPointStructure[pointValue];
        }
        }

  }
  console.log(`score of the ${word}: ${score}`);
  return score;
}


scoringAlgorithms=[ scoringAlgorithm1=({ name: 'Simple Score', description: 'Each letter is worth 1 point.', scoringFunction: simpleScore }), scoringAlgorithm2=({ name: 'Bonus Vowels	 ', description: 'Vowels are 3 pts, consonants are 1 pt.', scoringFunction: vowelBonusScore }), scoringAlgorithm3=({ name: 'Scrabble', description: 'The traditional scoring algorithm, Uses scrabble point system', scoringFunction: scrabbleScore }) ]

function scorerPrompt(word) {
console.log("Which scoring algorithm would you like to use?");
console.log()
console.log(`0 - ${scoringAlgorithms[0].name}: ${scoringAlgorithms[0].description}`);
console.log(`1 - ${scoringAlgorithms[1].name}: ${scoringAlgorithms[1].description}`);
console.log(`2 - ${scoringAlgorithms[2].name}: ${scoringAlgorithms[2].description}`);

let answer = input.question("Enter 0, 1, or 2: ");

answer=Number(answer)

if(answer===0)
{
  scoringAlgorithms[0].scoringFunction(word)
}

if(answer===1)
{
    scoringAlgorithms[1].scoringFunction(word)

}
if(answer===2)
{
    scoringAlgorithms[2].scoringFunction(word)

}

return answer;

}
function initialPrompt() {
    let word = input.question("Let's play some scrabble!\n \nEnter a word:");
    console.log();
    console.log();
    
return word;
};

function runProgram() {
   let answer=initialPrompt();
   scorerPrompt(answer);
   /*let num=scorerPrompt(answer);
  
   if((num>=3)||(num<=0)||(num===NaN))
   {
     console.log();
     console.log("Enter 0,1 or 2 ")
      scorerPrompt(answer);
   }*/

}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

