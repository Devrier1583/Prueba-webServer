// funcion anonima asincrona y ers autoconvacada

/*const {envs} = require('./config/env')
const {iniciarServidor} = require('./server/server')*/

import { envs } from "./config/env.js"
import {iniciarServidor} from "./server/server.js"

const main = ()=> {
    iniciarServidor({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}

(async ()=>{
    main()
})()

