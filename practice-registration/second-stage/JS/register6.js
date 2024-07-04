const image_input = document.querySelector("#logo_image");
var uploaded_image;

image_input.addEventListener('change', function() {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        uploaded_image = reader.result;
        document.querySelector("#logo_input").style.backgroundImage =
            `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
});

const banner = document.querySelector("#banner_input");
var uploaded_image;
banner.addEventListener('change', function() {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        uploaded_image = reader.result;
        document.querySelector("#display_banner").style.backgroundImage =
            `url(${uploaded_image})`;
    });
    if (document.querySelector("#display_banner").style.backgroundImage != 'none') {
        document.getElementById('ex_img').style.opacity = 0;
    }
    if (document.querySelector("#display_banner").style.backgroundImage != 'none') {
        document.getElementById('banner_info').style.opacity = 0;
    }
    reader.readAsDataURL(this.files[0]);
});

const addBtn = document.getElementById('add_btn');
addBtn.addEventListener('click', function() {
    const divText = document.createElement('div');
    const textHolder = document.createElement('div');
    const subjectHead = document.createElement('p');
    const subjectBody = document.createElement('p');
    const dataSubjectHead = document.getElementById('display_message').value;
    const dataSubjectBody = document.getElementById('message_body').value;
    const pinImage = document.createElement('img');
    const imgCont = document.createElement('div');

    pinImage.style.width = '23px';
    pinImage.style.height = '23px';
    pinImage.style.position = 'relative';
    pinImage.src = './images/twemoji_pushpin.png';

    imgCont.style.background = '#FFD9D3';
    imgCont.style.height = '40px';
    imgCont.style.width = '40px';
    imgCont.style.display = 'flex';
    imgCont.style.justifyContent = 'center';
    imgCont.style.alignItems = 'center';
    imgCont.style.borderRadius = '50%';
    imgCont.style.position = 'relative';
    imgCont.appendChild(pinImage);

    divText.style.display = 'flex';
    divText.style.alignItems = 'flex-start';
    divText.style.justifyContent = 'flex-start';
    divText.style.flexDirection = 'column';
    divText.style.flexWrap = 'wrap';
    divText.style.position = 'relative';
    divText.style.left = '40px';
    divText.style.width = '664px';

    textHolder.style.display = 'flex';
    textHolder.style.alignItems = 'center';
    textHolder.style.justifyContent = 'flex-start';
    textHolder.style.gap = '410px';
    textHolder.style.wrap = 'wrap';

    subjectHead.style.fontWeight = 'bold';
    subjectBody.style.display = 'flex';
    subjectBody.style.wrap = 'row-wrap';
    subjectHead.innerHTML = dataSubjectHead;
    subjectHead.style.position = 'relative';
    subjectHead.style.bottom = '10px';
    subjectBody.style.position = 'relative';
    subjectBody.style.bottom = '45px';
    subjectBody.innerHTML = dataSubjectBody;

    divText.appendChild(subjectHead);
    divText.appendChild(subjectBody);

    textHolder.appendChild(divText);
    textHolder.appendChild(imgCont);
    document.getElementById('message_holder').appendChild(textHolder);

    imgCont.addEventListener('click', function() {
        textHolder.style.order = '1';
        textHolder.style.order = '2';
    });
});

const google = document.getElementById('google');
const facebook = document.getElementById('facebook');
const youtube = document.getElementById('youtube');
const instagram = document.getElementById('instagram');
const twitter = document.getElementById('twitter');

google.addEventListener('keypress', function(event) {
    if (event.key == 'Enter' && document.getElementById('google_url').innerHTML ==
        'https://www.google.com/') {
        event.preventDefault();
        document.getElementById('google_url').innerHTML += google.value;
    }
});

facebook.addEventListener('keypress', function(event) {
    if (event.key == 'Enter' && document.getElementById('facebook_url').innerHTML ==
        'http://www.facebook.com/') {
        event.preventDefault();
        document.getElementById('facebook_url').innerHTML += facebook.value;
    }
});

youtube.addEventListener('keypress', function(event) {
    if (event.key == 'Enter' && document.getElementById('youtube_url').innerHTML ==
        'https://www.youtube.com/') {
        event.preventDefault();
        document.getElementById('youtube_url').innerHTML += youtube.value;
    }
});

twitter.addEventListener('keypress', function(event) {
    if (event.key == 'Enter' && document.getElementById('twitter_url').innerHTML ==
        'http://www.twitter.com/') {
        event.preventDefault();
        document.getElementById('twitter_url').innerHTML += twitter.value;
    }
});

instagram.addEventListener('keypress', function(event) {
    if (event.key == 'Enter' && document.getElementById('instagram_url').innerHTML ==
        'https://www.instagram.com/') {
        event.preventDefault();
        document.getElementById('instagram_url').innerHTML += instagram.value;
    }
});

editor.document.designMode = "On";

function transform(option, argument) {
    editor.document.execCommand(option, true, argument);
};

const announcement = document.querySelector("#anncmnt");
var uploaded_image;

announcement.addEventListener('change', function() {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        uploaded_image = reader.result;
        document.querySelector("#item4_image").style.backgroundImage =
            `url(${uploaded_image})`;
    });

    reader.readAsDataURL(this.files[0]);
    if (document.querySelector("#item4_image").style.backgroundImage != 'none') {
        document.getElementById('annnce_img').style.opacity = 0;
    }
});