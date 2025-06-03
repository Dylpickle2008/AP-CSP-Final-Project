let questionList = ['https://i.scdn.co/image/ab67616d00001e0297381a48738d9dd8bef9c186', 
    'https://images5.alphacoders.com/139/thumb-1920-1396617.jpg', 'https://static1.srcdn.com/wordpress/wp-content/uploads/2025/04/jack-black-as-steve-singing-in-a-minecraft-movie.jpg',
    'https://i1.sndcdn.com/artworks-XJH3XRC4mLT1RT8I-9PGvrw-t500x500.jpg', 'https://images.cults3d.com/Tgm8B-8tZ_QGa-D5fQWw_iKFTK8=/516x516/filters:no_upscale()/https://fbi.cults3d.com/uploaders/38055520/illustration-file/b00d517e-0d7d-444e-b3a7-d438fc795372/trataCapture.png',
    'https://i.pinimg.com/736x/c6/1f/7a/c61f7a74a565c857fa7384d2a2850796.jpg', 'https://theithacan.org/wp-content/uploads/2025/04/rev-1-MCR-T3-0093_High_Res_JPEG-1200x675.jpeg', 'https://static.wikia.nocookie.net/skibidi-toilet-official/images/b/b1/GiantST.png/revision/latest?cb=20250425110939', 'https://img.youtube.com/vi/gDjMZvYWUdo/hqdefault.jpg,'
    'https://i.abcnewsfe.com/a/4b511c94-20de-4b81-9eb1-6e458badbb58/250515_gma_ally_chromebook1__hpMain_16x9.jpg?w=992', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShSdUano__UQYWtgMyGe1a3x_Jl12Oah8JLw&s'];
let answerList = ['crocodilo bombardino', 'tung tung tung sahur', 'steve', 'montagem lunar diamente', 'tralalero tralala', 'peter griffin', 'chicken jockey', 'skibidi toilet', 'f-students are the inventors', 'better call saul','moglight'];
let score = 0;
let questionIndex = 0;
let lives = 8;




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
        } else{
            questionIndex += 1;
            points -= 1;
            scoreContainer.textContent = "Score: " + points; 
            lives -= 1;
        }
        endGame(points); 
    });
}

function endGame (points) {
    if(questionIndex > 50|| lives < 1){
        scoreContainer.textContent = "Final Score: " + points; 
        question.textContent = "Congratulations: play again!";
        input.style.display = "none";
        button.style.display = "none";
    }
};

submitAnswer(score);