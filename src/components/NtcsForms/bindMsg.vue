<template>
    <div class="bindMsg">
        <el-alert
                title="根据交易单id发送绑定消息。"
                type="info">
        </el-alert>
        <br>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="交易单id">
                <el-input v-model="formInline.bizId" placeholder="请输入businessId"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">发送</el-button>
            </el-form-item>
        </el-form>
        <hr>
    </div>
</template>

<script>
    import Axios from 'axios';

    export default {
        name: 'bindMsg',
        props: {
            msg: String
        },
        data() {
            return {
                formInline: {
                    bizId: '',
                    appId: 410100
                }
            }
        },
        methods: {
            onSubmit() {
                if (this.formInline.businessId.length == 0) {
                    this.$message({
                        message: '参数非法',
                        type: 'warning'
                    });
                    return false;
                }
                var bizInfoApi = '/tool/bind/msg';
                Axios.get(bizInfoApi, {params: this.formInline})
                    .then((response) => {
                        if (response.data.error || response.data.code != 1) {
                            this.$message('请求失败');
                        } else {
                            this.$message('发送成功');
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
    .bindMsg {
        margin: 50px 50px;
        width: 100%;
    }
</style>
