import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'
import { UnifiedViteWeappTailwindcssPlugin as uvwt } from 'weapp-tailwindcss/vite'

import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import rem2px from 'postcss-rem-to-responsive-pixel'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    AutoImport({
      imports: ['vue', 'uni-app', 'pinia'],
      dts: './src/auto-imports.d.ts',
      dirs: ['./src/modules/**', './src/store/**', './src/utils/**', './src/api/**'],
    }),
    uvwt(),
  ],
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer(),
        rem2px({
          rootValue: 32,
          propList: ['*'],
          transformUnit: 'rpx',
        }),
      ],
    },
  },
})
