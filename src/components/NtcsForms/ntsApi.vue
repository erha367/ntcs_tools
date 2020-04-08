<template>
    <div class="ntsApi">
        <el-alert
                title="查看nts接口返回的交易单数据，请在chrome浏览器下安装json-viewer插件。"
                type="info">
        </el-alert>
        <br>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="交易单id">
                <el-input v-model="formInline.businessId" placeholder="请输入businessId"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>
        <hr>
    </div>
</template>

<script>
    export default {
        name: 'ntsApi',
        props: {
            msg: String
        },
        data() {
            return {
                formInline: {
                    businessId: '',
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
                window.open("/debug/getBizInfo?businessId=" + this.formInline.businessId);
            }
        }
    }
</script>

<style>
    .ntsApi {
        margin: 50px 50px;
        width: 600px;
    }
</style>
