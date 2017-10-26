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
    var seasonInput = $("#season").val();
    var hairTypeInput = $("#hair-type").val();

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
      ("#cold").hide();
      ("#moderate").hide();
      ("#hot").show();
    } else if (hot > cold){
      ("#cold").hide();
      ("#moderate").hide();
      ("#hot").show();
     } 
    // else if (moderate > hot) {
    //   ("#moderate").show();
    // } else if (moderate > cold) {
    //   ("#moderate").show();
    // } else if (cold > hot) {
    //   ("#cold").show();
    // } else if (cold > moderate) {
    //   ("#cold").show();
    // }

       //top scores
    console.log(hot);
    console.log(moderate);
    console.log(cold);


    event.preventDefault();
  });
});


//$('select[name=selector]').change(function() { alert($(this).val()); });
