function clinical() {
    const clinicalData = new Object();
    clinicalData.clinical_name = document.getElementById('clinical_name').value;
    clinicalData.clinical_address = document.getElementById('clinical_address').value;
    clinicalData.clinical_state = document.getElementById('clinical_state').value;
    clinicalData.clinical_district = document.getElementById('clinical_district').value;
    clinicalData.clinical_village = document.getElementById('clinical_state').value;
    clinicalData.clinical_pin = document.getElementById('clinical_pin').value;
    clinicalData.clinical_std = document.getElementById('clinical_std').value;
    clinicalData.clinical_tele = document.getElementById('clinical_tele').value;
    clinicalData.clinical_mobile = document.getElementById('clinical_mobile').value;
    clinicalData.clinical_email = document.getElementById('clinical_email').value;

    var retrievedObject = localStorage.getItem(clinicalData.key);
    console.log('retrievedObject: ', JSON.parse(retrievedObject));
};
clinical();