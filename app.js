function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  const $result = $("#result");
  const email = $("#email").val();
  const $error =  $(".error");
  $result.text("");

  if (validateEmail(email)) {
    $result.text("Perfect! Thank you!");
    $result.css("color", "green");
  } else {
    $result.text("Please provide a valid email");
    $result.css("color", "hsl(0, 36%, 70%)");
    $error.toggle();
  }
  return false;
}

$("#validate").on("click", validate);
