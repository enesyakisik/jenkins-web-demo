// Browser tarafındaki davranışlar

function onAdd() {
    const a = Number(document.getElementById("num1").value);
    const b = Number(document.getElementById("num2").value);
    const result = add(a, b);
    document.getElementById("calc-result").innerText = `Toplam: ${result}`;
}

function onMultiply() {
    const a = Number(document.getElementById("num1").value);
    const b = Number(document.getElementById("num2").value);
    const result = multiply(a, b);
    document.getElementById("calc-result").innerText = `Çarpım: ${result}`;
}

function onAddTodo() {
    const input = document.getElementById("todo-input");
    const text = input.value.trim();
    if (!text) return;

    const list = document.getElementById("todo-list");
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.innerText = text;

    const btn = document.createElement("button");
    btn.innerText = "Sil";
    btn.onclick = () => li.remove();

    li.appendChild(span);
    li.appendChild(btn);
    list.appendChild(li);

    input.value = "";
}
