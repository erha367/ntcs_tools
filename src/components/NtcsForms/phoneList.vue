<template>
    <div class="phoneList">
        <el-alert
                title="根据手机号查询该用户名下的交易单信息"
                type="info">
        </el-alert>
        <br>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="用户手机号">
                <el-input v-model="formInline.phone" placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>
        <hr>
        <div class="results" v-if="show">
            <h3>查询结果</h3>
            <template>
                <el-table
                        :data="resData"
                        border
                        style="width: 100%">
                    <el-table-column
                            prop="businessId"
                            label="交易单Id号"
                            width="100">
                    </el-table-column>
                    <el-table-column
                            prop="businessCode"
                            label="交易编号"
                            width="100">
                    </el-table-column>
                    <el-table-column
                            prop="contractId"
                            label="合同编号"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="房屋名称">
                    </el-table-column>
                    <el-table-column
                            prop="wuyedizhi"
                            label="物业地址">
                    </el-table-column>
                    <el-table-column
                            prop="businessStatusStr"
                            label="交易单状态">
                    </el-table-column>
                </el-table>
            </template>
        </div>
    </div>
</template>

<script>
    import Axios from 'axios';

    export default {
        name: 'phoneList',
        props: {
            msg: String
        },
        data() {
            return {
                formInline: {
                    phone: '',
                    source: 3
                },
                resData: {},
                show: false,
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
                var bizInfoApi = '/business/phone/list';
                Axios.get(bizInfoApi, {params: this.formInline})
                    .then((response) => {
                        if (response.data.error || response.data.code != 1) {
                            this.$message('请求失败');
                        } else {
                            //this.$message('同步成功');
                            this.show = true;
                            this.resData = response.data.data;
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
    .phoneList {
        margin: 50px 50px;
        width: 100%;
    }
</style>
