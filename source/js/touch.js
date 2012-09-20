// test for the 'touch' class added by modernizr
if ($('html').hasClass('touch')) {

  // scroll the nav bar out of view
  if( window.addEventListener ){
    window.addEventListener("load",function() {
        setTimeout(function(){
            window.scrollTo(0, 0);
        }, 0);
    });
}

  // lock the zoom unless the user is manually zooming
  var viewportmeta = document.querySelector('meta[name="viewport"]');
  if (viewportmeta) {
    viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0';
    document.body.addEventListener('gesturestart', function () {
      viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
    }, false);
  }


  // faster clicks on mobile
  $(function() {
    $('#superfluous-titles').on('touchend', 'h1', function(event) {
      var $self = $(this),
      $page = $('#superfluous-titles');

      if($self.next().is(':visible')) {
        $page.removeClass('movinOnUp');
        $('.hide-yo-kids').slideUp();
      } else {
        $page.addClass('movinOnUp');
        $('.hide-yo-kids').slideUp();
        $self.next().slideDown();
      }
    });
  });

}
