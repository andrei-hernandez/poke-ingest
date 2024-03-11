
import { initializeApp, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import dataset from './pokemon-dataset.json' assert { type: "json" }
import serviceAccount from './service-account.json' assert { type: "json" }

function pokemonDto(dataset) {
  return dataset.map((pokemon) => ({
    pokedex_number: pokemon["#"],
    name: pokemon["Name"],
    type_1: pokemon["Type 1"],
    type_2: pokemon["Type 2"],
    total: pokemon["Total"],
    hp: pokemon["HP"],
    attack: pokemon["Attack"],
    defense: pokemon["Defense"],
    special_atk: pokemon["Sp. Atk"],
    special_def: pokemon["Sp. Def"],
    speed: pokemon["Speed"],
    generation: pokemon["Generation"],
    isLegendary: pokemon["Legendary"]
  }))
}

initializeApp({
  credential: cert(serviceAccount)
})

const db = getFirestore()

async function ingestPokemonData(pokemonData) {
  try {
    const pokemonCollection = db.collection('pokemon')
    await Promise.all(pokemonData.map(async (pokemon) => {
      pokemonCollection.add(pokemon)
    }))
  } catch (error) {
    console.error('Error adding pokemon data', error)
  } finally {
    console.log('Finished adding pokemon data')
  }
}

ingestPokemonData(pokemonDto(dataset))

