
// Prepare DOC files and zip them for download
async function createDocs() {
    const jobs = JSON.parse(localStorage.getItem('jobs'));
    const priority_type = localStorage.getItem('priority_type') || "High";
    const queue_name = localStorage.getItem('queue_name') || "Support";
    const zip = new JSZip();
    const preview = document.getElementById('docContainer');
    preview.innerHTML = '';
    const folderName = jobs[0];
    const folder = zip.folder(folderName);
    for (let job of jobs) {
        const docText = `Job name: ${job}\nRerun/Restart Procedures:\n--------------------------------------\nIncase of job failure, please create a ${priority_type} priority ticket to ${queue_name}`;
        folder.file(`${job}.doc`, docText);
        preview.innerHTML += `<h3>${job}.doc</h3><pre>${docText}</pre><hr>`;
    }
    const blob = await zip.generateAsync({ type: "blob" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = folderName + "_documents.zip";
    a.click();
}
