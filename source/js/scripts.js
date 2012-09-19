// navigation
$(function() {
      var $nav = $('#navigation'),
     $labsPage = $('#labs'),
  $contactPage = $('#contact'),
     $homePage = $('#superfluous-titles');

  $nav.on('click', '.i-want-to-go-to-there', function(event) {
    event.preventDefault();

    if($nav.hasClass('active')) {
      $nav.removeClass('active');
    } else {
      $nav.addClass('active');
    }
  });

  $nav.on('click', '.page-nav', function(event) {
    var $self = $(this);

    event.preventDefault();

    $('.page').removeClass('active goTheOtherWay');

    if($self.attr('href') === '#labs') {
      console.log('labs');
      $labsPage.addClass('active');
    }

    if($self.attr('href') === '#contact') {
      console.log('contact');
      $contactPage.addClass('active');
      $homePage.addClass('goTheOtherWay');
    }

    if($self.attr('href') === '#home') {
      console.log('home');
      $homePage.addClass('active');
    }
  });
});


// main page titles
$(function() {

  $('#superfluous-titles').on('click', 'h1', function(event) {
    var $self = $(this),
    $page = $('.page');
    console.log($self);

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
