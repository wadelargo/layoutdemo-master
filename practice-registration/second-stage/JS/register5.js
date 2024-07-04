const x = document.querySelector('.inpatient_item');
x.style.color = 'grey';
const noBed = document.querySelector('.no_bed');
noBed.style.color = 'grey';
const y = document.querySelector('.outpatient_item');
y.style.color = 'grey';
const z = document.querySelector('.laboratory_items');
z.style.color = 'grey';
const p = document.querySelector('.imgng_items');
p.style.color = 'grey';

const checkBtn = document.getElementById("inpatient_head");
for (i = 1; document.getElementById("in_input" + i) !== null; i++) {
    document.getElementById("in_input" + i).disabled = true;
}
checkBtn.addEventListener("click", function() {
    if (checkBtn.checked == false) {
        function disableAll() {
            for (i = 1; document.getElementById("in_input" + i) !== null; i++) {
                document.getElementById("in_input" + i).disabled = true;
            }
            x.style.color = 'grey';
            noBed.style.color = 'grey';

        }
        disableAll();
    } else {
        function ableAll() {
            for (i = 1; document.getElementById("in_input" + i) !== null; i++) {
                document.getElementById("in_input" + i).disabled = false;
            }
            x.style.color = 'black';
            noBed.style.color = 'black';

        };
        ableAll();
    }
});

const outBtn = document.getElementById("outpatient_head");
for (i = 1; document.getElementById("out_input" + i) !== null; i++) {
    document.getElementById("out_input" + i).disabled = true;
}
outBtn.addEventListener("click", function() {
    if (outBtn.checked == false) {
        function disable() {
            for (i = 1; document.getElementById("out_input" + i) !== null; i++) {
                document.getElementById("out_input" + i).disabled = true;
            };
            y.style.color = 'grey';
        };
        disable();
    } else {
        function able() {
            for (i = 1; document.getElementById("out_input" + i) !== null; i++) {
                document.getElementById("out_input" + i).disabled = false;
            };
            y.style.color = 'black';
        };
        able();
    }
});

const labBtn = document.getElementById("laboratory_head");
for (i = 1; document.getElementById("lab_input" + i) !== null; i++) {
    document.getElementById("lab_input" + i).disabled = true;
}
labBtn.addEventListener("click", function() {
    if (labBtn.checked == false) {
        function disable() {
            for (i = 1; document.getElementById("lab_input" + i) !== null; i++) {
                document.getElementById("lab_input" + i).disabled = true;
            };
            z.style.color = 'grey';
        };
        disable();
    } else {
        function able() {
            for (i = 1; document.getElementById("lab_input" + i) !== null; i++) {
                document.getElementById("lab_input" + i).disabled = false;
            };
            z.style.color = 'black';
        };
        able();
    }
});

const imgBtn = document.getElementById("imagingcentre_head");
for (i = 1; document.getElementById("imgng_input" + i) !== null; i++) {
    document.getElementById("imgng_input" + i).disabled = true;
}
imgBtn.addEventListener("click", function() {
    if (imgBtn.checked == false) {
        function disable() {
            for (i = 1; document.getElementById("imgng_input" + i) !== null; i++) {
                document.getElementById("imgng_input" + i).disabled = true;
            };
            p.style.color = 'grey';
        };
        disable();
    } else {
        function able() {
            for (i = 1; document.getElementById("imgng_input" + i) !== null; i++) {
                document.getElementById("imgng_input" + i).disabled = false;
            };
            p.style.color = 'black';

        };
        able();
    }
});

const otherbtn = document.getElementById('other_input');
document.getElementById('other_text').disabled = 'true';
otherbtn.addEventListener('click', function() {
    if (document.getElementById('other_text').disabled == true) {
        document.getElementById('other_text').disabled = false;
    } else {
        document.getElementById('other_text').disabled = true;
    }
});