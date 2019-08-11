<template>
  <div style='position:absolute; margin-left:200px;'>
    <div v-for='(sub,index) in subList' :key='index'>
      <div>
          {{sub.name}}
      </div>
      <div v-for="(item,listIndex) in sub.list" :key="listIndex">
          <a>{{item}}</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  props: ['subList']
}
</script>
