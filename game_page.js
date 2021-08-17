var player1_name = localStorage.getItem("player1_name")
var player2_name = localStorage.getItem("player2_name")
var player1_score=0
var player2_score=0
document.getElementById("player1_name").innerHTML=player1_name+": "
document.getElementById("player2_name").innerHTML=player2_name+": "
document.getElementById("player1_score").innerHTML=player1_score
document.getElementById("player2_score").innerHTML=player2_score
document.getElementById("player_question").innerHTML="question turn: " + player1_name
document.getElementById("player_answer").innerHTML="answer turn: " + player2_name
function send(){
    get_word=document.getElementById("word").value
    word=get_word.toLowerCase()
    charat1=word.charAt(1)
    length1= Math.floor(word.length/2)
    charat2= word.charAt(length1)
    length2= word.length-1
    charat3=word.charAt(length2)
    remove1=word.replace(charat1,"_")
    remove2=remove1.replace(charat2,"_")
    remove3=remove2.replace(charat3,"_")
    question="<h4 id='word_display'> Q. "+remove3+"</h4>"
    input="<br> answer:<input type='text' id='input_check_box'>"
    button="<br> <br> <button class='btn btn-ifo' onclick='check()'> check</button>"
    row=question+input+button
    document.getElementById("output").innerHTML=row
    document.getElementById("word").value=""
}
question_turn="player1"
answer_turn="player2"
function check(){ get_answer=document.getElementById("input_check_box").value;
answer=get_answer.toLowerCase();
if(answer==word){
    if(answer_turn=="player1"){
        player1_score=player1_score+1
        document.getElementById("player1_score").innerHTML=player1_score
    }
    else{ player2_score=player2_score+1
        document.getElementById("player2_score").innerHTML=player2_score}
}
if(question_turn=="player1"){
    question_turn="player2"
    document.getElementById("player_question").innerHTML="question turn:"+ player2_name
}
    else{
    question_turn="player1"
    document.getElementById("player_question").innerHTML="question turn:"+ player1_name
    }
    if(answer_turn=="player1"){
        answer_turn="player2"
        document.getElementById("player_answer").innerHTML="answer turn:"+ player2_name
    }
        else{
        answer_turn="player1"
        document.getElementById("player_answer").innerHTML="answer turn:"+ player1_name
        }
        document.getElementById("output").innerHTML=""
}