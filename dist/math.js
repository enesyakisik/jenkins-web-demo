// Basit matematik fonksiyonları
function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

// Browser'da da kullanabilelim diye:
if (typeof module !== "undefined") {
    module.exports = { add, multiply };
}
