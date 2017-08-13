var keyBindings = {49: "majestate-ninja", 50: "ninja-majestate", 51: "nu-pot-sa-inot",
                   52: "brebex", 53: "elemelix", 54: "taliana", 113: "republistica-interumana",
                   119: "omul-invizibil", 101: "infrarosu", 114: "unda-prin-zid", 116: "laba",
                   121: "mos-craciun", 97: "simt-mesajul-muzicii", 115: "americanii-nu-se-baga",
                   100: "un-fel-de-schen", 102:"am-facut-o-scoala", 103:"vorbesti-cu-mine"};

var samples =[ "ninja-majestate", "majestate-ninja", "elemelix", "taliana", "brebex", "nu-pot-sa-inot",
               "republistica-interumana", "omul-invizibil", "infrarosu", "unda-prin-zid", "laba",
               "mos-craciun", "simt-mesajul-muzicii", "americanii-nu-se-baga", "un-fel-de-schen",
               "am-facut-o-scoala", "vorbesti-cu-mine"];

ion.sound({
    sounds: [
        { name: "majestate-ninja", volume: 0.3},
        { name: "ninja-majestate", volume: 0.3},
        { name: "nu-pot-sa-inot", volume: 0.3}, 
        { name: "brebex", volume: 2.4},
        { name: "elemelix", volume: 2.4},
        { name: "taliana", volume: 2.4},
        { name: "republistica-interumana", volume: 1.6},
        { name: "omul-invizibil", volume: 1.8},
        { name: "infrarosu", volume: 1.6},
        { name: "unda-prin-zid", volume: 2},
        { name: "laba", volume: 10},
        { name: "mos-craciun", volume: 0.6},
        { name: "simt-mesajul-muzicii", volume: 1},
        { name: "americanii-nu-se-baga", volume: 1.8},
        { name: "un-fel-de-schen", volume: 2.4},
        { name: "am-facut-o-scoala", volume: 3},
        { name: "vorbesti-cu-mine", volume: 1.6}
    ],
    path: "sounds/",
    preload: true,
    multiplay: true,

});


$.each(samples, function( index, value ) {
  $("#"+value).click(function() {
    ion.sound.play(value);
  });
});

$.each(keyBindings, function( key, value ) {
  $(document).keypress(function(e) {
    if(e.which == key) {
        if (!e.metaKey && !e.ctrlKey) {
          $("#"+ value).addClass('active');
          ion.sound.play(value);
        }
    }
  });
  
  $(document).keyup(function(){
    $("#"+ value).removeClass('active');
  });
});
