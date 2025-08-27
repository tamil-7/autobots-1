
// Save user inputs (JIL + optional ticket info) and go to page 2
function launch() {
    const jil = document.getElementById('jilInput').value;
    const priority = document.getElementById('priorityInput').value;
    const queue = document.getElementById('queueInput').value;
    localStorage.setItem('jil', jil);
    localStorage.setItem('priority_type', priority);
    localStorage.setItem('queue_name', queue);
    window.location.href = 'page2.html';
}
