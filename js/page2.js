
// Extract job names from JIL and prepare data for next page
const jil = localStorage.getItem('jil');
const jobRegex = /insert_job:\s*(\w+)/g;
let match;
let jobs = [];
while ((match = jobRegex.exec(jil)) !== null) {
    jobs.push(match[1]);
}
localStorage.setItem('jobs', JSON.stringify(jobs));
document.getElementById('summary').innerHTML = `<p>Total number of jobs: <strong>${jobs.length}</strong></p>`;
const jobList = jobs.map(job => `${job} (${job.length} chars)`).join("<br>");
document.getElementById('jobList').innerHTML = jobList;
const jrLines = jobs.map(job => `jr ${job}`).join("\n");
const jrField = document.getElementById('jrField');
jrField.value = jrLines;
jrField.onclick = function () {
    jrField.select();
    document.execCommand('copy');
    const msg = document.getElementById('copiedMsg');
    msg.style.display = 'block';
    setTimeout(() => { msg.style.display = 'none'; }, 2000);
};
