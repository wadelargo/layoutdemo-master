let alertsDropdown = document.getElementById("alertsDropdown");
let alertDetails = document.getElementById("alertDetails");
alertDetails.style.display = "none";
alertsDropdown.addEventListener("click", () => {
    if (alertDetails.style.display == "none") {
        alertDetails.style.display = "";
        messageAlertDetails.style.display = "none";

    } else {
        alertDetails.style.display = "none";
    }
})



// collapse button function to toggle sidenav barr
function openNav() {
    if (document.getElementById("mySidenav").style.width === "63px" || document.getElementById("mySidenav").style.width === "") {
        document.getElementById("mySidenav").style.width = "250px";
    } else {
        if (window.screen.width <= 767) {
            document.getElementById("mySidenav").style.width = "";
        } else {
            document.getElementById("mySidenav").style.width = "63px";
        }
    }
    if (document.getElementById("leftright").style.width === "95.5%" || document.getElementById("leftright").style.width === "") {
        document.getElementById("leftright").style.width = "83.5%"
    } else {
        document.getElementById("leftright").style.width = "95.5%";
    }
    if (document.getElementById("navbar-fourth").style.width === "96%" || document.getElementById("navbar-fourth").style.width === "") {
        document.getElementById("navbar-fourth").style.width = "83.5%";
        console.log("83")
    } else if (document.getElementById("navbar-fourth").style.width === "78%") {
        document.getElementById("navbar-fourth").style.width = "65%";
        console.log("65")
    } else if (document.getElementById("navbar-fourth").style.width === "65%") {
        document.getElementById("navbar-fourth").style.width = "78%";
        console.log("78")
    } else {
        document.getElementById("navbar-fourth").style.width = "96%";
    }
    // if (document.getElementById("commeddiv").style.marginLeft === "1170px" || document.getElementById("commeddiv").style.marginLeft === ""){
    //   document.getElementById("commeddiv").style.marginLeft = "980px"
    // }
    // else if (document.getElementById("commeddiv").style.marginLeft === "900px" || document.getElementById("commeddiv").style.marginLeft === ""){
    //   document.getElementById("commeddiv").style.marginLeft = "700px"
    // }
    // else if(document.getElementById("commeddiv").style.marginLeft === "980px"){
    //   document.getElementById("commeddiv").style.marginLeft = "1170px";
    // }
    // else if (document.getElementById("commeddiv").style.marginLeft === "700px" || document.getElementById("commeddiv").style.marginLeft === ""){
    //   document.getElementById("commeddiv").style.marginLeft = "900px";
    //   console.log("900")
    // }
    if (document.getElementById("Appointment").style.marginLeft === "480px" || document.getElementById("Appointment").style.marginLeft === "") {
        document.getElementById("Appointment").style.marginLeft = "300px";
    } else if (document.getElementById("Appointment").style.marginLeft === "300px") {
        document.getElementById("Appointment").style.marginLeft = "480px"
    } else if (document.getElementById("Appointment").style.marginLeft === "180px") {
        document.getElementById("Appointment").style.marginLeft = "10px"
    } else if (document.getElementById("Appointment").style.marginLeft === "10px") {
        document.getElementById("Appointment").style.marginLeft = "180px"
    }
}

let adminSettingBox = document.getElementById("adminSettingBox");
adminSettingBox.style.display = "none";
let dropbtnMyfunction = document.getElementById("dropbtnMyfunction");
dropbtnMyfunction.addEventListener("click", () => {
    if (adminSettingBox.style.display === "none") {
        adminSettingBox.style.display = "";
    } else {
        adminSettingBox.style.display = "none";
    }
})

// *************************js for page transform
let main_sections=document.getElementById("main_sections");
let word_section=document.getElementById("word_section");
word_section.style.display="none";
let highlights_btn=document.getElementById("highlights_btn");
let document_btn=document.getElementById("document_btn");
highlights_btn.addEventListener("click",()=>{
    main_sections.style.display="flex";
    word_section.style.display="none";
})
document_btn.addEventListener("click",()=>{
    main_sections.style.display="none";
    word_section.style.display="flex";
})

// fade background when click on share folder
$(function(){
    $("#share_btn").click(function(){
        $(".fullscreen-container").fadeTo(200, 1);
    });
    $(".done_btn").click(function(){
        $(".fullscreen-container").fadeOut(200, 0);
    });
})


