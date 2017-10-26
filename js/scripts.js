var cold = 0;
var moderate = 0;
var hot = 0;

$(document).ready(function() {
  $("#survey").submit(function(event) {
    //debugger;
    console.log(hot);
    var ageRangeInput = parseInt($("#age-range").val());
    var climateInput = $("#climate").val();
    var shoeTypeInput = $("#shoe-type").val();
    // var seasonInput = $("#season").val();
    // var hairTypeInput = $("#hair-type").val();

    // Age Range condiditonal statements
    if (ageRangeInput === 1) {
      hot += 1;
    } else if (ageRangeInput === 2) {
      moderate += 1;
    } else if (ageRangeInput === 3){
      moderate += 1;
    } else if (ageRangeInput === 4){
      hot += 1;
    }

    //Climate conditional statements
    if (climateInput === 1){
      hot += 1;
    } else if (climateInput === 2){
      moderate += 1;
    } else if (climateInput === 3) {
      cold += 1;
    } else if (climateInput === 4) {
      cold += 1;
    }

    // shoe-type conditional statements
    if (shoeTypeInput === 1){
      hot += 1;
    } else if (shoeTypeInput === 2) {
      moderate += 1;
    } else if (shoeTypeInput === 3) {
      moderate += 1;
    } else if (shoeTypeInput === 4){
      cold += 1; 
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
