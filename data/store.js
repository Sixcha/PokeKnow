import create from 'zustand';

const useStore = create(set => ({
    //storageChecked : false,
    caughtPokemon : [],
    //checkStorage: () => set({ storageChecked: true }),
    setCaughtPokemon: (newPokemon) => set(state => ({ caughtPokemon: [...state.caughtPokemon, newPokemon] })),
    setInitialPokemon: (array) => set({ caughtPokemon: array }),
    selectedPokemonID :0,
    setSelectedPokemonID: (currentMonID) => set({selectedPokemonID: currentMonID}),
    //setSpecificPokemon: (newMon, i) => set(({ caughtPokemon: caughtPokemon[i], newMon }))
  }))

  export default useStore;