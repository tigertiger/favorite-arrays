$(document).ready(function() {
  $("#favoriteThings").submit(function(event) {
    event.preventDefault();
    let favFood = $("input#favFood").val();
    let favMusic = $("input#favMusic").val();
    let favHair = $("input#favHair").val();
    let favThings = [];
    let reverseFavs = [];
      favThings.push(favFood);
      favThings.push(favMusic);
      favThings.push(favHair);
      favThings.push("Chicken");
      console.log(favThings);
      // reverseFavs.push(favThings[2]);
      // reverseFavs.push(favThings[1]);
      // reverseFavs.push(favThings[0]);
      reverseFavs = favThings.reverse();
      console.log(reverseFavs);
  });
});


