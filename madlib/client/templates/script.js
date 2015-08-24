Meteor.startup(function() {
    $("#submit-btn").click(function() {
      var exclamation = $("#exclamation").val();
      var adverb = $("#adverb").val();
      var noun = $("#noun").val();
      var verb = $("#verb").val();

      var madlib = "'" + exclamation + "!' he said as he " + 
      adverb + " jumped onto his " + noun + " and " +
      verb + " into the sunset.";

      $("mlOutput").hide();

      $("#mlOutput").text(madlib).fadeIn("slow").css ("color","#0000FF");

    });
});

