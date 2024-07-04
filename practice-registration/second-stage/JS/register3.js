const autoFill = document.getElementById('person_ch');
autoFill.addEventListener('change', function() {
    if (autoFill.checked == true) {
        document.getElementById('person_email').value =
            document.getElementById('owner_email').value;

        document.getElementById('person_name').value =
            document.getElementById('owner_name').value;

        document.getElementById('person_std').value =
            document.getElementById('owner_std').value;

        document.getElementById('person_tele').value =
            document.getElementById('owner_tele').value;

        document.getElementById('person_mobile').value =
            document.getElementById('owner_mobile').value;
    } else {
        document.getElementById('person_email').value = '';
        document.getElementById('person_name').value = '';
        document.getElementById('person_std').value = '';
        document.getElementById('person_tele').value = '';
        document.getElementById('person_mobile').value = '';
    }
});