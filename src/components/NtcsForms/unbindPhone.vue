<template>
    <div class="unbindPhone">
        <el-alert
                title="解除绑定手机号到指定的交易单。"
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
        name: 'bindPhone',
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
                if (this.formInline.phone.length == 0) {
                    this.$message({
                        message: '参数非法',
                        type: 'warning'
                    });
                    return false;
                }
                var bizInfoApi = '/unbind/phone';
                Axios.get(bizInfoApi, {params: this.formInline})
                    .then((response) => {
                        if (response.data.error || response.data.code != 1) {
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
    .unbindPhone {
        margin: 50px 50px;
        width: 100%;
    }
</style>
