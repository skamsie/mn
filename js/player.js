// https://stackoverflow.com/a/4386514/2535477
// cleanup event handlers for specific type of event
var _eventHandlers = {}; // somewhere global

function addListener(node, event, handler, capture) {
  if(!(node in _eventHandlers)) {
    // _eventHandlers stores references to nodes
    _eventHandlers[node] = {};
  }

  if(!(event in _eventHandlers[node])) {
    // each entry contains another entry for each event type
    _eventHandlers[node][event] = [];
  }

  // capture reference
  _eventHandlers[node][event].push([handler, capture]);
  node.addEventListener(event, handler, capture);
}

function removeAllListeners(node, event) {
  if(node in _eventHandlers) {
    var handlers = _eventHandlers[node];

    if(event in handlers) {
      var eventHandlers = handlers[event];
      for(var i = eventHandlers.length; i--;) {
        var handler = eventHandlers[i];
        node.removeEventListener(event, handler[0], handler[1]);
      }
    }
  }
}

ion.sound(
  {
    sounds: sampleGroup1.concat(sampleGroup2)
      .filter(function(e) { return !e.name.startsWith("empty-button") }),
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
  var disabled = sample.name.startsWith("empty-button") ? "disabled" : ""

  return "<div class=button-pair>" +
    "<button id=" + sample.name + " class=sample-button>" + sample.label +
      "<br />" + spacer + "<strong>" + sample.keyLabel + "</strong>" +
    "</button>" +
    "<form method='get' action='sounds_zip/" + sample.name + ".zip'>" +
      "<button class=download-button type='submit'" + disabled + "><img src='images/download-icon.png' width=12 ></button>" +
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
function enableKeyBindings(e, sampleGroup) {
  $.each(sampleGroup, function(_, sample) {
    if(
      e.which == sample.keyBinding &&
        $("#".concat(sample.name)).is(":visible") &&
        !(sample.name).startsWith("empty-button")
    ) {
      if (!e.metaKey && !e.ctrlKey) {
        $("#".concat(sample.name)).addClass("active");
        ion.sound.play(sample.name);
      }
    }

    $(document).keyup(function(){
      $("#".concat(sample.name)).removeClass("active");
    });
  });
}

$(document).ready(function() {
  $("#samples").html(showSampleGroup(sampleGroup1));
  $("#group-1").css("background-color", "#c8c8c8");

  enablePlay(sampleGroup1);
  addListener(
    document, "keypress",
    function (e) { enableKeyBindings(e, sampleGroup1) }, false
  );
})

document.addEventListener("keypress", switchSampleGroup);

function switchSampleGroup(e) {
  var sampleGroupId = "group-".concat(e.key);

  if(sampleGroupId in sampleGroupIds) {
    $("#".concat(sampleGroupId)).click()
  }
}

$(".page-link").click(function() {
  var groupId = $(this).attr("id");
  var sampleGroup = sampleGroupIds[groupId];

  $(".page-link").css("background-color", "white");
  $("#".concat(groupId)).css("background-color", "#c8c8c8");

  $("#samples").html(showSampleGroup(sampleGroup));

  enablePlay(sampleGroup);

  removeAllListeners(document, "keypress");
  addListener(
    document, "keypress",
    function (e) { enableKeyBindings(e, sampleGroup) }, false
  );
})
