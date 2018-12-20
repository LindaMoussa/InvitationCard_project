$(window).scroll(function(){

if($(window).scrollTop()>300)
    {
        $(".bg-mine").css("backgroundColor","#777");
       
        
    }
    else{
          $(".bg-mine").css("backgroundColor","transparent");
        $(".bg-mine ").css("color","#fff");
    }

})

