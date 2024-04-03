import $ from 'jquery';

$(document).ready(function() {
  // Create and append elements using jQuery
  $('<p>').text('Paragraph 1').appendTo('body');
  $('<p>').text('Paragraph 2').appendTo('body');
  $('<p>').text('Paragraph 3').appendTo('body');
});
