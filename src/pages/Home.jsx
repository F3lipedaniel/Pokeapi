import axios from 'axios';
import { Container, Grid } from '@mui/material'
import Navbar from '../components/Navbar'
import PokemonCard from '../components/PokemonCard'
import { useEffect, useState } from 'react';

export const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    var endpoints = [];
    for ( var i = 1; i < 50; i++) {
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
    }
  axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));

  };

  const pokemonFilter = (name) => {
    var filteredPokemons = [];
    if(name===""){
      getPokemons();
    }
    for (var i in pokemons) {
      if (pokemons[i].data.name.includes(name)) {
        filteredPokemons.push(pokemons[i]);
      }
    }
    setPokemons(filteredPokemons);
    }
  // Restante do código...

return (
  <div>
    <Navbar pokemonFilter={pokemonFilter} />
    <Container maxWidth='false'>
      <Grid sx={{ marginTop: 8 }} container spacing={3}>
        {pokemons.map((pokemon, key) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={5}
            lg={2}
            key={key}
            
            // sx={{
            //   backgroundColor:
            //     pokemon.data.types.find((type) => type.type.name === "poison")
            //       ? "purple"
            //       : "inherit",
            // }}
          >
            <PokemonCard
            sx={{
              p: {
                backgroundColor:
                  pokemon.data.types.find(
                    (type) => type.type.name === "poison"
                  )
                    ? "purple"
                    : "inherit",
              },
            }}
            //  sx={{
            //   div: {
            //     color:
            //       pokemon.data.types.find(
            //         (type) => type.type.name === "poison"
            //       )
            //         ? "purple"
            //         : "inherit",
            //   },
            // }}
              name={pokemon.data.name}
              image={pokemon.data.sprites.front_default}
              types={pokemon.data.types}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  </div>
);
          }
