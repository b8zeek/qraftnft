import store from '../state/state'

export function useWallet() {
    const setPhantomWalletInstalled = store(state => state.setPhantomWalletInstalled)
    const setPhantomWallet = store(state => state.setPhantomWallet)

    const connectPhantomWallet = async (onlyIfTrusted = true) => {
        try {
            const { solana } = window

            console.log(solana)

            if (solana?.isPhantom) {
                setPhantomWalletInstalled(true)

                const response = onlyIfTrusted ?
                    await solana.connect({ onlyIfTrusted: true }) :
                    await solana.connect()

                console.log('WALLET', response)
                setPhantomWallet(response)
            } else {
                setPhantomWalletInstalled(false)
                // if (!onlyIfTrusted) visitPhantomWallet()
            }
        } catch (error) {
            console.error(error)
        }
    }

    return { connectPhantomWallet }
}