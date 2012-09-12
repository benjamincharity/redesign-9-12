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




  //$(function() {
    //// Enable swiping
    //$(".content-boxes").swipe({
      //swipe: swipe,
      //// threshold must be over a few pixels as a tap often registers a few pixels left or right
      //threshold: 50,
      //maxTimeThreshold: 4000,
      //allowPageScroll: "vertical"
    //});
  //});

  // Swipe handlers.
  // The only arg passed is the original touch event object
  //function swipe(event, direction) {
    //var $self = $(this),
        //listArray = [0,1,2,3],
        //$lists = $('.posts-list').data('list'), // find all lists
        //activeList = $self.find('.posts-list.active').data('list'), // find active list
        //nextList = listArray[($.inArray(activeList, listArray) + 1) % listArray.length],
        //prevList = listArray[($.inArray(activeList, listArray) - 1 + listArray.length) % listArray.length];

    //// swipe left, go to the right
    //if(direction === "left" && activeList < 3) {
      //var $newList = $("ol[data-list='" + nextList + "']"),
      //tabData = $newList.attr('class').split(' ')[1],
      //$newTab = $(".tabs a[data-box='" + tabData + "']");

      //// remove active class on active tab
      //$('.tabs .active').removeClass('active');
      //// add active class to new tab
      //$newTab.addClass('active');

      //// find the currently active list and hide the contents
      //$('.posts-list.active').removeClass('active').hideListItems();
      //(function() {
        //$newList.addClass('active').showListItems();
      //}).delay(600); 
    //}

    //// swipe right, go to the left
    //else if (direction === "right" && activeList !== 0) {
      //var $prevList = $("ol[data-list='" + prevList + "']"),
      //tabData = $prevList.attr('class').split(' ')[1],
      //$newTab = $(".tabs a[data-box='" + tabData + "']");

      //// remove active class on active tab
      //$('.tabs .active').removeClass('active');
      //// add active class to new tab
      //$newTab.addClass('active');

      //// find the currently active list and hide the contents
      //$('.posts-list.active').removeClass('active').hideListItems();

      //(function() {
        //$prevList.addClass('active').showListItems();
      //}).delay(600);
    //}

  //}

}
