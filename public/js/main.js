
/*
  parent_class: div
  child_class: p
*/
function fit_font(parent_class, child_class) {
  var p_width = document.getElementsByClassName(parent_class)[0].clientWidth;
  var p_height = document.getElementsByClassName(parent_class)[0].clientHeight;
  // console.log("Parent width:", p_width);
  // console.log("Parent height:", p_height);

  var c_width = document.getElementsByClassName(child_class)[0].clientWidth;
  var c_height = document.getElementsByClassName(child_class)[0].clientHeight;
  // console.log("Child width: ", c_width);
  // console.log("Child height: ", c_height);

  var contain = "";
  if ((Math.abs(p_width - c_width)) < (Math.abs(p_height - c_height))) {
    contain = "height";
    document.getElementsByClassName(child_class)[0].style.width = p_width.toString() + "px";
  }
  else {
    contain = "width";
    document.getElementsByClassName(child_class)[0].style.height = p_height.toString() + "px";
  }

  var stop_width = p_width;
  var stop_height = p_height;
  // console.log("Stop width: ", stop_width);
  // console.log("Stop height: ", stop_height);

  var count = 0

  var previous_slope = ""
  var current_slope = ""
  var fit = false;
  while (!fit) {
    count += 1;
    if (count > 200) {
      console.log("Resizing error...");
      break;
    }

    var c_width = document.getElementsByClassName(child_class)[0].clientWidth;
    var c_height = document.getElementsByClassName(child_class)[0].clientHeight;
    // console.log("Child width: ", c_width);
    // console.log("Child height: ", c_height);

    var c_font = parseFloat(document.getElementsByClassName(child_class)[0].style.fontSize);
    // console.log("Child font size: ", c_font);

    if (contain == "height") {
      // console.log("Stop height: ", stop_height);
      if (c_height <= stop_height - 5) {
        document.getElementsByClassName(child_class)[0].style.fontSize = (c_font + 1).toString() + "px";
        current_slope = "upsampling"
      }
      else {
        document.getElementsByClassName(child_class)[0].style.fontSize = (c_font - 1).toString() + "px";
        current_slope = "downsampling"
      }

      // console.log("Current slope:", current_slope);
      // console.log("Previous slope:", previous_slope);

      if (current_slope == "downsampling" && previous_slope == "upsampling") {
        fit = true;
        break;
      }
      else if (current_slope == "upsampling" && previous_slope == "downsampling") {
        document.getElementsByClassName(child_class)[0].style.fontSize = (c_font - 1).toString() + "px";
        fit = true;
        break;
      }

      previous_slope = current_slope
    }
    else {
      // console.log("Stop width: ", stop_width);
      if (c_width <= stop_width - 5) {
        document.getElementsByClassName(child_class)[0].style.fontSize = (c_font + 1).toString() + "px";
        current_slope = "upsampling"
      }
      else {
        document.getElementsByClassName(child_class)[0].style.fontSize = (c_font - 1).toString() + "px";
        current_slope = "downsampling"
      }

      // console.log("Current slope:", current_slope);
      // console.log("Previous slope:", previous_slope);

      if (current_slope == "downsampling" && previous_slope == "upsampling") {
        fit = true;
        break;
      }
      else if (current_slope == "upsampling" && previous_slope == "downsampling") {
        document.getElementsByClassName(child_class)[0].style.fontSize = (c_font - 1).toString() + "px";
        fit = true;
        break;
      }

      previous_slope = current_slope
    }
  }

  var margin_top = (p_height - c_height) / 2;
  document.getElementsByClassName(child_class)[0].style.margin = "auto";
  document.getElementsByClassName(child_class)[0].style.marginTop = margin_top.toString() + "px";

};












// NOTE: everything below here is currently obsolete -- keeping for reference purposes

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
  var nav = document.getElementsByClassName("nav")[0];
  nav.style.top = "calc(5%)";
  nav.style.left = "calc(5%)";
  nav.style.width = "calc(90%)";
  nav.style.height = "calc(10%)";

  var avi = document.getElementsByClassName("avi")[0];
  avi.style.top = "calc(20%)";
  avi.style.left = "calc(5%)";
  avi.style.width = "calc(40%)";
  avi.style.height = "calc(40%)";

  var bio = document.getElementsByClassName("bio")[0];
  bio.style.top = "calc(20%)";
  bio.style.left = "calc(50%)";
  bio.style.width = "calc(45%)";
  bio.style.height = "calc(40%)";

  var services_left = document.getElementsByClassName("services-left")[0];
  services_left.style.top = "calc(60%)";
  services_left.style.left = "calc(5%)";
  services_left.style.width = "calc(25%)";
  services_left.style.height = "calc(35%)";

  var services_list_left_div = document.createElement("div");
  services_list_left_div.position = "relative";
  // services_list_left_div.display = "inline-block";
  services_list_left_div.style.left = "calc(0%)";
  services_list_left_div.style.width = "calc(40%)";

  var services_list_left = document.createElement("ul");
  add_li(services_list_left, "Website development");
  add_li(services_list_left, "Application development");
  add_li(services_list_left, "Data, data, data");
  services_list_left_div.appendChild(services_list_left);
  services_left.appendChild(services_list_left_div);

  var services_list_right_div = document.createElement("div");
  services_list_right_div.style.position = "relative";
  // services_list_right_div.style.display = "inline-block";
  services_list_right_div.style.left = "calc(55%)";
  services_list_right_div.style.width = "calc(40%)";

  var services_list_right = document.createElement("ul");
  add_li(services_list_right, "Automated solutions");
  add_li(services_list_right, "Cloud-based solutions");
  services_list_right_div.appendChild(services_list_right);
  services_left.appendChild(services_list_right_div);

  var services_right = document.getElementsByClassName("services-right")[0];
  services_right.style.top = "calc(60%)";
  services_right.style.left = "calc(50%)";
  services_right.style.width = "calc(25%)";
  services_right.style.height = "calc(35%)";

  return 0;
}

function style_mobile() {

  return 0;
}


function add_li(ul, text) {
  var li = document.createElement("li");
  var text = document.createTextNode(text);
  li.appendChild(text);
  ul.appendChild(li);
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
