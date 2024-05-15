function checkDevice() {
    if (window.innerWidth > 768) {
        alert("This page is only accessible on mobile devices.");
        document.body.style.display = 'none';
    } else {
        document.body.style.display = 'block';
    }
}

window.onload = checkDevice;
window.onresize = checkDevice;