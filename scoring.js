$(document).ready(function(){
  function score_indicate(){
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];

    let subjects = subject_points.length;

    let sum = subject_points[0];
    sum = sum + subject_points[1];
    sum = sum + subject_points[2];
    sum = sum + subject_points[3];
    sum = sum + subject_points[4];
    $("#sum_indicate").text(sum);
    $("#average_indicate").text(sum/subjects);
    return [sum, subjects];
  };

   function get_achievement(points){
     let sum, number
     [sum, number] = score_indicate(); // score_indicate()を実行した結果sumとsubjectsが返ってくる
      if (sum>=number*100*0.8){
        return "A";
      }
      else if (sum>=number*100*0.6){
        return "B";
      }
      else if (sum>=number*100*0.4){
        return "C";
      }
      else {
        return "D";
      }
   }

  function get_pass_or_failure(){
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
    let number = subject_points.length;

    let judge = "合格";

    for(let i = 0; i < number; i++){
      if(subject_points[i]<60) {
        judge = "不合格";
        break;
      }
    }

    return judge;
  };
  

  function judgement(){
    let achievement = get_achievement();
    let pass_or_failure = get_pass_or_failure();
    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">あなたの成績は${achievement}で${pass_or_failure}です</label>`);
  };

  $('#national_language, #english, #mathematics, #science, #society').change(function() {
    score_indicate();
  });

  $('#btn-evaluation').click(function() {
    $("#evaluation").text(get_achievement());
  });

  $('#btn-judge').click(function() {
    $("#judge").text(get_pass_or_failure());
  });

  $('#btn-declaration').click(function() {
    judgement();
  });

});
