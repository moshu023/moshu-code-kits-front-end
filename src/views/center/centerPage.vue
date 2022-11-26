<template>
  <div class="centerPage1">
    <h4>莫枢工具箱的迭代之路</h4>
    <br/>
    <el-timeline>
      <el-timeline-item
          v-for="(activity, index) in this.activities"
          :key="index"
          :icon="activity.icon"
          :type="activity.type"
          :color="activity.color"
          :size="activity.size"
          :hollow="activity.hollow"
          :timestamp="activity.timestamp">{{ activity.content }}</el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
import {Monitor, MoreFilled} from "@element-plus/icons-vue";

export default {
  data() {
    return {
      activities: [
        {
          content: 'Custom icon',
          timestamp: '2018-04-12 20:46',
          size: 'large',
          type: 'primary',
          icon: MoreFilled,
        },
        {
          content: 'Custom color',
          timestamp: '2018-04-03 20:46',
          color: '#0bbd87',
        },
        {
          content: 'Custom size',
          timestamp: '2018-04-03 20:46',
          size: 'large',
          icon: Monitor,
          color: '#0bbd87',
        },
        {
          content: 'Custom hollow',
          timestamp: '2018-04-03 20:46',
          type: 'primary',
          hollow: true,
        },
        {
          content: '项目孵化，着手开始方案设计',
          timestamp: '2018-04-03 20:46',
        }
      ]
    }
  },
  mounted() {

  },
  methods: {},
  components: {}
}
</script>

<style lang="scss">
.centerPage1 {
  height: 100%;
}
</style>
