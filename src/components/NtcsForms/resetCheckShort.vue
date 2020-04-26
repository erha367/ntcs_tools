<template>
    <div class="resetCheckShort">
        <el-alert
                title="重置用户验证后4位错误上限。"
                type="info">
        </el-alert>
        <br>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="手机号">
                <el-input v-model="formInline.phone" placeholder="请输入用户手机号码"></el-input>
            </el-form-item>
            <el-form-item label="来源">
                <el-select v-model="formInline.source" placeholder="来源">
                    <el-option label="掌链" value="1"></el-option>
                    <el-option label="贝壳" value="3"></el-option>
                </el-select>
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
        name: 'resetCheckShort',
        props: {
            msg: String
        },
        data() {
            return {
                formInline: {
                    phone: '',
                    source: '',
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
                var bizInfoApi = '/tool/reset/short';
                Axios.get(bizInfoApi, {params: this.formInline})
                    .then((response) => {
                        if (response.data.error || response.data.code != 1) {
                            this.$message('远程请求失败');
                        } else {
                            this.$message('操作成功');
                        }
                    })
                    .catch((error) => {
                        this.$message('系统异常: ' + error);
                    });
            }
        }
    }
</script>

<style>
    .resetCheckShort {
        margin: 50px 50px;
        width: 100%;
    }
</style>
