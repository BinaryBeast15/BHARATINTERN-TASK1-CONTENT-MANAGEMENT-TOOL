// JavaScript Function to add content
function addContent() {
    
    const text = document.getElementById('text-input').value;
    const imageInput = document.getElementById('image-input');
    const videoInput = document.getElementById('video-input');
    const contentDisplay = document.getElementById('display-content');

    // Create a new div to hold the content
    const contentDiv = document.createElement('div');
    contentDiv.className = 'content-box';
    
    // Add text content
    const textParagraph = document.createElement('p');
    textParagraph.textContent = text;
    contentDiv.appendChild(textParagraph);

    // Add image if selected
    if (imageInput.files.length > 0) {
        const image = document.createElement('img');
        image.src = URL.createObjectURL(imageInput.files[0]);
        image.className = 'content-box';
        contentDiv.appendChild(image);
    }

    // Add video if selected
    if (videoInput.files.length > 0) {
        const video = document.createElement('video');
        video.src = URL.createObjectURL(videoInput.files[0]);
        video.controls = true;
        video.className = 'content-box';
        contentDiv.appendChild(video);
    }

    // Append the content div to the display area
    contentDisplay.appendChild(contentDiv);

    // Clear input fields
    document.getElementById('text-input').value = '';
    imageInput.value = '';
    videoInput.value = '';
}
