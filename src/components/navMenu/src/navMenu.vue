<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/logo.png" alt="logo" />
      <span class="title">百越庭</span>
    </div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="collapse"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
    >
      <template :key="item.id" v-for="item in userMenus">
        <!-- 二级菜单  如果为1就可以继续遍历 -->
        <template v-if="item.type === 1">
          <!-- 二级菜单的标题 -->
          <el-submenu :index="item.id + ''">
            <template #title>
              <i v-if="item.icon" :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item
                :index="subitem.id + ''"
                @click="hanldeMenuClick(subitem)"
              >
                <i v-if="subitem.icon" :class="subitem.icon"></i>
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-submenu>
          <!-- 遍历item -->
        </template>
        <!-- 一级菜单 不可以继续遍历的情况 直接展示 -->
        <template v-else>
          <el-menu-item :index="item.id + ''">
            <!-- icon 有值的时候显示i -->
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
// import { useStore } from 'vuex';
import { useStore } from '@/store';
import { useRouter } from 'vue-router';
export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const userMenus = computed(() => store.state.login.userMenus);
    const handleOpen = (key: any, keyPath: any) => {
      console.log(key, keyPath);
    };
    const hanldeMenuClick = (item: any) => {
      router.push({
        path: item.url ?? '/notFound'
      });
    };
    const handleClose = (key: any, keyPath: any) => {
      console.log(key, keyPath);
    };
    return { handleClose, handleOpen, userMenus, hanldeMenuClick };
  }
});
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .img {
      height: 100%;
      margin: 0 10px;
      padding-right: 5px;
    }
    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }
  .el-menu {
    border-right: none;
  }
  //目录
  .el-submenu {
    background-color: #001529 !important;
    //二级菜单
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }
  ::v-deep .el-submenu__title {
    background-color: #001529 !important;
  }
  .el-menu-item:hover {
    color: #fff !important;
  }
  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}
.el-menu-vertical:not(.el-menu-collapse) {
  width: 100%;
  height: calc(100%-48px);
}
</style>
