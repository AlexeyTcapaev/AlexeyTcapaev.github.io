$(function()
{
    var i=0;
     var j=0;
     var k=0;
     var f=0;
    
   
     $('.check1').click(function()
    {    
         i++;
        
         if((i%2)==1)
                 document.getElementById("select1").style.backgroundImage="url(../img-main/logo/radio-on-button.svg)";
          if((i%2)==0)
              document.getElementById("select1").style.backgroundImage="url(../img-main/logo/radio-off-button.svg)";
    });
    $('.check2').click(function()
    {    
         j++;
         if((j%2)==1)
                 document.getElementById("select2").style.backgroundImage="url(../img-main/logo/radio-on-button.svg)";
          if((j%2)==0)
              document.getElementById("select2").style.backgroundImage="url(../img-main/logo/radio-off-button.svg)";
    });
    $('.check3').click(function()
    {    
         k++;
         if((k%2)==1)
                 document.getElementById("select3").style.backgroundImage="url(../img-main/logo/radio-on-button.svg)";
          if((k%2)==0)
              document.getElementById("select3").style.backgroundImage="url(../img-main/logo/radio-off-button.svg)";
    });
    $('.check4').click(function()
    {    
         f++;
         if((f%2)==1)
                 document.getElementById("select4").style.backgroundImage="url(../img-main/logo/radio-on-button.svg)";
          if((f%2)==0)
              document.getElementById("select4").style.backgroundImage="url(../img-main/logo/radio-off-button.svg)";
    });
});
    