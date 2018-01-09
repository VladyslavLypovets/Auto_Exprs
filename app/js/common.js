$(function() {
  $(document).ready(function(){
    $('select').selectpicker();
    $('.datepicker').datepicker({
        language: "ru",
        autoclose: true
    });
    $('.hover-column').hover(function(){
      var img = $(this).attr('data-image');
      var pos = parseInt($(this).attr('data-pos'))-1;

      $container = $(this).parent();

      $container.prev().find('.controll-image').removeClass('active');
      $($container.prev().find('.controll-image').get(pos)).addClass('active');

      $container.next().find('img').removeClass('active');
      $($container.next().find('img').get(pos)).addClass('active');
    });
    $('label[for="male"] button').click(function(){
      $('#female').attr("checked", false);
      $('#male').attr("checked", true);

    });
    $('label[for="female"] button').click(function(){
      $('#male').attr("checked", false);
      $('#female').attr("checked", true);
    });
  });
});
