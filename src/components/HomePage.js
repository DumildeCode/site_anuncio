// src/pages/HomePage.js
import React from 'react';

// Importação das imagens locais
import imagem1 from '../assets/img/pexels-bahadir-aydin-1632708859-27677944.jpg';
import imagem2 from '../assets/img/pexels-bahadir-aydin-1632708859-27677944.jpg';
import imagem3 from '../assets/img/pexels-bahadir-aydin-1632708859-27677944.jpg';
import imagem4 from '../assets/img/pexels-bahadir-aydin-1632708859-27677944.jpg';
import imagem5 from '../assets/img/pexels-bahadir-aydin-1632708859-27677944.jpg';
import imagem6 from '../assets/img/pexels-bahadir-aydin-1632708859-27677944.jpg';

function HomePage() {
  // Dados dos anúncios com as imagens locais
  const anuncios = [
    { id: 1, imagem: imagem1, descricao: 'Anúncio 1: Ofertas imperdíveis!' },
    { id: 2, imagem: imagem2, descricao: 'Anúncio 2: Novidades da estação.' },
    { id: 3, imagem: imagem3, descricao: 'Anúncio 3: Descontos especiais.' },
    { id: 4, imagem: imagem4, descricao: 'Anúncio 4: Produtos em alta.' },
    { id: 5, imagem: imagem5, descricao: 'Anúncio 5: Promoção relâmpago.' },
    { id: 6, imagem: imagem6, descricao: 'Anúncio 6: Não perca essa chance!' },
  ];

  return (
    <div id="home" className="p-8 text-center">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8">Bem-vindo ao Site Informativo</h2>
      <p className="text-lg text-gray-600 mb-8">Este é um exemplo de site criado com ReactJS e Tailwind CSS. Explore para saber mais!</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {anuncios.map(anuncio => (
          <div key={anuncio.id} className="border p-4 rounded-lg shadow-md">
            <img src={anuncio.imagem} alt={`Anúncio ${anuncio.id}`} className="w-full h-48 object-cover mb-4 rounded" />
            <p className="text-gray-700">{anuncio.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
