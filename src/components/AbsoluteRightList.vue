<template>
  <div @mouseover="setSubMenuStatus">
    <div style='position:absolute;'>
      <div>
          {{title}}
      </div>
      <div>
        <a v-for='(item,index) in list' :key='index'>{{item}}</a>
      </div>
    </div>
    <SubList v-bind:subList=subs v-show='isShowSub'></SubList>
  </div>
</template>

<script>
import SubList from './subList'
export default {
  components: {
    'SubList': SubList
  },
  data () {
    return {
      title: '今日推荐',
      list: ['广州', '珠海'],
      subs: [{
        name: '广州',
        list: ['白云山', '上下九']
      }, {
        name: '珠海',
        list: ['长隆水上世界', '核电站']
      }],
      isShowSub: false
    }
  },
  methods: {
    setSubMenuStatus (status) {
      if (status) {
        this.isShowSub = true
      } else {
        this.isShowSub = false
      }
    }
  }
}
</script>
