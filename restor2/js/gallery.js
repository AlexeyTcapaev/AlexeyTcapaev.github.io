$(document).ready(function(){
   var i,l;   
    
$('.alboums').slick({
  infinite: true,
   dots:true,
  slidesToShow: 3,
  slidesToScroll: 3
});
    $('.closebutton').click(function()
    {
        document.getElementById('modalbox').style.display="none";
    });  
    
     $('.photo_cont_li').click(function()
    {
        document.getElementById('modalbox').style.display="flex";
         i=$(this).index()+1;
         l=i;
         k=i;
        $('#ph').attr('src',$(this.firstChild).attr('src'));
         var arr =document.getElementById('img_mass').childNodes;
         document.getElementById('curr_val_and_date').innerHTML=($(this).index()+1)+" из "+Math.floor(document.getElementById('img_mass').childNodes.length/2)+"<br>"+"19.04.17";
        console.log(i);

    }); 
     $('.left_arrow').click(function()
         {
            if(k>1)
                {
         document.getElementById('curr_val_and_date').innerHTML=(--k)+" из "+Math.floor(document.getElementById('img_mass').childNodes.length/2)+"<br>"+"19.04.17";
       $('#ph').attr('src',$(document.getElementById('img_mass').childNodes[l-=2].firstChild).attr('src'));
                }
          
    
         });
      $('.right_arrow').click(function()
         {
            if(k<document.getElementById('img_mass').childNodes.length/2-1)
                {
          document.getElementById('curr_val_and_date').innerHTML=(++k)+" из "+Math.floor(document.getElementById('img_mass').childNodes.length/2)+"<br>"+"19.04.17";
          $('#ph').attr('src',$(document.getElementById('img_mass').childNodes[l+=2].firstChild).attr('src'));
           
                }
         });
    
      $('.alboum').click(function()
    {
   document.getElementById('alboum_name').innerHTML=this.lastChild.innerText;
           
    });  
    
    
    });