"use strict";

document.addEventListener('DOMContentLoaded', function() {
    const text = "Hey There , I'm Stephen";
    const speed = 100;
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            document.getElementById("typewriter-text").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});


// const fadeElements = document.querySelectorAll('.fade-in-box');

// window.addEventListener('scroll', () => {
//   for (let i = 0; i < fadeElements.length; i++) {
//     const element = fadeElements[i];
//     const rect = element.getBoundingClientRect();
//     if (rect.top < window.innerHeight) {
//       element.classList.add('show');
//     }
//   }
// });



document.addEventListener('DOMContentLoaded', () => {
  const fadeElements = document.querySelectorAll('.fade-in-box');

  window.addEventListener('scroll', () => {
    fadeElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        element.classList.add('show');
      }
    });
  });
});

// let name = prompt('Please enter your name:');
//     document.getElementById('welcome-text').textContent = `Welcome, ${name}!`;

//     document.getElementById('change-button').addEventListener('click', function() {
//       name = prompt('Please enter your name:');
//       document.getElementById('welcome-text').textContent = `Welcome, ${name}!`;
//     });


let name = prompt('Please enter your name:');
if (name !== null && name.trim() !== '') {
  document.getElementById('welcome-text').textContent = `Welcome, ${name}! to my Portfolio...`;
} else {
  document.getElementById('welcome-text').textContent = 'Welcome!';
}

document.getElementById('change-button').addEventListener('click', function() {
  name = prompt('Please enter your name:');
  if (name !== null && name.trim() !== '') {
    document.getElementById('welcome-text').textContent = `Welcome, ${name}! to my Portfolio...`;
  } else {
    document.getElementById('welcome-text').textContent = 'Welcome! ';
  }
});
