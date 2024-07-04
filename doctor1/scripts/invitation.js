const pending = document.getElementById('pending')
pending.style.borderBottom = '2px solid #0997FF'
const accepted = document.getElementById('accepted')
accepted.addEventListener('click', function () {
    if (accepted.style.borderBottom != '2px solid #0997FF') {
        accepted.style.borderBottom = '2px solid #0997FF'
            pending.style.borderBottom = 'none'
    }
    const para = document.createElement('p')
    if (document.getElementById('ih').appendChild != para) {
        para.style.fontSize = '15px'
        para.style.fontWeight= '300'
                para.innerHTML = "Invite others to join your workspace.You can also allow members to sign up using your company's email domain. Setup your email domain."
                document.getElementById('ih').appendChild(para)
    }    
})
pending.addEventListener('click', function () {
    if (pending.style.borderBottom != '2px solid #0997FF') {
        pending.style.borderBottom = '2px solid #0997FF'
            accepted.style.borderBottom = 'none'
    }
    const x = document.getElementById('ih')
    x.removeChild(x.lastElementChild)
})