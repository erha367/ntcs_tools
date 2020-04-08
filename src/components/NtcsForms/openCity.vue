<template>
    <div class="openCity">
        <el-alert
                title="可视化开城工具，请依次填写app_id、apps表字段、值"
                type="info">
        </el-alert>
        <br>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="城市appId">
                <el-input v-model="formInline.appId" placeholder="城市appId"></el-input>
            </el-form-item>
            <el-form-item label="字段名称">
                <el-input v-model="formInline.column" placeholder="字段名称"></el-input>
            </el-form-item>
            <el-form-item label="设置值">
                <el-input v-model="formInline.value" placeholder="字段值"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">操作</el-button>
            </el-form-item>
        </el-form>
        <hr>
    </div>
</template>

<script>
    import Axios from 'axios';

    export default {
        name: 'openCity',
        props: {
            msg: String
        },
        data() {
            return {
                formInline: {
                    column: '',
                    appId: '',
                    value: 0,
                }
            }
        },
        methods: {
            onSubmit() {
                if (this.formInline.appId.length == 0 || this.formInline.column.length == 0 || this.formInline.value.length == 0) {
                    this.$message({
                        message: '参数非法',
                        type: 'warning'
                    });
                    return false;
                }
                var bizInfoApi = '/tool/open/city';
                Axios.get(bizInfoApi, {params: this.formInline})
                    .then((response) => {
                        if (response.data.error || response.data.code != 1) {
                            this.$message('请求失败');
                        } else {
                            if(response.data.data == true){
                                this.$message('操作成功');
                            }else{
                                this.$message('操作失败' + response.data.data);
                            }
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
    .openCity {
        margin: 50px 50px;
        width: 100%;
    }
</style>
