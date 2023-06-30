import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RecetasDulceLeche = () => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://recipe-finder3.p.rapidapi.com/recipes',
        params: {
        ingredient: 'onion'
        },
       
      };

      try {
        const response = await axios.request(options);
        setRecetas(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {recetas.map((receta) => (
        <div key={receta.id}>
          <h2>{receta.title}</h2>
          <p>{receta.instructions}</p>
          <img src={receta.image} alt={receta.title} />
        </div>
      ))}
    </div>
  );
};

export default RecetasDulceLeche;
