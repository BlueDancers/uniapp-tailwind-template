<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
import 'tailwindcss/tailwind.css'
onLaunch(() => {
  console.log('App Launch')
})
onShow(() => {
  console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})
</script>