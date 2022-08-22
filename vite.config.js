import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const path = require('path')

const folders = [
    '',
    'assets',
    'components',
    'mobile',
    'services',
    'state',
    'web',
    'wrappers'
]

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: folders.map(folder => ({
            find: `@${folder}`,
            replacement: path.resolve(__dirname, `src/${folder}`)
        }))
    },
    plugins: [react()]
})
