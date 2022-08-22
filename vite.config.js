import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const path = require('path')

const folders = [
    '',
    'assets',
    'components',
    'layout',
    'pages',
    'services',
    'state',
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
