function chat() {
    //Greet the user
    alert("Hello!");

    //Ask user for their name
    var yourName = prompt("What is your name?");
    alert("Hello,"+ yourName);

    //Ask user what theire favorite food is
    var food = prompt("What is your favorite food?");
    alert("I like"+ food + "too!");

    //Ask user if they would like to share their food
    var sharefood = confirm("Luke let's eat?");

    //If the user clicks "OK"
    if (shareFood == true){
        alert("Thank you!");
    }

    //If the user clicks "Cancel"
    else {
        alert("See you next!");
    }
}//closing bracket for the entire function, never delete this!