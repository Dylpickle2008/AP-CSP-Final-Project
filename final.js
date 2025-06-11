let questionList = ['____ China collected champa rice as tribute?', '______ revolution caused the shift from argarian to urban?', 'The ____ plague killed 2/3 of the global pop 1200-1300s', 'The _____ lead by khanates formed the largest continuous land empire in history', 
    'The Ottoman Empire often clashed with ____ due to their religious differences', 'Enlightenment principals encouraged revolutions in America and _____', 'The underlying factors that led to WWI were military, imperialism, alliances, and ______', 'Japans isolation ended with the ____ revolution', 
    'The Berlin conference led by_____ partitioned Africa between Euro powers', '_____ oversaw the British colony established in South Africa', 'In the late 1900s, the _____ Rouge was the attempt in Cambodia to drive out foreigners', 'The UN and the _________ trade organization help to regulate international interactions'];
let answerList = ['Song', 'Industrial', 'Black', 'Mongols', 'Safavid', 'France', 'Nationalism', 'Meiji', 'Otto Von Bismarck', 'Cecil Rhodes', 'Khamer', 'World']
let score = 0;
let questionIndex = 0;

const question = document.querySelector('.question-container');
const button = document.querySelector('.button-container');
const input = document.querySelector('#input-field');
let scoreContainer = document.querySelector('.score-container');

console.log(question); 
question.textContent = questionList[questionIndex];

function submitAnswer (points) {
    button.addEventListener('click', () =>{
        if(input.value === answerList[questionIndex]){
            questionIndex += 1;
            points += 1;
            question.textContent = questionList[questionIndex];
            scoreContainer.textContent = "Score: " + points;
            input.value = "";
            scoreContainer.style.color = "green";
        } else{
            points -= 1;
            scoreContainer.textContent = "Score: " + points; 
            scoreContainer.style.color = "red";
        }
        endGame(points); 
    });
}

function endGame (points) {
    if(questionIndex > 12){
        scoreContainer.textContent = "Final Score: " + points; 
        question.textContent = "Congratulations: You Studied for your History Test!";
        input.style.display = "none";
        button.style.display = "none";
    }
};

submitAnswer(score);