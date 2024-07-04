var btnStart = document.getElementById("btn-start");
var btnCapture = document.getElementById("btn-capture");
var stream = document.getElementById("stream");
var stream_1 = document.getElementById("stream-1");
var capture = document.getElementById("capture");
var snapshot = document.getElementById("snapshot");
var snapshot_1 = document.getElementById("snapshot-1");
var retake = document.getElementById("retake");
var btnClose = document.getElementById("btn-close");
var btnClose_1 = document.getElementById("btn-close-1");
var btnCancel = document.getElementById("btn-cancel");
var fileName = document.getElementById("file-name");
var cameraStream = null;

btnStart.addEventListener("click", startStreaming);
retake.addEventListener("click", startStreaming);

function startStreaming() {
  var mediaSupport = "mediaDevices" in navigator;
  document.getElementById("play-area-sub1").style.display = "block";
  document.getElementById("play-area-sub1-1").style.display = "block";

  if (mediaSupport && null == cameraStream) {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(function (mediaStream) {
        cameraStream = mediaStream;

        stream.srcObject = mediaStream;
        stream_1.srcObject = mediaStream;

        stream.play();
        stream_1.play();
      })
      .catch(function (err) {
        console.log("Unable to access camera: " + err);
      });
  } else {
    // alert('Your browser does not support media devices.');

    return;
  }
}
btnCapture.addEventListener("click", captureSnapshot);

function captureSnapshot() {
  document.getElementById("play-area-sub1-1").style.display = "none";
  document.getElementById("play-area-sub-1").style.display = "block";

  if (null != cameraStream) {
    var ctx = capture.getContext("2d");
    var img = new Image();

    ctx.drawImage(stream, 0, 0, capture.width, capture.height);

    img.src = capture.toDataURL("image/png");
    img.width = 200;
    img.height = 150;

    snapshot_1.innerHTML = "";

    snapshot_1.appendChild(img);
  }
}
btnClose.addEventListener("click", stopStreaming);
btnClose_1.addEventListener("click", stopStreaming);
btnCancel.addEventListener("click", stopStreaming);
btnCapture.addEventListener("click", stopStreaming);

function stopStreaming() {
  if (null != cameraStream) {
    var track = cameraStream.getTracks()[0];

    track.stop();

    stream_1.load();

    cameraStream = null;
  }
}
stopStreaming();

function loadFile(event) {
  var img = document.createElement("img");
  img.src =
    "https://img.icons8.com/fluency-systems-regular/48/000000/edit--v1.png";
  img.setAttribute("id", "filesetting");
  var src = document.getElementById("filehead");
  src.appendChild(img);
  document.getElementById("filesetting").remove();
  document.getElementById("uploading").style.display = "block";
  var f = document.getElementById("file");
  if (f.files.length > 0) {
    for (var j = 0; j <= f.files.length - 1; j++) {
      var id = "upload_" + j;
      var image = document.createElement("img");
      image.setAttribute("width", "150px");
      image.setAttribute("id", id);
      image.src = URL.createObjectURL(event.target.files[j]);
      document.getElementById("uploadedfiles").appendChild(image);
      console.log("uploaded image are", image);
    }
  } else {
    alert("Please select all files at a time.");
  }
}

