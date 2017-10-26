var cold = 0;
var moderate = 0;
var hot = 0;

$(document).ready(function() {
  $("#survey").submit(function(event) {
    //debugger;
    console.log(hot);
    var ageRangeInput = parseInt($("#age-range").val());
    // var climateInput = $("#climate").val();
    // var shoeTypeInput = $("#shoe-type").val();
    // var seasonInput = $("#season").val();
    // var hairTypeInput = $("#hair-type").val();

    if (ageRangeInput === 1) {
      hot += 1;
    } else if (ageRangeInput === 2) {
      moderate += 1;
    }

    //top scores
    console.log(hot);
    console.log(moderate);
    console.log(cold);

  /*if (ageRangeInput === "Less than 20 years old" && climateInput === "Extreme Heat!" && shoeTypeInput === "Flip Flops" && seasonInput === "Spring" && hairTypeInput === "Bone Straight") {
      $(".cold").hide();
      $(".moderate").hide();
      $(".hot").show ();
    }
    else {
      $(".cold").hide();
      $(".moderate").hide();
      $(".hot").show ();

    }*/

    event.preventDefault();
  });
});


//$('select[name=selector]').change(function() { alert($(this).val()); });
