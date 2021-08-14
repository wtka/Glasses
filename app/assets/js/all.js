$(document).ready(() => {
  var $li = $('.glasses-header .sub-menu li a');
  $li.click(function (event){
    if($(this).attr('href') == '#glasses-optical')
    {
      $('#glasses-sunglasses').css('display', 'none');
      $('#glasses-optical').css('display', 'block');
    }
    else if($(this).attr('href') == '#glasses-sunglasses')
    {
      $('#glasses-optical').css('display', 'none');
      $('#glasses-sunglasses').css('display', 'block');
    }
  });
});