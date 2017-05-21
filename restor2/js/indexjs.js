$(function()
{
   
    $('.recall').click(function()
    {
        document.getElementById('modalbox').style.display="flex";

    });
     $('.count_news').click(function()
    {
        
         
         
                    //Записываем ссылку на элемент в переменную obj
                    var obj = document.getElementById("comment_bubble"); 
                    //Если css-свойство display не block, то: 
                    if (obj.style.display != "flex") { 
                       $("#comment_bubble").fadeIn(200); 
                        obj.style.display="flex"; //Показываем элемент
                    }
                    else $("#comment_bubble").fadeOut(200); //Скрываем элемент
                

    });
    
    $('.closebutton').click(function()
    {
         document.getElementById('modalbox').style.display="none";
    });
    $('.sendbutton').click(function()
    {
         document.getElementById('modalbox').style.display="none";
    });
    $('.inf').click(function()
    {
         document.getElementById('modalbox1').style.display="flex";
    });
     $('.closebutton1').click(function()
    {
         document.getElementById('modalbox1').style.display="none";
    });  
    $('.second_container').on('afterChange', function(event, slick, currentSlide){
  if (currentSlide == 0) 
  { 
      document.getElementById('sl_1').style.backgroundColor="black";
         document.getElementById('sl_2').style.backgroundColor="white";
         document.getElementById('sl_3').style.backgroundColor="white";
         document.getElementById('sl_4').style.backgroundColor="white";
  }
        if (currentSlide == 1) 
  { 
      document.getElementById('sl_2').style.backgroundColor="black";
         document.getElementById('sl_1').style.backgroundColor="white";
         document.getElementById('sl_3').style.backgroundColor="white";
         document.getElementById('sl_4').style.backgroundColor="white";
  }
        if (currentSlide == 2) 
  { 
       document.getElementById('sl_3').style.backgroundColor="black";
         document.getElementById('sl_2').style.backgroundColor="white";
         document.getElementById('sl_1').style.backgroundColor="white";
         document.getElementById('sl_4').style.backgroundColor="white"; 
  }
        if (currentSlide == 3) 
  { 
      document.getElementById('sl_4').style.backgroundColor="black";
         document.getElementById('sl_1').style.backgroundColor="white";
         document.getElementById('sl_3').style.backgroundColor="white";
         document.getElementById('sl_2').style.backgroundColor="white"; 
  }
});
    $('#sl_1').click(function()
    {
        document.getElementById('sl_1').style.backgroundColor="black";
         document.getElementById('sl_2').style.backgroundColor="white";
         document.getElementById('sl_3').style.backgroundColor="white";
         document.getElementById('sl_4').style.backgroundColor="white";
        $('.second_container').slick('slickGoTo',0);
        
    });  
    $('#sl_2').click(function()
    {
       document.getElementById('sl_2').style.backgroundColor="black";
         document.getElementById('sl_1').style.backgroundColor="white";
         document.getElementById('sl_3').style.backgroundColor="white";
         document.getElementById('sl_4').style.backgroundColor="white";
        $('.second_container').slick('slickGoTo',1);
    });  
    $('#sl_3').click(function()
    {
        document.getElementById('sl_3').style.backgroundColor="black";
         document.getElementById('sl_2').style.backgroundColor="white";
         document.getElementById('sl_1').style.backgroundColor="white";
         document.getElementById('sl_4').style.backgroundColor="white"; 
        $('.second_container').slick('slickGoTo',2);
    });  
    $('#sl_4').click(function()
    {
        document.getElementById('sl_4').style.backgroundColor="black";
         document.getElementById('sl_1').style.backgroundColor="white";
         document.getElementById('sl_3').style.backgroundColor="white";
         document.getElementById('sl_2').style.backgroundColor="white"; 
        $('.second_container').slick('slickGoTo',3);
        
    });  
    
     $('.second_container_1').on('afterChange', function(event, slick, currentSlide){
  if (currentSlide == 0) 
  { 
      document.getElementById('sl_11').style.backgroundColor="black";
         document.getElementById('sl_22').style.backgroundColor="white";
         document.getElementById('sl_33').style.backgroundColor="white";
         document.getElementById('sl_44').style.backgroundColor="white";
  }
        if (currentSlide == 1) 
  { 
      document.getElementById('sl_22').style.backgroundColor="black";
         document.getElementById('sl_11').style.backgroundColor="white";
         document.getElementById('sl_33').style.backgroundColor="white";
         document.getElementById('sl_44').style.backgroundColor="white";
  }
        if (currentSlide == 2) 
  { 
       document.getElementById('sl_33').style.backgroundColor="black";
         document.getElementById('sl_22').style.backgroundColor="white";
         document.getElementById('sl_11').style.backgroundColor="white";
         document.getElementById('sl_44').style.backgroundColor="white"; 
  }
        if (currentSlide == 3) 
  { 
      document.getElementById('sl_44').style.backgroundColor="black";
         document.getElementById('sl_11').style.backgroundColor="white";
         document.getElementById('sl_33').style.backgroundColor="white";
         document.getElementById('sl_22').style.backgroundColor="white"; 
  }
});
    $('#sl_1').click(function()
    {
        document.getElementById('sl_1').style.backgroundColor="black";
         document.getElementById('sl_2').style.backgroundColor="white";
         document.getElementById('sl_3').style.backgroundColor="white";
         document.getElementById('sl_4').style.backgroundColor="white";
        $('.second_container').slick('slickGoTo',0);
        
    });  
    $('#sl_2').click(function()
    {
       document.getElementById('sl_2').style.backgroundColor="black";
         document.getElementById('sl_1').style.backgroundColor="white";
         document.getElementById('sl_3').style.backgroundColor="white";
         document.getElementById('sl_4').style.backgroundColor="white";
        $('.second_container').slick('slickGoTo',1);
    });  
    $('#sl_3').click(function()
    {
        document.getElementById('sl_3').style.backgroundColor="black";
         document.getElementById('sl_2').style.backgroundColor="white";
         document.getElementById('sl_1').style.backgroundColor="white";
         document.getElementById('sl_4').style.backgroundColor="white"; 
        $('.second_container').slick('slickGoTo',2);
    });  
    $('#sl_4').click(function()
    {
        document.getElementById('sl_4').style.backgroundColor="black";
         document.getElementById('sl_1').style.backgroundColor="white";
         document.getElementById('sl_3').style.backgroundColor="white";
         document.getElementById('sl_2').style.backgroundColor="white"; 
        $('.second_container').slick('slickGoTo',3);
        
    });  
     $('#sl_11').click(function()
    {
        document.getElementById('sl_11').style.backgroundColor="black";
         document.getElementById('sl_22').style.backgroundColor="white";
         document.getElementById('sl_33').style.backgroundColor="white";
         document.getElementById('sl_44').style.backgroundColor="white";
        $('.second_container_1').slick('slickGoTo',0);
        
    });  
    $('#sl_22').click(function()
    {
       document.getElementById('sl_22').style.backgroundColor="black";
         document.getElementById('sl_11').style.backgroundColor="white";
         document.getElementById('sl_33').style.backgroundColor="white";
         document.getElementById('sl_44').style.backgroundColor="white";
        $('.second_container_1').slick('slickGoTo',1);
    });  
    $('#sl_33').click(function()
    {
        document.getElementById('sl_33').style.backgroundColor="black";
         document.getElementById('sl_22').style.backgroundColor="white";
         document.getElementById('sl_11').style.backgroundColor="white";
         document.getElementById('sl_44').style.backgroundColor="white"; 
        $('.second_container_1').slick('slickGoTo',2);
    });  
    $('#sl_44').click(function()
    {
        document.getElementById('sl_44').style.backgroundColor="black";
         document.getElementById('sl_11').style.backgroundColor="white";
         document.getElementById('sl_33').style.backgroundColor="white";
         document.getElementById('sl_22').style.backgroundColor="white"; 
        $('.second_container_1').slick('slickGoTo',3);
        
    });  
    
});

$(document).ready(function(){
  $('.second_container').slick({
      autoplay:true,
      autoplaySpeed:3000,
      arrows:false,
  }); 
    
});
$(document).ready(function(){
  $('.second_container_1').slick({
      autoplay:true,
      autoplaySpeed:3000,
      arrows:false,
     
      
 
    
      
  });   
});

  $(document).ready(function(){
      if(document.documentElement.clientWidth<=414)
          {
               $(".mobile_nav").sticky({
                    topSpacing:0
                           });
          }
      else
          {
                $(".headnav").sticky({
                    topSpacing:0
                });
          }
  });
$(document).ready(function()
{
    var grad=90;
    var cc=0;
    $('.list_open_button').click(function(){
         $(this).css({transform:'rotate('+grad+'deg)'});
        grad+=90;
        cc++; 
        if(cc%2!=0)
            {
                  $('#lst').fadeIn();
                
            }
        else $('#lst').fadeOut();
    });
    
});
