<template>
    <div class="ntcs">
        <el-container>
            <el-aside width="200px">
                <el-col :span="24">
                    <el-menu
                            default-active="2"
                            class="el-menu-vertical-demo"
                            @open="handleOpen"
                            @close="handleClose"
                    >
                        <el-menu-item index="2">
                            <i class="el-icon-menu"></i>
                            <span slot="title"><router-link to="/ntcs/pullBiz">拉取交易单</router-link></span>
                        </el-menu-item>
                        <el-menu-item index="3">
                            <i class="el-icon-document"></i>
                            <span slot="title"><router-link to="/ntcs/userInfo">交易信息查询</router-link></span>
                        </el-menu-item>
                        <el-menu-item index="4">
                            <i class="el-icon-setting"></i>
                            <span slot="title"><router-link to="/ntcs/phoneList">查询手机号下的交易单</router-link></span>
                        </el-menu-item>
                        <el-menu-item index="5">
                            <i class="el-icon-setting"></i>
                            <span slot="title"><router-link to="/ntcs/clearUserStatus">清理用户确认身份状态</router-link></span>
                        </el-menu-item>
                        <el-menu-item index="6">
                            <i class="el-icon-setting"></i>
                            <span slot="title"><router-link to="/ntcs/liFangTong">理房通反查工具</router-link></span>
                        </el-menu-item>
                        <el-menu-item index="7">
                            <a href="./rsync/data" target="_blank">
                            <i class="el-icon-setting"></i>
                            <span slot="title"> 配置数据同步（沙盒）</span>
                            </a>
                        </el-menu-item>
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>研发专用工具</span>
                            </template>
                            <el-menu-item-group>
                                <template slot="title">自研工具</template>
                                <el-menu-item index="1-1">
                                    <router-link to="/ntcs/ntsApi">nts接口返回</router-link>
                                </el-menu-item>
                                <el-menu-item index="1-2">
                                    <router-link to="/ntcs/bindPhone">绑定手机号到交易单</router-link>
                                </el-menu-item>
                                <el-menu-item index="1-3">
                                    <router-link to="/ntcs/unbindPhone">解绑手机号到交易单</router-link>
                                </el-menu-item>
                                <el-menu-item index="1-4">
                                    <router-link to="/ntcs/jiami">数据加解密</router-link>
                                </el-menu-item>
                                <el-menu-item index="1-4">
                                    <router-link to="/ntcs/bjUnbind">用户解绑 [北京]</router-link>
                                </el-menu-item>
                                <a href="http://10.26.28.169:8001/static/" target="_blank">
                                    <el-menu-item index="1-7">Kafka发射器</el-menu-item>
                                </a>
                            </el-menu-item-group>
                        </el-submenu>
                    </el-menu>
                </el-col>
            </el-aside>

            <router-view></router-view>

        </el-container>
    </div>
</template>

<script>
    export default {
        name: 'ntcs',
        props: {
            msg: String
        },
        methods: {
            handleOpen(key, keyPath) {
                //todo 在这里进行权限判断
                //console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                //console.log(key, keyPath);
            }
            }
    }
</script>

<style>
    a:link{text-decoration: none;color: black}
    a:active{text-decoration:none}
    a:hover{text-decoration:none;color: black}
    a:visited{text-decoration: none;color: black}
</style>