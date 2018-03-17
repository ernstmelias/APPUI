window.onload = function()
{
document.getElementById("opengames").onclick = function openGameShelf()
{
 document.getElementById("games").style.display="block";
 document.getElementById("quizzes").style.display="none";
}

document.getElementById("openquizzes").onclick = function openQuizShelf()
{
 document.getElementById("quizzes").style.display="block";
  document.getElementById("games").style.display="none";
}

document.getElementById("nusers").onclick = function openNewUsrShelf()
{
 document.getElementById("new_users").style.display="block";
 document.getElementById("new_visits").style.display="none";
 document.getElementById("your_visits").style.display="none";
 document.getElementById("new_favorites").style.display="none";
}

document.getElementById("nvisits").onclick = function openNewVisitShelf()
{
 document.getElementById("new_users").style.display="none";
 document.getElementById("new_visits").style.display="block";
 document.getElementById("your_visits").style.display="none";
 document.getElementById("new_favorites").style.display="none";
}

document.getElementById("yvisits").onclick = function openYourVisitShelf()
{
 document.getElementById("new_users").style.display="none";
 document.getElementById("new_visits").style.display="none";
 document.getElementById("your_visits").style.display="block";
 document.getElementById("new_favorites").style.display="none";
}

document.getElementById("nfavorites").onclick = function openYourVisitShelf()
{
 document.getElementById("new_users").style.display="none";
 document.getElementById("new_visits").style.display="none";
 document.getElementById("your_visits").style.display="none";
 document.getElementById("new_favorites").style.display="block";
}		
		
}