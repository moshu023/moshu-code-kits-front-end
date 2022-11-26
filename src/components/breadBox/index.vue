<template>
  <!--面包屑导航-->
  <div class="breadBox">
    <div class="bread">
      <div class="breadItem center">
        <div class="name cus_font14 center">首页</div>
        <div class="line iconfont icon-arrow-right cus_font16" v-show="curBreadIndex !=0 "></div>
      </div>
      <div class="breadItem center" v-if="curBreadIndex !=0">
        <div class="name cus_font14 center">{{ breadData.title }}</div>
        <div class="line iconfont icon-arrow-right cus_font16"></div>
      </div>
      <div class="breadItem center" v-if="curBreadIndex !=0">
        <div class="name cus_font14 center">{{ breadData.childTitle }}</div>
      </div>
    </div>

    <div class="out center">
      <el-dropdown>
                        <span class="el-dropdown-link">
                          <div class="iconfont icon-bussiness-man" style="font-size:36px"></div>
                        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="a">个人中心</el-dropdown-item>
            <el-dropdown-item command="b" @click="logout">注销</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import {userLogout} from "../../api/user";
import {ElMessage, ElMessageBox} from 'element-plus'

export default {
  data() {
    return {
      // breadData:[],
      // curBreadIndex:0,
    }
  },
  mounted() {
  },
  computed: {
    breadData() {
      return this.$store.state.router.curShowRouter;
    },
    curBreadIndex() {
      return this.$store.state.router.curChooseRouterIndex;
    },
  },

  methods: {
    logout() {
      ElMessageBox.confirm(
          '您确定要注销吗？',
          '警告',
          {
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            type: 'warning',
          })
          .then(() => {
            userLogout().then(res => {
              if (res.code === 200) {
                this.$router.push("/")
                ElMessage({
                  type: 'success',
                  center: true,
                  message: '您已注销成功',
                })
              }
            })
          })
          .catch(() => {
            ElMessage({
              type: 'info',
              center: true,
              message: '您取消了注销',
            })
          })
    }
  },
  components: {}
}
</script>

<style lang="scss">
.breadBox {
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  padding-left: 60px;
  display: flex;
  align-items: center;
  background: #fff;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);

  .bread {
    flex: 1;
    height: 100%;
    display: flex;

    .breadItem {
      width: auto;
      height: 100%;

      .name {
        width: auto;
        height: 100%;
        padding: 4px;
        color: #97a8be;
      }

      .line {
        position: relative;
        width: 20px;
        color: #97a8be;

        &:before {
          position: absolute;
          top: -6px;
        }
      }
    }
  }

  .out {
    width: 50px;
    height: 60px;
  }
}
</style>
