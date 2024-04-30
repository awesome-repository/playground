import { fileURLToPath } from 'node:url'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({mode})=>{
  const env = loadEnv(mode, process.cwd(), 'VITE_')

  return {
    base:import.meta.env.DEV ? '' : '',
    build:{
      target:'es2015',
      manifest:true,
      rollupOptions:{

      }

    },
    resolve:{
      alias:{
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server:{
      proxy:{
        '/api':'',
        '/api/v1':{
          target:'',
          changeOrigin:true,
          rewrite: path=>path.replace(/^\/api\/v1/, '')
          
        }
      }
    }
  }
})
