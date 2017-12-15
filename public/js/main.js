
function device() {
  var width = get_physical_width();
  var height = get_physical_height();
  console.log(width);
  console.log(height);

  if (width > 5) {
    return "desktop";
  }

  return "mobile";
};

function style() {
  var device_type = device();
  console.log(device_type);

  if (device_type == "desktop") {
    var ret = style_desktop();
  }
  else {
    var ret = style_mobile();
  }
};

function style_desktop() {

  return 0;
}

function style_mobile() {

  return 0;
}

function get_physical_width() {
  var dpi_x = document.getElementById('dpi').offsetWidth;
  var width = document.body.clientWidth / dpi_x;
  return width;
};

function get_physical_height() {
  var dpi_y = document.getElementById('dpi').offsetHeight;
  var height = document.body.clientHeight / dpi_y;
  return height;
};
