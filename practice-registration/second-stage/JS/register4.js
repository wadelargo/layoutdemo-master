var tagBtn = document.getElementById('tag_btn');

tagBtn.addEventListener('click', function() {
    var pTag = document.createElement('p');
    const closeIcon = '<span class="material-symbols-outlined id="cls">cancel</span>';
    pTag.innerHTML += document.getElementById('spcl_input').value;
    if (pTag.innerHTML != '' && pTag.innerHTML != isNaN) {
        pTag.innerHTML += closeIcon;
        pTag.style.background = '#E2E2E2';
        pTag.style.borderRadius = '5px';
        pTag.style.fontSize = '14px';
        pTag.style.height = '32px';
        pTag.style.width = 'max-content';
        pTag.style.display = 'flex';
        pTag.style.alignItems = 'center';
        pTag.style.justifyContent = 'center';
        pTag.style.gap = '10px';
        pTag.style.padding = '3px';
        document.getElementById('tagdisplay').appendChild(pTag);
    }
    pTag.addEventListener('click', function() {
        pTag.remove();
    });
});
// const closeIcon=document.createElement('<span class="material-symbols-outlined">cancel</span>')