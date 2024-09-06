import App from './App'
import module from "./api";

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'

Vue.config.productionTip = false

// 挂载 $http 到 Vue.prototype
Vue.prototype.$http = module

App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {createSSRApp} from 'vue'

export function createApp() {
    const app = createSSRApp(App)
    // 挂载 $http 到 app.config.globalProperties
    app.config.globalProperties.$http = module
    return {
        app
    }
}

// #endif