// rotate the pdf
let pdf_container=document.getElementById("pdf_container");

const rotatePdf=()=>{
    if (pdf_container.style.transform==="rotate(0deg)") {
        pdf_container.style.transform="rotate(90deg)";
        pdf_container.style.width="55%"
        pdf_container.style.height="auto"
        print_pdf.addEventListener("click",print_thePdf);
        zoomIn.addEventListener("click",zoomFunc);
        zoomOut.addEventListener("click",zoomOutFunc);

    }
    else if (pdf_container.style.transform==="rotate(90deg)") {
        pdf_container.style.transform="rotate(180deg)";
        pdf_container.style.width="auto"
        print_pdf.addEventListener("click",print_thePdf);
        zoomIn.addEventListener("click",zoomFunc);
        zoomOut.addEventListener("click",zoomOutFunc);

    }else if (pdf_container.style.transform==="rotate(180deg)") {
        pdf_container.style.transform="rotate(270deg)";
        pdf_container.style.width="55%"
        print_pdf.addEventListener("click",print_thePdf);
        zoomIn.addEventListener("click",zoomFunc);
        zoomOut.addEventListener("click",zoomOutFunc);

    }
    else{
        pdf_container.style.transform="rotate(0deg)";
        pdf_container.style.width="auto"
        print_pdf.addEventListener("click",print_thePdf);
        zoomIn.addEventListener("click",zoomFunc);
        zoomOut.addEventListener("click",zoomOutFunc);

    }
    pdf_container.style.overflow="scroll"
}

// zoom in pdf container page
let zoomIn=document.getElementById("zoomIn");
let zoomOut=document.getElementById("zoomOut");
let max_scale=0.8;
const zoomFunc=()=>{
    if (max_scale<=0.8) {
        max_scale=max_scale+0.08;
        pdf_container.style.transform=`scale(${max_scale})`;
    }else{
        pdf_container.style.transform=`scale(1)`;
    }
}
const zoomOutFunc=()=>{
    if (max_scale>=0) {
        max_scale=max_scale-0.08;
        pdf_container.style.transform=`scale(${max_scale})`;
    }else{
        pdf_container.style.transform=`scale(0)`;
    }
}
zoomIn.addEventListener("click",zoomFunc);
zoomOut.addEventListener("click",zoomOutFunc);

// print the pdf
let print_pdf=document.getElementById("print_pdf");
print_thePdf=()=>{
    var printContents = document.getElementById("pdf_container").innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    location.reload();
}
print_pdf.addEventListener("click",print_thePdf);

// text selection popup
function getSelected() {
	if(window.getSelection) { return window.getSelection(); }
	else if(document.getSelection) { return document.getSelection(); }
	else {
		var selection = document.selection && document.selection.createRange();
if(selection.text) { return selection.text; }
		return false;
	}
	return false;
}
/* create sniffer */
$(document).ready(function() {
	$('#pdf_container').mouseup(function(event) {
		var selection = getSelected();
        selection = $.trim(selection);
        if(selection != ''){
        $("span.popup-tag").css("display","flex");
        $("span.popup-tag").css("top",event.pageY-140);
        $("span.popup-tag").css("left",event.pageX-500);
        // $("span.popup-tag").text("Hello");
        }else{
        $("span.popup-tag").css("display","none");
        }
	});
});

// open message box
$(document).ready(function() {
    $("#msg_popUp").click(function(event){
        $("#popup-msg").css("display","flex");
        $("#popup-msg").css("top",event.pageY-140);
        $("#popup-msg").css("left",event.pageX-500);
    })
    $("#closeMsgBox").click(function(){
        $("#popup-msg").css("display","none");
    })
    $("#roundColor").click(function(event){
        $("#popup-colour").css("display","flex");
        $("#popup-colour").css("top",event.pageY-170);
        $("#popup-colour").css("left",event.pageX-600);
    })
})

// whenever click outside the box hide the element
document.addEventListener("mouseup",(e)=>{
    let popup_msg=document.getElementById("popup-msg");
    let popup_colour=document.getElementById("popup-colour");
    if (!popup_msg.contains(e.target)) {
        popup_msg.style.display="none";
    }
    if (!popup_colour.contains(e.target)) {
        popup_colour.style.display="none";
    }
})

