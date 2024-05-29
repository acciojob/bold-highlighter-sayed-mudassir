const boldText = document.getElementsByTagName("strong");
function highlight() {
    //Write your code here
	 for(let i = 0; i < boldText.length;i++){
        boldText[i].style.color = "green";
    }
}


function return_normal() {
     for(let i = 0; i < boldText.length;i++){
        boldText[i].style.color = "black";
    }    
}
