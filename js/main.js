
$(document).ready(function(){
  $("form").validate({
    rules: {
      "cm-fo-irdkr": {
        required: function(element) {
          return $("#country").val() === "112267";
        }
      }
    }
  });
});