$('.tabbed-list').each(function(){                   
  var $this = $(this);                            
  var $tab = $this.children('li.active');             
  var $link = $tab.children('a');                     
  var $panels = $($link.attr('href'));             

  $this.on('click', '.tab-control', function(e) { 
    e.preventDefault();                           
    var $link = $(this),                          
        id = this.hash;                           

    if (id && !$link.is('.active')) {             
      $panels.removeClass('active');               
      $tab.removeClass('active');                 

      $panels = $(id).addClass('active');          
      $tab = $link.parent().addClass('active');   
    }
  });
});
