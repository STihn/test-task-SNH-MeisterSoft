



function showVector() {
    let Vector = subtitleVector.innerHTML;
    showProducts.innerHTML =  Vector;
    };

function showTestIT() {  
    let TestIT = subtitleTestIT.innerHTML;
    showProducts.innerHTML =  TestIT;
    };

function showBIMeister() {  
    let BIMeister = subtitleBIMeister.innerHTML;
    showProducts.innerHTML =  BIMeister;
    };

productsVector.addEventListener('click', showVector);
productsTestIT.addEventListener('click', showTestIT);
productsBIMeister.addEventListener('click', showBIMeister);


