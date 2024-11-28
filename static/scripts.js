document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('fileInput');
    const submitButton = document.getElementById('submitButton');
    const extractButton = document.getElementById('extractButton');

    submitButton.addEventListener('click', async () => {
        const file = fileInput.files[0];
        if (!file) return alert("Please select a file!");
        const formData = new FormData();
        formData.append("pdf", file);
        try {
            const response = await fetch("/upload", {
                method: "POST",
                body: formData
            });
            const result = await response.json();
            alert(result.message);
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to upload file.");
        }
        })

    extractButton.addEventListener('click', async () => {
        const file = fileInput.files[0];
        if (!file) return alert("Please select a file!");
        const formData = new FormData();
        formData.append("pdf", file);
        try {
            const response = await fetch("/extract", {
                method: 'POST',
                body: formData
            });
            const result = await response.json()
            alert(result.message)
        } catch (error) {
            console.error("Error:", error);
            alert("Error extracting keywords.");
        }
    })
})
