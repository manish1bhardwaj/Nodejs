// Simple lightbox functionality for photo gallery
const photos = document.querySelectorAll('.photo img');

photos.forEach(photo => {
    photo.addEventListener('click', () => {
        // Create a simple modal for viewing the image
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        modal.style.display = 'flex';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
        modal.style.zIndex = '1000';

        const img = document.createElement('img');
        img.src = photo.src;
        img.style.maxWidth = '90%';
        img.style.maxHeight = '90%';

        modal.appendChild(img);
        document.body.appendChild(modal);

        modal.addEventListener('click', () => {
            document.body.removeChild(modal);
        });
    });
});
