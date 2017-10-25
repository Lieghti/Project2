$(document).ready(function() {
  $("form.survey").submit(function(event) {
    event.preventDefault();
    var ageRange = $("select.age-range").val();
    var climate = $("select.climate").val();
    var shoeType = $("select.shoe-type").val();
    var season = $("select.season").val();
    var hairType = $("select.hair-type").val();

  if (ageRange === "Less than 20 years old" or "20-40 years-old" && climate === "Extreme Heat!" && shoe-type === "Flip Flops" or "Light Sneakers") {
      $(".winter").hide();
      $(".spring").hide();
      $(".summer").show ();
    }

  });
});


//$('select[name=selector]').change(function() { alert($(this).val()); });
