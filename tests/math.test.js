const assert = require("assert");
const { add, multiply } = require("../src/math");

console.log("🧪 Testler çalışıyor...");

assert.strictEqual(add(2, 3), 5, "add(2,3) 5 olmalı");
assert.strictEqual(add(-1, 1), 0, "add(-1,1) 0 olmalı");
assert.strictEqual(multiply(3, 4), 12, "multiply(3,4) 12 olmalı");

console.log("✅ Tüm testler başarılı!");
