
window.scenes = [];

function loadScenes(callback) {
  const parts = [
    'scenes/scene_part1.js',
    'scenes/scene_part2.js',
    'scenes/scene_part3.js',
    'scenes/scene_part4.js',
    'scenes/scene_part5.js',
    'scenes/scene_part6.js',
    'scenes/scene_part7.js'
  ];

  let promises = parts.map(src => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        console.log(`✅ Загружено: ${src}`);
        resolve();
      };
      script.onerror = () => {
        console.error(`❌ Ошибка загрузки: ${src}`);
        reject();
      };
      document.head.appendChild(script);
    });
  });

  Promise.all(promises)
    .then(() => {
      console.log('📦 Все сцены загружены:', window.scenes.length);
      callback();
    })
    .catch(() => {
      console.error('⚠️ Не удалось загрузить все сцены');
    });
}

function renderScene(id) {
  const game = document.getElementById('game');
  game.innerHTML = '';

  const scene = window.scenes.find(s => s.id === id);
  if (!scene) {
    console.warn('🚫 Сцена не найдена:', id);
    game.innerHTML = `<div class='scene active'><p>Сцена ${id} не найдена.</p></div>`;
    return;
  }

  console.log('▶️ Отображаем сцену:', id);

  const indicator = document.createElement('div');
  indicator.style.position = 'fixed';
  indicator.style.bottom = '10px';
  indicator.style.right = '10px';
  indicator.style.padding = '5px 10px';
  indicator.style.background = '#222';
  indicator.style.color = '#fff';
  indicator.style.fontSize = '12px';
  indicator.style.borderRadius = '5px';
  indicator.innerText = 'Сцена: ' + id;
  document.body.appendChild(indicator);

  const container = document.createElement('div');
  container.className = 'scene active';

  const img = document.createElement('img');
  img.src = scene.image;
  img.onerror = () => {
    console.error('🖼 Картинка не найдена:', scene.image);
    img.alt = 'Картинка не найдена';
    img.style.border = '2px dashed red';
  };
  img.className = 'illustration';
  container.appendChild(img);

  const text = document.createElement('p');
  text.innerText = scene.text || '';
  container.appendChild(text);

  const choices = document.createElement('div');
  choices.className = 'choices';
  scene.choices.forEach(choice => {
    const btn = document.createElement('button');
    btn.innerText = choice.text;
    btn.onclick = () => renderScene(choice.next);
    choices.appendChild(btn);
  });

  container.appendChild(choices);
  game.appendChild(container);
}

loadScenes(() => renderScene(0));
