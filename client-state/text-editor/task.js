const editor = document.getElementById('editor');
const clearEditor = document.createElement('button');

editor.value = localStorage.editorContent;
editor.addEventListener('keydown', function() {
    localStorage.editorContent = editor.value;
})

clearEditor.className = 'clearEditor';
clearEditor.textContent = 'Очистить';
clearEditor.addEventListener('click', () => {
    editor.value = '';
    localStorage.editorContent = '';
})

editor.insertAdjacentElement('afterEnd', clearEditor);