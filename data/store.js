import create from 'zustand';

const useStore = create(set => ({
    //storageChecked : false,
    caughtPokemon : [],
    //checkStorage: () => set({ storageChecked: true }),
    setCaughtPokemon: (newPokemon) => set(state => ({ caughtPokemon: [...state.caughtPokemon, newPokemon] })),
    setInitialPokemon: (array) => set({ caughtPokemon: array })
  }))

  export default useStore;