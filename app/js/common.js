$(function() {
  $(document).ready(function(){
    $('select').selectpicker();
    $('.datepicker').datepicker({
        language: "ru",
        autoclose: true
    });
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
