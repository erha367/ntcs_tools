<template>
    <div class="bindPhone">
        <el-alert
                title="绑定手机号到指定的交易单，可选择身份。"
                type="info">
        </el-alert>
        <br>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="手机号">
                <el-input v-model="formInline.phone" placeholder="手机号"></el-input>
            </el-form-item>
            <el-form-item label="交易id">
                <el-input v-model="formInline.businessId" placeholder="交易id"></el-input>
            </el-form-item>
            <el-form-item label="用户类型">
                <el-select v-model="formInline.userType" placeholder="用户类型">
                    <el-option label="卖方" value="7"></el-option>
                    <el-option label="买方" value="8"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">绑定</el-button>
            </el-form-item>
        </el-form>
        <hr>
    </div>
</template>

<script>
    import Axios from 'axios';

    export default {
        name: 'bindPhone',
        props: {
            msg: String
        },
        data() {
            return {
                formInline: {
                    businessId: '',
                    phone: '',
                    userType: '',
                }
            }
        },
        methods: {
            onSubmit() {
                if (this.formInline.businessId.length == 0 || this.formInline.phone.length == 0 || this.formInline.userType.length == 0) {
                    this.$message({
                        message: '参数非法',
                        type: 'warning'
                    });
                    return false;
                }
                var bizInfoApi = '/bind/phone';
                Axios.get(bizInfoApi, {params: this.formInline})
                    .then((response) => {
                        if (response.data.error || response.data.code != 1) {
                            this.$message('请求失败');
                        } else {
                            this.$message('绑定成功');
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
    .bindPhone {
        margin: 50px 50px;
        width: 100%;
    }
</style>
