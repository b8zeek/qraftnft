import create from 'zustand'

export const store = create(set => ({
    phantomWalletInstalled: false,
    phantomWallet: null,
    setPhantomWalletInstalled: phantomWalletInstalled => set({ phantomWalletInstalled }),
    setPhantomWallet: phantomWallet => set({ phantomWallet })
}))

export default store
