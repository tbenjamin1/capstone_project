function ImageSetter(input, target) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      target.attr("src", e.target.result);
    };

    reader.readAsDataURL(input.files[0]);
  }
}

$(".imgInp").change(function () {
  var imgDiv = $(this).data("id");
  imgDiv = $("#" + imgDiv);
  ImageSetter(this, imgDiv);
});

const val = () => {
  let name = document.getElementById("name").value;
  let title = document.getElementById("title").value;
  let Date = document.getElementById("Date").value;
  let textarea = document.getElementById("textarea").value;
  let error = document.getElementById("error_message");
  //   let success = document.getElementById("success");
  let text;
  error.style.padding = "10px";

  if (name.length < 6) {
    text = "Name Should be more than 6 characters";
    error.innerHTML = text;
    return false;
  }
  if (title.length < 6) {
    text = "Your title is invalid.";
    error_message.innerHTML = text;
    return false;
  }
  if (textarea.length > 8) {
    text = "Password Should be more than 8 characters";
    error.innerHTML = text;
    return false;
  }

  let frm = document.getElementById("myform");
  frm.style.display = "none";
  let hid = document.getElementById("hid");
  hid.style.display = "none";
  let disp = document.getElementById("success");
  disp.style.display = "block";
  error.style.padding = "0px";
  // InsertData();
  return false;
};
