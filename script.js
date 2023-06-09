window.addEventListener('DOMContentLoaded', (event) => {
    const clubs = [
      { id: 1, name: 'Club A', description: 'Description of Club A' },
      { id: 2, name: 'Club B', description: 'Description of Club B' },
      { id: 3, name: 'Club C', description: 'Description of Club C' }
      // Add more clubs as needed
    ];
  
    const clubList = document.getElementById('club-list');
    clubs.forEach((club) => {
      const clubBox = document.createElement('div');
      clubBox.classList.add('club-box');
      clubBox.innerHTML = `
        <h3>${club.name}</h3>
        <p>${club.description}</p>
        <a href="club.html?id=${club.id}">Register</a>
      `;
      clubList.appendChild(clubBox);
    });
  });
  