{
    const ins = document.getElementById('ins_modal1');
    const ins2 = document.getElementById('ins_modal2');
    const ins3 = document.getElementById('ins_modal3');
    const ins4 = document.getElementById('ins_modal4');

    const instruction_modal1 = document.getElementById('instruction_1');
    const instruction_modal2 = document.getElementById('instruction_2');
    const instruction_modal3 = document.getElementById('instruction_3');
    const instruction_modal4 = document.getElementById('instruction_4');

    ins.addEventListener('click', function() {
        if (instruction_modal1.style.display != 'none') {
            instruction_modal1.style.display = 'none';
            instruction_modal2.style.display = 'none';
            instruction_modal3.style.display = 'none';
            instruction_modal4.style.display = 'none';
        } else {
            instruction_modal1.style.display = 'flex';
            instruction_modal2.style.display = 'none';
            instruction_modal3.style.display = 'none';
            instruction_modal4.style.display = 'none';
        }
    });

    ins2.addEventListener('click', function() {
        if (instruction_modal2.style.display != 'none') {
            instruction_modal2.style.display = 'none';
            instruction_modal1.style.display = 'none';
            instruction_modal3.style.display = 'none';
            instruction_modal4.style.display = 'none';
        } else {
            instruction_modal2.style.display = 'flex';
            instruction_modal1.style.display = 'none';
            instruction_modal3.style.display = 'none';
            instruction_modal4.style.display = 'none';
        }
    });

    ins3.addEventListener('click', function() {
        if (instruction_modal3.style.display != 'none') {
            instruction_modal3.style.display = 'none';
        } else {
            instruction_modal3.style.display = 'flex';
            instruction_modal1.style.display = 'none';
            instruction_modal2.style.display = 'none';
            instruction_modal4.style.display = 'none';
        }
    });

    ins4.addEventListener('click', function() {
        if (instruction_modal4.style.display != 'none') {
            instruction_modal4.style.display = 'none';
        } else {
            instruction_modal4.style.display = 'flex';
            instruction_modal1.style.display = 'none';
            instruction_modal2.style.display = 'none';
            instruction_modal3.style.display = 'none';
        }
    });
}