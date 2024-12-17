const body = document.body;
const toggleButton = document.createElement('button');
toggleButton.innerText = 'Alternar Tema';
toggleButton.className = 'btn btn-primary';
toggleButton.style.position = 'fixed';
toggleButton.style.top = '20px';
toggleButton.style.right = '20px';
toggleButton.onclick = () => {
    body.classList.toggle('light-theme');
    if (body.style.backgroundColor === 'white') {
        body.style.backgroundColor = '#121212';
        body.style.color = '#e0e0e0';
    } else {
        body.style.backgroundColor = 'white';
        body.style.color = '#000000';
    }
};
document.body.appendChild(toggleButton);