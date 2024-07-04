//<********************************Files Section****************************************************************************************************************************************************************************************************>

// The buttons to start & stop stream and to capture the image
var btnStart = document.getElementById("btn-start");
var btnCapture = document.getElementById("btn-capture");

// The stream & capture
var stream = document.getElementById("stream");
var stream_1 = document.getElementById("stream-1");
//holds the content of videostream div
var capture = document.getElementById("capture");
//hold the content of capture
var snapshot = document.getElementById("snapshot");
var snapshot_1 = document.getElementById("snapshot-1");
var retake = document.getElementById("retake");
var btnClose = document.getElementById("btn-close");
var btnClose_1 = document.getElementById("btn-close-1");
var btnCancel = document.getElementById("btn-cancel");
var fileName = document.getElementById("file-name");
//hold the snapshot div

// The video stream
var cameraStream = null;

// Attach listeners
btnStart.addEventListener("click", startStreaming);
retake.addEventListener("click", startStreaming);

// Start Streaming
function startStreaming() {
    var mediaSupport = "mediaDevices" in navigator;
    document.getElementById("play-area-sub1").style.display = "block";
    document.getElementById("play-area-sub1-1").style.display = "block";

    if (mediaSupport && null == cameraStream) {
        navigator.mediaDevices
            .getUserMedia({ video: true })
            .then(function(mediaStream) {
                cameraStream = mediaStream;

                stream.srcObject = mediaStream;
                stream_1.srcObject = mediaStream;

                stream.play();
                stream_1.play();
            })
            .catch(function(err) {
                console.log("Unable to access camera: " + err);
            });
    } else {
        // alert('Your browser does not support media devices.');
        return;
    }
}
btnCapture.addEventListener("click", captureSnapshot);

var images = [];

function captureSnapshot() {
    const lastKnownCount = images.length;
    document.getElementById("play-area-sub1-1").style.display = "none";
    document.getElementById("play-area-sub-1").style.display = "block";

    if (null != cameraStream) {
        var ctx = capture.getContext("2d");
        var img = new Image();
        ctx.drawImage(stream, 0, 0, capture.width, capture.height);
        images.push(capture.toDataURL("image/png"));
        console.log(images);
        img.src = capture.toDataURL("image/png");
        img.width = 50;
        img.height = 50;

        // snapshot_1.innerHTML = '';
        const temp =
            `<div class="image_container d-flex justify-content-center position-relative">
            <img src="` + img.src + `" alt="Image">
            <span class="position-absolute deleteImage">&times;</span>
            </div>`;

        $("#snapshot-1").append(temp);
        LoadImages(lastKnownCount);
        //console.log("Capture", lastKnownCount);
    }
}

$(document).on("click", ".deleteImage", function(e) {
    const src = $(e.target).parent().children(':first-child').attr('src');
    const index = images.indexOf(src);
    if (index !== -1) {
        images.splice(index, 1);
        //console.log("images length",images.length);
        //console.log("images array",images);
        e.target.parentElement.remove();
        //console.log($('#imgContainer_'+index));
        $(".image-container").remove();
    }
    //console.log("images length",images.length)
    const lastKnownCount = images.length;
    LoadImages(0);
    //console.log("Delete", lastKnownCount);
});

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

//function for file upload input on change
var uploadImages = [];

function image_select() {
    const lastKnownCount = images.length;
    var image = document.getElementById('image').files;
    for (i = 0; i < image.length; i++) {
        if (image[i].name) {
            uploadImages.push({
                "name": image[i].name,
                "url": URL.createObjectURL(image[i]),
                "file": image[i],
            });
            images.push(URL.createObjectURL(image[i]));
        } else {
            alert("Please select all files at a time.");
        }
    }

    document.getElementById('uploadedfiles').innerHTML = image_show();
    LoadImages(lastKnownCount);
    console.log("Upload", lastKnownCount);
}

function image_show() {
    var image = "";
    uploadImages.forEach((i) => {
        image +=
            `<div class="image_container d-flex justify-content-center position-relative">
            <img src="` + i.url + `" alt="Image">
            <span class="position-absolute" onclick="delete_image(` + uploadImages.indexOf(i) + `)">&times;</span>
            </div>`;
    })
    return image;
}

function delete_image(e) {

    console.log("delete_image called at", uploadImages)
    console.log("spliced image at", e)
    uploadImages.splice(e, 1);
    if (e !== -1) {
        images.splice(e, 1);
        //console.log("images length",images.length);
        //console.log("images array",images);
        //console.log($('#imgContainer_'+e));
        $(".image-container").remove();
    }
    LoadImages(0);

    document.getElementById('uploadedfiles').innerHTML = image_show();


}

//<*********************************Image Popup functionalities**********************************************************************************>
var CurrentBadge = null;
var picture;

