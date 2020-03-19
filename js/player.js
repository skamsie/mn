var sampleGroup1 = [
  { name: "majestate-ninja", label: "majestate ninja",
    volume: 0.4, keyLabel: 1, keyBinding: 49 },
  { name: "ninja-majestate", label: "ninja majestate",
    volume: 0.4, keyLabel: 2, keyBinding: 50 },
  { name: "nu-pot-sa-inot", label: "nu pot să inot la apă",
    volume: 0.4, keyLabel: 3, keyBinding: 51 },
  { name: "brebex", volume: 2.5, label: "brebex",
    keyLabel: 4, keyBinding: 52, spacer: 1 },
  { name: "elemelix", volume: 2.4, label: "elemelix",
    keyLabel: 5, keyBinding: 53, spacer: 1 },
  { name: "taliana", volume: 2.4, label: "taliană",
    keyLabel: 6, keyBinding: 54, spacer: 1 },
  { name: "republistica-interumana", label: "republistica interumană",
    keyLabel: "Q", volume: 1.6, keyBinding: 113 },
  { name: "omul-invizibil", label: "omul invizibil",
    keyLabel: "W", volume: 1.8, keyBinding: 119, spacer: 1 },
  { name: "infrarosu", label: "infraroșu",
    keyLabel: "E", volume: 1.6, keyBinding: 101, spacer: 1 },
  { name: "unda-prin-zid", label: "unda prin zid",
    keyLabel: "R", volume: 2, keyBinding: 114, spacer: 1 },
  { name: "laba", label: "laba",
    keyLabel: "T", volume: 10, keyBinding: 116, spacer: 1 },
  { name: "mos-craciun", label: "moș crăciun",
    keyLabel: "Y", volume: 0.6, keyBinding: 121, spacer: 1 },
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
    keyLabel: "H", volume: 1.5, keyBinding: 104 }
]

sampleGroup2 = [
  { name: "indragostita-sau-drogata", label: "îndrăgostită sau drogată",
    volume: 2.2, keyLabel: 1, keyBinding: 49 },
  { name: "empty-button", label: "",
    volume: 0.4, keyLabel: 2, keyBinding: 50, spacer: 2 },
  { name: "empty-button", label: "",
    volume: 0.4, keyLabel: 3, keyBinding: 51, spacer: 2 },
  { name: "empty-button", volume: 2.5, label: "",
    keyLabel: 4, keyBinding: 52, spacer: 2 },
  { name: "empty-button", volume: 2.5, label: "",
    keyLabel: 5, keyBinding: 53, spacer: 2 },
  { name: "empty-button", volume: 2.5, label: "",
    keyLabel: 6, keyBinding: 54, spacer: 2 },
  { name: "empty-button", volume: 2.5, label: "",
    keyLabel: "Q", keyBinding: 113, spacer: 2 },
  { name: "empty-button", volume: 2.5, label: "",
    keyLabel: "W", keyBinding: 119, spacer: 2 },
  { name: "empty-button", volume: 2.5, label: "",
    keyLabel: "E", keyBinding: 101, spacer: 2 },
  { name: "empty-button", volume: 2.5, label: "",
    keyLabel: "R", keyBinding: 114, spacer: 2 },
  { name: "empty-button", volume: 2.5, label: "",
    keyLabel: "T", keyBinding: 116, spacer: 2 },
  { name: "empty-button", volume: 2.5, label: "",
    keyLabel: "Y", keyBinding: 121, spacer: 2 },
  { name: "empty-button", volume: 2.5, label: "",
    keyLabel: "A", keyBinding: 97, spacer: 2 },
  { name: "empty-button", volume: 2.5, label: "",
    keyLabel: "S", keyBinding: 115, spacer: 2 },
  { name: "empty-button", volume: 2.5, label: "",
    keyLabel: "D", keyBinding: 100, spacer: 2 },
  { name: "empty-button", volume: 2.5, label: "",
    keyLabel: "F", keyBinding: 102, spacer: 2 },
  { name: "empty-button", volume: 2.5, label: "",
    keyLabel: "G", keyBinding: 103, spacer: 2 },
  { name: "empty-button", volume: 2.5, label: "",
    keyLabel: "H", keyBinding: 104, spacer: 2 }
]

sampleGroupIds = {
  "group-1": sampleGroup1,
  "group-2": sampleGroup2
}

ion.sound(
  {
    sounds: sampleGroup1.concat(sampleGroup2),
    path: "sounds/",
    preload: true,
    multiplay: true
  }
);

function enablePlay(sampleGroup) {
  $.each(sampleGroup, function(_, sample) {
    $("#".concat(sample.name)).click(function() {
      ion.sound.play(sample.name);
    });
  });
}

function showSampleButton(sample) {
  var spacer = sample.spacer ? "&nbsp;<br />".repeat(sample.spacer) : ""

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

function enableKeyBindings(sampleGroup) {
  $.each(sampleGroup, function(_, sample) {
    $(document).keypress(function(e) {
      if(e.which == sample.keyBinding && $("#".concat(sample.name)).is(":visible")) {
        console.log(sample)
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
}

function enableAll(sampleGroup) {
  enablePlay(sampleGroup);
  enableKeyBindings(sampleGroup);
}

$(document).ready(function() {
  $("#samples").html(showSampleGroup(sampleGroup1));
  enableAll(sampleGroup1);
})

$(".page-link").click(function() {
  var groupId = $(this).attr("id");
  var sampleGroup = sampleGroupIds[groupId];

  $("#samples").html(showSampleGroup(sampleGroup));
  enableAll(sampleGroup);
})
