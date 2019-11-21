import Logo from './components/Logo.vue'
import routes from './router/routes'
import storeModule from './store/store-module'
export default function() {
  this.$router.addRoutes(routes)
  this.$store.registerModule('main', storeModule)
  this.$eventBus.on('visitedAbout', () => {
    alert('用户访问了about页面。')
  })
  this.$dynamicComponent.create(Logo)
}
