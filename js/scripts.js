var cold = 0;
var moderate = 0;
var hot = 0;

$(document).ready(function() {

  $("#survey").submit(function(event) {
    console.log(hot);
    var ageRangeInput = parseInt($("#age-range").val());
    var climateInput = parseInt($("#climate").val());
    var shoeTypeInput = parseInt($("#shoe-type").val());
    var seasonInput = parseInt($("#season").val());
    var hairTypeInput = parseInt($("#hair-type").val());

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

    //seasonInput conditional statements
    if (seasonInput === 1){
      moderate += 1;
    } else if (seasonInput === 2) {
      hot += 1;
    } else if (seasonInput === 3){
      moderate += 1;
    } else if (seasonInput === 4){
      cold += 1;
    }

    //Hair type conditional statements
    if(hairTypeInput === 1){
      cold += 1;
    } else if (hairTypeInput === 2) {
      moderate += 1;
    } else if (hairTypeInput === 3){
      hot += 1;
    } else if (hairTypeInput === 4){
      hot += 1;
    }

    // Which options to show

    if (hot > moderate){
      $("#cold").hide();
      $("#moderate").hide();
      $("#hot").fadeIn();
    } else if (hot > cold){
      $("#cold").hide();
      $("#moderate").hide();
      $("#hot").fadeIn();
    } else if (moderate > hot) {
      $("#cold").hide();
      $("#hot").hide();
      $("#moderate").slideDown();
    } else if (moderate > cold) {
      $("#cold").hide();
      $("#hot").hide();
      $("#moderate").slideDown();
    } else if (cold > hot) {
      $("#hot").hide();
      $("#moderate").hide();
      $("#cold").show();
    } else if (cold > moderate) {
      $("#hot").hide();
      $("#moderate").hide();
      $("#cold").show();
    }

       //top scores
    console.log(hot);
    console.log(moderate);
    console.log(cold);


    event.preventDefault();
  });

});
});


//$('select[name=selector]').change(function() { alert($(this).val()); });
