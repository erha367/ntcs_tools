<template>
    <div id="app">
        <el-container>
            <el-menu
                    :default-active="activeIndex2"
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="handleSelect"
                    background-color="#FFFFFF"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                <el-menu-item><div style="width: 150px;"><img src="@/assets/logo_left.png" alt="贝壳logo" width="100" height="50"></div></el-menu-item>
                <el-menu-item index="1"><router-link to="/ntcs"><span style="color: black">可视化</span></router-link></el-menu-item>
                <el-menu-item index="3"><a href="http://i.pingjia.jiaoyi.lianjia.com/tool" target="_blank"><span style="color: black">满意度</span></a></el-menu-item>
                <el-menu-item index="4"><a href="http://i.tax.jiaoyi.lianjia.com/intervention" target="_blank"><span style="color: black">税费精算</span></a></el-menu-item>
            </el-menu>
            <router-view></router-view>
            <el-footer>
                <el-divider></el-divider>
                <el-link type="" disabled>copyright 贝壳交易事业部 C端诊断平台</el-link>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
    export default {
        name:'app',
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                //console.log(key, keyPath);
            }
        }
    }
</script>

<style>
    .el-header, .el-footer {
        background-color: #FFFFFF;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
</style>
