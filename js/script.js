
let currentScene = 0;

function loadScene(sceneId) {
    const scene = scenes[sceneId];
    if (!scene) {
        alert("Сцена не найдена!");
        return;
    }

    document.getElementById('scene-text').innerText = scene.text;
    document.getElementById('scene-image').innerHTML = `<img src="${scene.image}" alt="">`;

    const choicesDiv = document.getElementById('choices');
    choicesDiv.innerHTML = '';

    scene.choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.innerText = choice.text;
        btn.onclick = () => loadScene(choice.nextScene);
        choicesDiv.appendChild(btn);
    });
}

window.onload = () => {
    loadScene(0);
};
