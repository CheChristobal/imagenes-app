import React, { useState } from 'react';
import paisaje from './Placeholder.png';
import animales from './Placeholder.png';
import comida from './Placeholder.png';

import './App.css';

const App = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: 'Hermoso Paisaje',
      image: paisaje,
      description: 'Este es un paisaje impresionante.',
      date: '2023-05-30'
    },
    {
      id: 2,
      title: 'Animales Adorables',
      image: animales,
      description: 'Estos animales son adorables.',
      date: '2023-05-31'
    },
    {
      id: 3,
      title: 'Comida Deliciosa',
      image: comida,
      description: 'Esta comida se ve deliciosa.',
      date: '2023-06-01'
    },
    {
      id: 4,
      title: 'Título de la imagen 1',
      image: comida,
      description: 'Descripción de la imagen 1.',
      date: '2023-06-02'
    },
    {
      id: 5,
      title: 'Título de la imagen 2',
      image: comida,
      description: 'Descripción de la imagen 2.',
      date: '2023-06-03'
    },
    {
      id: 6,
      title: 'Título de la imagen 3',
      image: comida,
      description: 'Descripción de la imagen 3.',
      date: '2023-06-04'
    },
    {
      id: 7,
      title: 'Título de la imagen 4',
      image: comida,
      description: 'Descripción de la imagen 4.',
      date: '2023-06-05'
    },
    {
      id: 8,
      title: 'Título de la imagen 5',
      image: comida,
      description: 'Descripción de la imagen 5.',
      date: '2023-06-06'
    },
    {
      id: 9,
      title: 'Título de la imagen 6',
      image: comida,
      description: 'Descripción de la imagen 6.',
      date: '2023-06-07'
    },
    {
      id: 10,
      title: 'Título de la imagen 7',
      image: comida,
      description: 'Descripción de la imagen 7.',
      date: '2023-06-08'
    },
    {
      id: 11,
      title: 'Título de la imagen 8',
      image: comida,
      description: 'Descripción de la imagen 8.',
      date: '2023-06-09'
    },
    {
      id: 12,
      title: 'Título de la imagen 9',
      image: comida,
      description: 'Descripción de la imagen 9.',
      date: '2023-06-10'
    },
    {
      id: 13,
      title: 'Título de la imagen 10',
      image: comida,
      description: 'Descripción de la imagen 10.',
      date: '2023-06-11'
    }
  ]);

  return (
    <div className="container">
      <header className="header">
        <h1>Aplicación De Imagenes</h1>
      </header>
      <div className="card-container">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <h2 className="card-title">{card.title}</h2>
            <img className="card-image" src={card.image} alt={card.title} />
            <p className="card-description">{card.description}</p>
            <p className="card-date">Publicado en: {card.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;