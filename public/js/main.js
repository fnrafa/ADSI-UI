function checkDevice() {
    if (window.innerWidth > 576) {
        alert("This page is only accessible on mobile devices.");
        document.body.style.display = 'none';
    } else {
        document.body.style.display = 'block';
    }
}

function back() {
    window.history.back();
}

document.addEventListener('DOMContentLoaded', function () {
    const showPasswordButton = document.getElementById('showPassword');
    const passwordInput = document.getElementById('password');

    if (showPasswordButton && passwordInput) {
        showPasswordButton.addEventListener('click', function () {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            showPasswordButton.innerHTML = type === 'password' ? '<i class="bi bi-eye-fill"></i>' : '<i class="bi bi-eye-slash-fill"></i>';
        });
    }
});

window.onload = checkDevice;
window.onresize = checkDevice;