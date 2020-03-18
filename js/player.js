var audioSamples = [
  { name: "majestate-ninja", volume: 0.4, keyBinding: 49 },
  { name: "ninja-majestate", volume: 0.4, keyBinding: 50 },
  { name: "nu-pot-sa-inot", volume: 0.4, keyBinding: 51 },
  { name: "brebex", volume: 2.5, keyBinding: 52 },
  { name: "elemelix", volume: 2.4, keyBinding: 53 },
  { name: "taliana", volume: 2.4, keyBinding: 54 },
  { name: "republistica-interumana", volume: 1.6, keyBinding: 113 },
  { name: "omul-invizibil", volume: 1.8, keyBinding: 119 },
  { name: "infrarosu", volume: 1.6, keyBinding: 101 },
  { name: "unda-prin-zid", volume: 2, keyBinding: 114 },
  { name: "laba", volume: 10, keyBinding: 116 },
  { name: "mos-craciun", volume: 0.6, keyBinding: 121 },
  { name: "simt-mesajul-muzicii", volume: 1, keyBinding: 97 },
  { name: "americanii-nu-se-baga", volume: 1.8, keyBinding: 115 },
  { name: "un-fel-de-schen", volume: 2.4, keyBinding: 100 },
  { name: "am-facut-o-scoala", volume: 3, keyBinding: 102 },
  { name: "vorbesti-cu-mine", volume: 1.6, keyBinding: 103 },
  { name: "tre-sa-iau-un-pietroi", volume: 1.8, keyBinding: 104 }
]

ion.sound(
  {
    sounds: audioSamples,
    path: "sounds/",
    preload: true,
    multiplay: true,
  }
);


$.each(audioSamples, function(_, sample) {
  $("#".concat(sample.name)).click(function() {
    ion.sound.play(sample.name);
  });
});

$.each(audioSamples, function(_, sample) {
  $(document).keypress(function(e) {
    if(e.which == sample.keyBinding) {
        if (!e.metaKey && !e.ctrlKey) {
          $("#".concat(sample.name)).addClass("active");
          ion.sound.play(sample.name);
        }
    }
  });

  $(document).keyup(function(){
    $("#".concat(sample.name)).removeClass("active");
  });
});
