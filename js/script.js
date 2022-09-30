

let arrayAnimali = ['🐱', '🦉', '🐾', '🦁', '🦋', '🐛', '🐝', '🐬', '🦊', '🐨', '🐰', '🐯','🐱', '🦉', '🐾', '🦁', '🦋', '🐛', '🐝', '🐬', '🦊', '🐨', '🐰', '🐯'];

for (var i=0; i<=23; i++) {
    document.getElementById("grid-container").innerHTML+='<div class="card" onclick="openWindow(event)">'+ arrayAnimali[i]+ '</div>';
}

// restart button
let restartIt = function start(){
    window.location.reload();
}

// show card
function openWindow(n) {
    let item = n.target.innerHTML
    if (item === ""){
    
    n.target.classList.add('show')
    }
}
