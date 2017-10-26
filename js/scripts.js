$(document).ready(function() {
  $("form.survey").submit(function(event) {
    var ageRangeInput = $("form#age-range").val();
    var climateInput = $("form#climate").val();
    var shoeTypeInput = $("form#shoe-type").val();
    var seasonInput = $("form#season").val();
    var hairTypeInput = $("form#hair-type").val();



  if (ageRangeInput === "Less than 20 years old" && climateInput === "Extreme Heat!" && shoeTypeInput === "Flip Flops" && seasonInput === "Spring" && hairTypeInput === "Bone Straight") {
      $(".winter").hide();
      $(".spring").hide();
      $(".summer").show ();
    }
    else {
      $(".winter").hide();
      $(".spring").hide();
      $(".summer").show ();

    }

    event.preventDefault();
  });
});


//$('select[name=selector]').change(function() { alert($(this).val()); });
