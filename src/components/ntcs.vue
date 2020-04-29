<template>
    <div class="ntcs">
        <el-container>
            <el-aside width="200px">
                <span class="tops" v-if="show > 0">
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
                            <i class="el-icon-setting"></i>
                            <span slot="title"><router-link to="/ntcs/bindMsg">发送绑定消息到NTS</router-link></span>
                        </el-menu-item>
                        <el-menu-item index="8">
                            <i class="el-icon-setting"></i>
                            <span slot="title"><router-link to="/ntcs/resetCheckShort">重置用户后4位验证上限</router-link></span>
                        </el-menu-item>
                        <el-menu-item index="9">
                            <i class="el-icon-setting"></i>
                            <span slot="title"><router-link to="/ntcs/getContractProtocols">查询履约协议</router-link></span>
                        </el-menu-item>
                        <el-menu-item index="10">
                            <i class="el-icon-setting"></i>
                            <span slot="title"><router-link to="/ntcs/dataCompare">用户数据比对</router-link></span>
                        </el-menu-item>
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>研发专用工具</span>
                            </template>
                            <div class="results" v-if="show == 1">
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
                                <el-menu-item index="1-5">
                                    <router-link to="/ntcs/bjUnbind">用户解绑[北京]</router-link>
                                </el-menu-item>
                                <el-menu-item index="1-6">
                                    <router-link to="/ntcs/openCity">开城工具</router-link>
                                </el-menu-item>
                                <a href="http://10.26.28.169:8001/static/" target="_blank">
                                    <el-menu-item index="1-5">Kafka发射器</el-menu-item>
                                </a>
                                <a href="./rsync/data" target="_blank">
                                    <el-menu-item index="1-6">配置数据同步[沙盒]</el-menu-item>
                                </a>
                            </el-menu-item-group>
                            </div>
                        </el-submenu>
                    </el-menu>
                </el-col>
                </span>
            </el-aside>
            <router-view></router-view>
        </el-container>
    </div>
</template>

<script>
    import Axios from 'axios';
    export default {
        name: 'ntcs',
        props: {
            msg: String
        },
        data() {
            return {
                show: false,
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                return false;
            },
            handleClose(key, keyPath) {
                //console.log(key, keyPath);
            },
        },
        mounted() {
            //console.log('模板被编译完成，请求数据放在这里 done');
            //默认加密
            var jiami = '/tool/login/info';
            //var jiami = 'http://weapons.ke.com/mock/1259/tool/login/info';
            Axios.get(jiami, {params: this.formInline})
                .then((response) => {
                    //console.log(response.data);
                    if (response.data.error || response.data.code != 1) {
                        this.$message(response.data.msg);
                    } else {
                        if (response.data.data != null) {
                            this.show = response.data.data.auth
                        } else {
                            this.show = 0;
                        }
                    }
                })
                .catch((error) => {
                    this.$message('系统异常:' + error);
                });
        },
    }
</script>

<style>
    a:link{text-decoration: none;color: black}
    a:active{text-decoration:none}
    a:hover{text-decoration:none;color: black}
    a:visited{text-decoration: none;color: black}
</style>