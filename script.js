document.addEventListener('mousemove', (event) => {
    const trail = document.createElement('div');
    trail.className = 'starry';
    trail.style.left = event.pageX + 'px';
    trail.style.top = event.pageY + 'px';
    document.getElementById('starry-sky').appendChild(trail);
  });
  