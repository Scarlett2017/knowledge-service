import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import '../theme/index.css'
import {
  Container,
  Aside,
  Menu,
  Submenu,
  MenuItemGroup,
  MenuItem,
  Dropdown,
  DropdownMenu,
  Main,
  Table,
  TableColumn,
  Header,
  DropdownItem,
  Button,
  Col,
  Row
}from 'element-ui'

Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.use(Container)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(Main)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Header)
Vue.use(DropdownItem)
Vue.use(Button)
Vue.use(Col)
Vue.use(Row)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
