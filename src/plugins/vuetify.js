import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify);

export default new Vuetify( 
    {iconfont: 'mdi',
    theme:{
       primary: "#9652ff",
       success: "#3cd1c2",
       info: "#ffaa2c",
       error: "#f83e70" 
    }
}
)

