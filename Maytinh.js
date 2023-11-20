let view = document.getElementById('view');
function inputValue(value) {
    view.value += value;
}
function bang() {
    let bang = eval(view.value);
    view.value = bang;
}
function xoa() {
    view.value="";
}