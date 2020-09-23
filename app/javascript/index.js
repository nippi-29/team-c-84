$(function() {

  $('#check_all').on("click",function(){
    $("input[name='person']").prop("checked", this.checked);
  });

  $("input[name='person']").on('click', function() {
      if ($('#form1 :checked').length == $('#form1 :input').length) {
        // 全てのチェックボックスにチェックが入っていたら、「全選択」 = checked
        $('#check_all').prop('checked', true);
      } else {
        // 1つでもチェックが入っていたら、「全選択」 = checked
        $('#check_all').prop('checked', false);
      }
    });
  $("#lottery").on("click", function() {
    const arr = [];

    $("[name='person']:checked").each(function(){
      $(this).prop('disabled', true);
      arr.push($(this).val());
    });
    const ary = arr[Math.floor(Math.random() * arr.length)];
    $("#span").html(ary+"さん、あなたです")
  });
});