var audioSamples = [
  { name: "majestate-ninja", label: "majestate ninja",
    volume: 0.4, keyLabel:1, keyBinding: 49 },
  { name: "ninja-majestate", label: "ninja majestate",
    volume: 0.4, keyLabel: 2, keyBinding: 50 },
  { name: "nu-pot-sa-inot", label: "nu pot să inot la apă",
    volume: 0.4, keyLabel: 3, keyBinding: 51 },
  { name: "brebex", volume: 2.5, label: "brebex",
    keyLabel: 4, keyBinding: 52, spacer: true },
  { name: "elemelix", volume: 2.4, label: "elemelix",
    keyLabel: 5, keyBinding: 53, spacer: true },
  { name: "taliana", volume: 2.4, label: "taliană",
    keyLabel: 6, keyBinding: 54, spacer: true },
  { name: "republistica-interumana", label: "republistica interumană",
    keyLabel: "Q", volume: 1.6, keyBinding: 113 },
  { name: "omul-invizibil", label: "omul invizibil",
    keyLabel: "W", volume: 1.8, keyBinding: 119, spacer: true },
  { name: "infrarosu", label: "infraroșu",
    keyLabel: "E", volume: 1.6, keyBinding: 101, spacer: true },
  { name: "unda-prin-zid", label: "unda prin zid",
    keyLabel: "R", volume: 2, keyBinding: 114, spacer: true },
  { name: "laba", label: "laba",
    keyLabel: "T", volume: 10, keyBinding: 116, spacer: true },
  { name: "mos-craciun", label: "moș crăciun",
    keyLabel: "Y", volume: 0.6, keyBinding: 121, spacer: true },
  { name: "simt-mesajul-muzicii", label: "simt mesajul muzicii",
    keyLabel: "A", volume: 1, keyBinding: 97 },
  { name: "americanii-nu-se-baga", label: "americanii nu se bagă",
    keyLabel: "S", volume: 1.8, keyBinding: 115 },
  { name: "un-fel-de-schen", label: "un fel de schen",
    keyLabel: "D", volume: 2.4, keyBinding: 100 },
  { name: "am-facut-o-scoala", label: "am facut o școală",
    keyLabel: "F", volume: 3, keyBinding: 102 },
  { name: "vorbesti-cu-mine", label: "vorbești cu mine",
    keyLabel: "G", volume: 1.6, keyBinding: 103 },
  { name: "tre-sa-iau-un-pietroi", label: "tre să iau un pietroi",
    keyLabel: "H", volume: 1.8, keyBinding: 104 }
]

ion.sound(
  {
    sounds: audioSamples,
    path: "sounds/",
    preload: true,
    multiplay: true,
  }
);

function playSound() {
  $.each(audioSamples, function(_, sample) {
    $("#".concat(sample.name)).click(function() {
      ion.sound.play(sample.name);
    });
  });
}

function showSampleButton(sample) {
  var spacer = sample.spacer ? "&nbsp;<br />" : ""

  return "<div class=button-pair>" +
    "<button id=" + sample.name + " class=sample-button>" + sample.label +
      "<br />" + spacer + "<strong>" + sample.keyLabel + "</strong>" +
    "</button>" +
    "<form method='get' action='sounds_zip/" + sample.name + ".zip'>" +
      "<button class=download-button type='submit'><img src='images/download-icon.png' width=12 ></button>" +
    "</form>" +
  "</div>"
}

function showSampleGroup(sampleGroup) {
  var buttons = "";

  $.each(sampleGroup, function(_, sample) {
    buttons += showSampleButton(sample)
  });

  return buttons
}

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

$(document).ready(function() {
  $("#samples").html(
    showSampleGroup(audioSamples)
  )

  playSound();
})
