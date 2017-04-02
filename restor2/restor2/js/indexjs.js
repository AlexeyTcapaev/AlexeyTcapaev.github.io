(function() 
{ 
$('.recall').click(function() 
{ 
    document.getElementsByClassName('modalbox').style.display = "flex";

}); 

$('.closebutton').click(function() 
{ 
document.getElementById('modalbox').style.display = "none"; 
}); 
});