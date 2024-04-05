$(document).ready(function () {

    ////////////////////////////////////////////////////////////
    
    
    
          highlightCurrentPageNav();
    
     
    
    ////////////////////////////////////////////////////////////
    
    
        });

function highlightCurrentPageNav() {
   
    let currentPageUrl =new URL( window.location.href).pathname;
    if(currentPageUrl=='/'){
        currentPageUrl='/index.html';
    }

    $("a[href*='"+currentPageUrl+"']").each(function() {
        // For each matching element, do something
        // E.g., add a class to it
         
        $(this).closest('li.nav-item').addClass('active');
    });
  
  }