function LoadSavedComments(picture) {
    $(".k-animation-container").remove();
    picture.parent().children().not(".image").remove();
    picture.parent().off();

    let points = picture.data("points");
    if (points === undefined) {
        points = [];
        picture.attr("data-points", JSON.stringify(points));
    }

    const imageId = picture[0].id;

    for (i = 0; i < points.length; i++) {
        const point = points[i];
        const left = point.left - 15;
        const top = point.top - 15;
        const txt = point.data;

        picture
            .parent()
            .append(
                `<span class="comment-badge" id="comment-badge-${imageId}-${i}" style="top:${top}px;left:${left}px" comment="${txt}" data-index=${i}>${
          i + 1
        }</span>`
            );

        $("#comment-badge-" + imageId + "-" + i).kendoBadge({
            themeColor: "warning",
            shape: "pill",
            size: "large",
        });

        $("#comment-badge-" + imageId + "-" + i).kendoTooltip({
            content: txt,
            width: 120,
            position: "top",
            animation: {
                open: {
                    effects: "zoom",
                    duration: 150,
                },
            },
        });

        $("#dvPrintComment").html("<table></table>");
        points.map((point, index) => {
            $("#dvPrintComment").append(
                "<tr><td id='index'>" +
                (index + 1) +
                "</td><td id='data'>" +
                point.data +
                "</td></tr>"
            );
        });
    }
}

function onShow() {
    $("#editDeleteModal").show();
}

function ZoomIn(picture) {
    const currWidth = picture.width;
    if (currWidth == 700) return false;
    else {
        picture.style.width = currWidth + 100 + "px";
    }
}

function ZoomOut(picture) {
    const currWidth = picture.width;
    if (currWidth == 100) return false;
    else {
        picture.style.width = currWidth - 100 + "px";
    }
}

function openFullscreen() {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
}

function ShowTag() {
    $("#commentTags").show();
}

const tags = [];

function LoadImages(startPoint) {
    const scrollview = $("#scrollView").data("kendoScrollView");
    if (scrollview !== undefined) {
        // Remove the element that was deleted
        const copiedElements = $(".k-scrollview-wrap")[0].innerHTML;
        scrollview.destroy();
        $("#scrollView").html("");
        $("#scrollView").append(copiedElements);
    }

    for (let index = startPoint; index < images.length; index++) {
        console.log("index of uploaded loaded image", index);
        const element =
            '<div class="container image-container" data-role="page" id="imgContainer_' +
            index +
            '"><div class="row image-row"><div class="col data-tagging-container"><img id="image_' +
            index +
            '" src="' +
            images[index] +
            '" data-points="[]" class="image" /></div></div><div class="row rowFileName" id="rowFileName"><div class="col"><span class="file-name"><i class="fa fa-file-image-o" aria-hidden="true"></i>image.name."' +
            index +
            '".jpg</span></div></div></div>';
        $("#scrollView").append(element);
    }

    picture = $("#image_0");

    function onScrollChange(e) {
        picture = $("#image_" + e.nextPage);
        LoadSavedComments(picture);
    }

    $("#scrollView").kendoScrollView({
        enablePager: true,
        contentHeight: "100%",
        change: onScrollChange,
    });
}

$(document).on("click", ".image", function(e) {
    picture = $("#" + e.target.id);
    const x = e.offsetX;
    const y = e.offsetY;
    let data = "";

    kendo.prompt("Add a comment", "").then(function(data) {
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
    actions: [{
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

$(document).on("dblclick", ".comment-badge", function(e) {
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

$("button[name='zoomIn']").click(function(e) {
    ZoomIn(picture[0]);
});

$("button[name='zoomOut']").click(function(e) {
    ZoomOut(picture[0]);
});

let deg = 0;
$("button[name='rotate']").on("click", function(e) {
    const direction = e.currentTarget.getAttribute("direction");
    deg = direction === "left" ? deg - 90 : deg + 90;
    $(picture).css({
        "-webkit-transform": "rotate(" + deg + "deg)",
        "-moz-transform": "rotate(" + deg + "deg)",
        transform: "rotate(" + deg + "deg)",
    });
});

$("button[name='download']").click(function() {
    window.print();
});

$("button[name='share']").click(function() {
    console.log("Share");
});

tags.map((tag) => {
    $("#dvTags").append("<strong class='tag'>#" + tag + "</strong>");
});

$("#btnAddTags").click(function() {
    ShowTag();
});

$("#commentTags").on("keypress", function(e) {
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

btnImagePopup = $("#btnImagePopup");

btnImagePopup.click(function() {
    myWindow.data("kendoWindow").open();
    // btnImagePopup.fadeOut();
});

function onClose() {
    btnImagePopup.fadeIn();
}


myWindow.kendoWindow({
    width: "600px",
    title: "Capture Image",
    visible: false,
    actions: ["Pin", "Minimize", "Maximize", "Close"],
    close: onClose,
}).data("kendoWindow").center();
