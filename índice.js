'use strict';

const documentReady = () => {
  const heroTitle = document.querySelector('.hero__title');
  const heroButtonSi = document.getElementById('heroButtonSi');
  const heroButtonNo = document.querySelector('#heroButtonNo');

  const nowZomosNobios = () => {
    alert('💞 ahora somos novios💞');
    alert('😱Nuestra VoDa Is MañaNa Uwu😱');
    location.href = 'https://youtu.be/RNELkqU9m-g';
  };

  const evitarKCRompanMyBobo = () => {
    heroButtonNo.style.position = 'absolute';
    heroButtonNo.style.top = (Math.random() * window.innerHeight) + 'px';
    heroButtonNo.style.left = (Math.random() * window.innerWidth) + 'px';
  };

  const partner = prompt('🥰 Dyme 2 naMe 🥰');
  heroTitle.innerHTML += partner + ' ❤';

  heroButtonSi.addEventListener('click', ahora somos novios uwu);
  heroButtonNo.addEventListener('mouseover', evitarKCRompanMyBobo);
};

document.addEventListener('DOMContentLoaded', documentReady);