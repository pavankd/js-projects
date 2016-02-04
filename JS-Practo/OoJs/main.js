function User(theName,theEmail){
    this.name =  theName;
    this.email = theEmail;
    this.quizeScore=[];
    this.currentScore = 0;
    }

User.prototype={
    constructor : User,
    saveScore : function(theScoreToAdd){
        this.quizeScore.push(theScoreToAdd)
    },
    showNameAndScore : function(){
        var score = this.quizeScore.length >0 ? this.quizeScore.join(",") : "N Score yet";
        return "Name :"+this.name+" Scores :"+score;
    },
    changeEmail:function(newEmail){
        this.email =newEmail;
        return "New Email Saved :"+this.email;
    }
}

pavanUser = new User("Pavan","pavand@sysintelli.com");
pavanUser.changeEmail("pavank.d@gmail.com");
pavanUser.saveScore(19);
pavanUser.saveScore(30);
console.log(pavanUser.showNameAndScore());


ashwinUser = new User("Ashwin","ashwinv@sysintelli.com");
ashwinUser.changeEmail("ashwinkvv@gmail.com");
ashwinUser.saveScore(20);
ashwinUser.saveScore(40);
console.log(ashwinUser.showNameAndScore());

document.writeln("<h1>"+pavanUser.showNameAndScore()+"</h1>");
document.writeln("<h1>"+ashwinUser.showNameAndScore()+"</h1>");

Object.create = function (o) {
//It creates a temporary constructor F()
        function F() {
        }
//And set the prototype of the this constructor to the parametric (passed-in) o object
//so that the F() constructor now inherits all the properties and methods of o
        F.prototype = o;

//Then it returns a new, empty object (an instance of F())
//Note that this instance of F inherits from the passed-in (parametric object) o object. 
//Or you can say it copied all of the o object's properties and methods
        return new F();
    }


 function inheritPrototype(childObject, parentObject) {
    // As discussed above, we use the Crockford’s method to copy the properties and methods from the parentObject onto the childObjec
// So the copyOfParent object now has everything the parentObject has 
    var copyOfParent = Object.create(parentObject.prototype);

    //Then we set the constructor of this new object to point to the childObject.
// Why do we manually set the copyOfParent constructor here, see the explanation immediately following this code block.
    copyOfParent.constructor = childObject;

    // Then we set the childObject prototype to copyOfParent, so that the childObject can in turn inherit everything from copyOfParent (from parentObject)
   childObject.prototype = copyOfParent;
}

function Question(theQuestion,theChoice,theCorrectAnswer){
    this.question = theQuestion;
    this.choice = theChoice;
    this.correctAnswer = theCorrectAnswer;
    this.userAnswer ="";
    var newDate = new Date();
    
    QUIZ_CREATED_DATE = newDate.toLocaleDateString;
    this.getQuizDate = function(){
        return QUIZ_CREATED_DATE;
    };
    
    console.log("Quiz created on :"+this.getQuizDate());
}

Question.prototype.getCorrectAnswer = function(){
    return this.correctAnswer;
}
Question.prototype.getUserAnswer = function(){
    return this.userAnswer;
}

Question.prototype.displayQuestion = function(){
    var questionTODisplay = "<div class='question'>"+this.question+"</div> <ul>";
    choiceCounter = 0;
    this.choice.forEach(function(eachChoice){
        questionTODisplay +="<li><input type='radio' name='choice' value='"+choiceCounter+"'>"+eachChoice+"</li>";
        choiceCounter++;
    });
    questionTODisplay+="</ul>";
    console.log(questionTODisplay);
}

function MultipleChoiceQuestion(theQuestion,theChoice,theCorrectAnswer){
    
    Question.call(this,theQuestion,theChoice,theCorrectAnswer);
}

inheritPrototype(MultipleChoiceQuestion, Question);

function DragDropQuestion(theQuestion,theChoice,theCorrectAnswer){
    Question.call(this,theQuestion,theChoice,theCorrectAnswer);
}

inheritPrototype(DragDropQuestion,Question);

DragDropQuestion.prototype.displayQuestion = function(){
    console.log(this.question);
}

var allQuestions = [
new MultipleChoiceQuestion("Who is Prime Minister of England?", ["Obama", "Blair", "Brown", "Cameron"], 3),
   
new MultipleChoiceQuestion("What is the Capital of Brazil?", ["São Paulo", "Rio de Janeiro", "Brasília"], 2),
   
new DragDropQuestion("Drag the correct City to the world map.", ["Washington, DC", "Rio de Janeiro", "Stockholm"], 0)
];

// Display all the questions
allQuestions.forEach(function (eachQuestion)  {
    eachQuestion.displayQuestion();
});