$(document).ready(function () {
  LoadImages();
  $("#snapshot-1").on("click", function () {
    $(".image").attr("src", $(this).find("img").attr("src"));
    $("#example").show();
  });
  $("#output").on("click", function () {
    $(".image").attr("src", $(this).find("img").attr("src"));
    $("#example-1").show();
  });
  var CurrentBadge = null;
  var picture = $("#image_0");
  LoadSavedComments(picture);
  $(document).on("click", ".image", function (e) {
    picture = $("#" + e.target.id);
    const x = e.offsetX;
    const y = e.offsetY;
    let data = "";
    kendo.prompt("Add a comment", "").then(function (data) {
      if (data !== null && data.trim() !== "") {
        const _new = {
          left: x,
          top: y,
          data: data,
        };
        const points = picture.data("points");
        points.push(_new);
        picture.attr("data-points", JSON.stringify(points));
        LoadSavedComments(picture);
      }
    });
  });
  $("#editDeleteModal").kendoDialog({
    title: "Update/Delete Comment",
    closable: true,
    modal: true,
    content: '<input id="txtUpdateComment" />',
    actions: [
      {
        text: "CANCEL",
      },
      {
        text: "UPDATE",
        action: onUpdate,
      },
      {
        text: "DELETE",
        primary: true,
        action: onDelete,
      },
    ],
    show: onShow,
  });
  $("#txtUpdateComment").kendoTextBox({
    placeholder: "Comment",
  });
  $(document).on("dblclick", ".comment-badge", function (e) {
    CurrentBadge = $(this);
    const getComment = e.target.attributes[3].value;
    $("#txtUpdateComment").val(getComment);
    $("#editDeleteModal").data("kendoDialog").open();
  });

  function onDelete() {
    const index = parseInt(CurrentBadge.data("index"));
    const points = picture.data("points");
    points.splice(index, 1);
    picture.attr("data-points", JSON.stringify(points));
    LoadSavedComments(picture);
  }
  function onUpdate() {
    const index = parseInt(CurrentBadge.data("index"));
    const points = picture.data("points");
    const updatedComment = $("#txtUpdateComment").val();
    if (updatedComment !== null && updatedComment.trim() !== "") {
      points[index].data = updatedComment;
      picture.attr("data-points", JSON.stringify(points));
      LoadSavedComments(picture);
    }
  }
  $("button[name='zoomIn']").click(function (e) {
    ZoomIn(picture[0]);
  });
  $("button[name='zoomOut']").click(function (e) {
    ZoomOut(picture[0]);
  });
  let deg = 0;
  $("button[name='rotate']").on("click", function (e) {
    const direction = e.currentTarget.getAttribute("direction");
    deg = direction === "left" ? deg - 90 : deg + 90;
    $(picture).css({
      "-webkit-transform": "rotate(" + deg + "deg)",
      "-moz-transform": "rotate(" + deg + "deg)",
      transform: "rotate(" + deg + "deg)",
    });
  });
  $("button[name='download']").click(function () {
    window.print();
  });
  $("button[name='share']").click(function () {
    console.log("Share");
  });
  $("button[name='delete']").click(function () {
    $(picture).remove();
  });

  function onScrollChange(e) {
    picture = $("#image_" + e.nextPage);
  }
  tags.map((tag) => {
    $("#dvTags").append("<strong class='tag'>#" + tag + "</strong>");
  });
  $("#btnAddTags").click(function () {
    ShowTag();
  });
  $("#commentTags").on("keypress", function (e) {
    if (e.keyCode == 13) {
      const getTag = $("#commentTags").val().trim();
      tags.push(getTag);
      $("#dvTags").append(
        "<strong class='badge bg-primary tag'>#" + getTag + "</strong>"
      );
      $("#commentTags").val("");
      return false;
    }
  });
  var myWindow = $("#window");

  snapshotImgPopup = $("#snapshot-1");
  snapshotImgPopup.click(function () {
    myWindow.data("kendoWindow").open();
    snapshotImgPopup.fadeOut();
  });

  function onClose() {
    snapshotImgPopup.fadeIn();
  }
  myWindow
    .kendoWindow({
      width: "600px",
      title: "Capture Image",
      visible: false,
      actions: ["Pin", "Minimize", "Maximize", "Close"],
      close: onClose,
    })
    .data("kendoWindow")
    .center();
  $("#scrollView").kendoScrollView({
    enablePager: true,
    contentHeight: "100%",
    change: onScrollChange,
  });
  var myWindow_1 = $("#window-1");
  outputPopup = $("#output");
  outputPopup.click(function () {
    myWindow_1.data("kendoWindow").open();
    outputPopup.fadeOut();
  });

  function onClose() {
    outputPopup.fadeIn();
  }
  myWindow_1
    .kendoWindow({
      width: "600px",
      title: "Capture Image",
      visible: false,
      actions: ["Pin", "Minimize", "Maximize", "Close"],
      close: onClose,
    })
    .data("kendoWindow")
    .center();
  $("#scrollView-1").kendoScrollView({
    enablePager: true,
    contentHeight: "100%",
    change: onScrollChange,
  });
});