// close doc edit box when click on cross
$(document).ready(function(){
    $("#closeDoc").click(function(){
        $("#new_doc_folder").css("display","none");
    })
    $(".doc_list").click(function(){
        $("#new_doc_folder").css("display","");
    })
})

// Generate and download the pdf when click on download
let download_pdf=document.getElementById("download_pdf");
let nameOfpdf=document.getElementById("nameOfpdf").innerText;

let generatePdf=(name_of_pdf)=>{
    let element=document.getElementById("pdf_container");
        const opt = {
            filename: `${name_of_pdf}`,
            margin: 2,
            image: {type: 'png', quality: 0.9},
            jsPDF: {format: 'letter', orientation: 'portrait'}
        };
        // New Promise-based usage:
        html2pdf().set(opt).from(element).save();
}

download_pdf.addEventListener("click",()=>{
    generatePdf(nameOfpdf);
});


// delete element in pdf folder list
let elementList=[];
function dltList(element) {
    $(".fullscreen-container1").fadeTo(200, 1);
    $("#ok_dlt").click(function(){
        element.remove();
        $(".fullscreen-container1").fadeOut(200,0);
        console.log(elementList);
    });
    $("#cancle_dlt").click(function(){
        $(".fullscreen-container1").fadeOut(200,0);
        console.log(elementList);
    });
}
// when click on delete button remove the element
let dltFolderList=()=>{
    let folder_list=document.querySelectorAll(".folder_list");
    for(let el of folder_list){
    el.childNodes[1].addEventListener("click",()=>{
        elementList.push(el);
        dltList(elementList[elementList.length-1]);
        elementList=[];
    })
}
}


// delete element in doc folder list
function dltList1(element) {
    $(".fullscreen-container1").fadeTo(200, 1);
    $("#ok_dlt").click(function(){
        element.remove();
        $(".fullscreen-container1").fadeOut(200,0);
    });
    $("#cancle_dlt").click(function(){
        $(".fullscreen-container1").fadeOut(200,0);
        console.log(elementList);
    });
}
// when click on delete button remove the element
let dltDocList=()=>{
    let doc_list=document.querySelectorAll(".doc_list");
    for(let el of doc_list){
        el.childNodes[3].addEventListener("click",()=>{
            dltList1(el);
        })
    }
}
dltDocList();


// function for the add the list to folder list
let addFile=(fName)=>{
    let list_file=document.getElementById("list_file");
    let li=document.createElement("li");
    li.classList.add("d-flex","folder_list");

    let div1=document.createElement("div");
    div1.classList.add("d-flex","icon_list","align-items-center");
    let span1=document.createElement('span');
    let attributeForSpan1={
        'class':"iconify",
        'data-icon':"ci:file-pdf",
        'style':'color:gray',
        'data-width':"35",
        'data-height':"35"
    }
    for(let key in attributeForSpan1){
        span1.setAttribute(key,attributeForSpan1[key]);
    }
    let div2=document.createElement("div");
    div2.classList.add("name_list","ms-2");
    let p=document.createElement("p");
    p.classList.add("file_name","m-1");
    p.innerText=fName;

    let div3=document.createElement("div");
    div3.classList.add("dlt_list","me-2");
    let span2=document.createElement("span");
    let attributeForSpan2={
        'class':"iconify delete_btn",
        'data-icon':"ant-design:delete-twotone",
        'data-width':"20",
        'data-height':"20"
    }
    for(let key in attributeForSpan2){
        span2.setAttribute(key,attributeForSpan2[key]);
    }
    li.append(div1,div3);
    div1.append(span1,div2);
    div2.append(p);
    div3.append(span2);
    list_file.append(li);
    console.log(li);
    dltFolderList();

}

// get name of File
$('input[type="file"]').change(function(e) {
    var fileName = e.target.files[0].name;
    console.log(fileName);
    addFile(fileName)
      // Inside find search element where the name should display (by Id Or Class)
});

// **************************text editor*********************************
// let word_text=document.getElementById("word_text");
function enableEditMode() {
    word_text.document.designMode = "on";
}
function Edit(command) {
    word_text.document.execCommand(command, false, null);
}
function execVal(command, value) {
    word_text.document.execCommand(command, false, value);
}
let insertURLBased=(command)=>{
    let url=prompt("enter url");
    word_text.document.execCommand(command, false, url);
}

