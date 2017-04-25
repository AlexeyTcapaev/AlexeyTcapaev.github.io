$(document).ready(function()
{
 
    var i=1;
     var j=0;
     var k=0;
     var f=0;
    
   
     $('#p1l').click(function()
    {    

         i++;
        
         if((i%2)==1)
                 {  
                    document.getElementById("select1").style.backgroundImage="url(restor2/img-main/logo/radio-on-button.svg)";
                      for(var a=3;a<document.getElementById("cont").childNodes.length;a+=2)
                       {
                            $(document.getElementById("cont").childNodes[a]).fadeIn();
                           
                        }
                       
                 }
          if((i%2)==0)
              {
                    document.getElementById("select1").style.backgroundImage="url(restor2/img-main/logo/radio-off-button.svg)";
                    for(var b=3;b<document.getElementById("cont").childNodes.length;b+=2)
                        {
                            $(document.getElementById("cont").childNodes[b]).fadeOut();
                        }    
              }
    });
      $('#p2l').click(function()
    {    
         j++;
        
         if((j%2)==1)
                 document.getElementById("select2").style.backgroundImage="url(restor2/img-main/logo/radio-on-button.svg)";
          if((j%2)==0)
              document.getElementById("select2").style.backgroundImage="url(restor2/img-main/logo/radio-off-button.svg)";
    });
    $('#p3l').click(function()
    {    
         k++;
        
         if((k%2)==1)
                 document.getElementById("select3").style.backgroundImage="url(restor2/img-main/logo/radio-on-button.svg)";
          if((k%2)==0)
              document.getElementById("select3").style.backgroundImage="url(restor2/img-main/logo/radio-off-button.svg)";
    });
     $('#p4l').click(function()
    {    
         f++;
        
         if((f%2)==1)
                 document.getElementById("select4").style.backgroundImage="url(restor2/img-main/logo/radio-on-button.svg)";
          if((f%2)==0)
              document.getElementById("select4").style.backgroundImage="url(restor2/img-main/logo/radio-off-button.svg)";
    });


});
    