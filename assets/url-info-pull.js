// filterable gallery

  // Daniel's new code
  var rawInitial = location.search.replace("?","");
  var initialSet = rawInitial.split("&");
  var initial = initialSet[0]

  // alert(initial)

   if (initial != "" ) {
     if (initial.length < 10){
       // alret(initial);
        var elmnt = document.getElementById("portfolio");
        elmnt.scrollIntoView();
    $('.portfolio .portfolio-item').each(function() {
          if(initial == 'all'){
            $(this).removeClass('hidden');
          }else{
            if(!$(this).hasClass(initial)) {
              $(this).addClass('hidden'); // hide those that don't have the filter
            }else{
              $(this).removeClass('hidden'); // show those that do have the filter
            }
          };
      });
    };
  };


  $('nav#portfolio-filter a').click(function(e){
    e.preventDefault();

    /* make this <li> class active and remove class 'active' from any other <li>s */
    $('nav#portfolio-filter .active').removeClass('active');
    $(this).addClass('active');

    /* get the name of the cateory from this link */
    var filterVal = $(this).text().replace(' ','-').toLowerCase();

    $('.portfolio .portfolio-item').each(function() {
        if(filterVal == 'all'){
          $(this).removeClass('hidden');
        }else{
          if(!$(this).hasClass(filterVal)) {
            $(this).addClass('hidden'); // hide those that don't have the filter
          }else{
            $(this).removeClass('hidden'); // show those that do have the filter
          }
          };
        });

});
