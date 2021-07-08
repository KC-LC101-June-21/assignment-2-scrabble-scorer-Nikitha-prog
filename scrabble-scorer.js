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
  0: [' '],
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};
//const scoringAlgorithms = [];
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

//function simpleScore(word)
{
	word = word.toUpperCase();
  let score=word.length;
  console.log(`Score for ${word}: ${score}`);
return score;
};

let vowelBonusScore=function(word)
//function vowelBonusScore(word)
{	
  word = word.toUpperCase();
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
           
//};
  }    

totalScore= score+newScore;
console.log(`Score for ${word}: ${totalScore}`);
return totalScore;
}


/*let scoringAlgorithm1 = {
    name: 'Simple Score',
    description: 'Each letter is worth 1 point.',
    scoringFunction: simpleScore
};
let scoringAlgorithm2 = {
    name: "Bonus Vowels	",
    description: "Vowels are 3 pts, consonants are 1 pt.",
    scoringFunction: vowelBonusScore
};
let scoringAlgorithm3= {
    name: 'Scrabble',
    description: 'The traditional scoring algorithm, Uses scrabble point system',
    scoringFunction: oldScrabbleScorer
};
scoringAlgorithms=[scoringAlgorithm1, scoringAlgorithm2, scoringAlgorithm3] 
*/
 
scoringAlgorithms=[ scoringAlgorithm1=({ name: 'Simple Score', description: 'Each letter is worth 1 point.', scoringFunction: simpleScore }), scoringAlgorithm2=({ name: 'Bonus Vowels	 ', description: 'Vowels are 3 pts, consonants are 1 pt.', scoringFunction: vowelBonusScore }), scoringAlgorithm3=({ name: 'Scrabble', description: 'The traditional scoring algorithm, Uses scrabble point system', scoringFunction: oldScrabbleScorer }) ]

/*scoringAlgorithms=[scoringAlgorithm1 = {
    name: 'Simple Score',
    description: 'Each letter is worth 1 point.',
    scoringFunction: simpleScore
},scoringAlgorithm2 = {
    name: 'Bonus Vowels	      ',
    description: 'Vowels are 3 pts, consonants are 1 pt.',
    scoringFunction: vowelBonusScore
}, scoringAlgorithm3= {
    name: 'Scrabble',
    description: 'The traditional scoring algorithm, Uses scrabble point system',
    scoringFunction: oldScrabbleScorer
}]*/


function initialPrompt() {
    let word = input.question("Let's play some scrabble!\n \nEnter a word:");
    console.log();
    console.log();
    
return word;
};
  
function scorerPrompt() {
console.log("Which scoring algorithm would you like to use?");
console.log()
console.log("0 - Simple: One point per character");
console.log("1 - Vowel Bonus: Vowels are worth 3 points");
console.log("2 - Scrabble: Uses scrabble point system");
let answer = input.question("Enter 0, 1, or 2: ");

/*while(answer>2)
{
let answer2= input.question('Invalid input. Please enter a number between 0-2:');
}*/

return answer;

}

function transform(oldPointStructure) {
let newOldPointStructure={};
//let oldPointStructure1=[];
for(items in oldPointStructure )
{
let letters=oldPointStructure[items];
//console.log("Letters: "+letters);
for(j=0;j<letters.length;j++)
    {
     newOldPointStructure[letters[j].toLowerCase()]=Number(items);
    }
  }
console.log("typeOF : "+typeof newOldPointStructure);
return newOldPointStructure;
};

let scrabbleScore=function(word)
{
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

function runProgram() {
   let answer=initialPrompt();
   let  algorithmNumber= scorerPrompt();
     algorithmNumber=Number(algorithmNumber);

    if(algorithmNumber===0)
    {
        simpleScore(answer);

    }
    else if(algorithmNumber===1)
    {
     vowelBonusScore(answer);

    }
    else if(algorithmNumber===2)
    {
   // oldScrabbleScorer(answer);
    scrabbleScore(answer);

    }
    //oldScrabbleScorer(answer);

   // scrabbleScore(answer);
   
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

