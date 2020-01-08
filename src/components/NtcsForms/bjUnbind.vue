<template>
    <div class="bjUnbind">
        <el-alert
                title="北京可视化解除绑定手机号到指定的交易单。"
                type="info">
        </el-alert>
        <br>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="手机号">
                <el-input v-model="formInline.mobile" placeholder="手机号(必填)"></el-input>
            </el-form-item>
            <el-form-item label="交易id">
                <el-input v-model="formInline.businessId" placeholder="交易id(必填)"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">解除绑定</el-button>
            </el-form-item>
        </el-form>
        <hr>
    </div>
</template>

<script>
    import Axios from 'axios';

    export default {
        name: 'bjUnbind',
        props: {
            msg: String
        },
        data() {
            return {
                formInline: {
                    businessId: '',
                    mobile: '',
                }
            }
        },
        methods: {
            onSubmit() {
                if (this.formInline.mobile.length == 0) {
                    this.$message({
                        message: '参数非法',
                        type: 'warning'
                    });
                    return false;
                }
                //测试环境url
                //var bjUrl      = 'http://bridgedev.com/v2/tool/untieUserPhone';
                //线上
                var bjUrl      = 'http://user.gtex.lianjia.com/v2/tool/untieUserPhone';
                var postData   = {
                    "url":bjUrl,
                    "method":"get",
                    "params":JSON.stringify(this.formInline)
                };
                var bizInfoApi = '/remote/call';
                Axios.get(bizInfoApi, {params: postData})
                    .then((response) => {
                        if (response.data.error || response.data.data.errno != 0) {
                            this.$message('请求失败');
                        } else {
                            this.$message('解除绑定成功');
                        }
                    })
                    .catch((error) => {
                        this.$message('系统异常:' + error);
                    });
            }
        }
    }
</script>

<style>
    .bjUnbind {
        margin: 50px 50px;
        width: 100%;
    }
</style>
