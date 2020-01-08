<template>
    <div class="clearUserStatus">
        <el-alert
                title="通过交易单id，手机号清除用户身份状态。"
                type="info">
        </el-alert>
        <br>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="交易单id">
                <el-input v-model="formInline.businessId" placeholder="请输入businessId"></el-input>
            </el-form-item>
            <el-form-item label="手机号">
                <el-input v-model="formInline.phone" placeholder="请输入phone"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">拉取交易单</el-button>
            </el-form-item>
        </el-form>
        <hr>
    </div>
</template>

<script>
    import Axios from 'axios';

    export default {
        name: 'clearUserStatus',
        props: {
            msg: String
        },
        data() {
            return {
                formInline: {
                    businessId: '',
                    phone: '',
                }
            }
        },
        methods: {
            onSubmit() {
                if (this.formInline.businessId.length == 0 || this.formInline.phone.length == 0) {
                    this.$message({
                        message: '参数非法',
                        type: 'warning'
                    });
                    return false;
                }
                var bizInfoApi = '/debug/clearUserCfmStatus';
                Axios.get(bizInfoApi, {params: this.formInline})
                    .then((response) => {
                        if (response.data.error || response.data.code != 1) {
                            this.$message('请求失败');
                        } else {
                            this.$message('操作成功');
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
    .clearUserStatus {
        margin: 50px 50px;
        width: 100%;
    }
</style>
