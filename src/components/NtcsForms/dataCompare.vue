<template>
    <div class="dataCompare">
        <el-alert
                title="根据合同编号比对可视化、合同、nts用户信息"
                type="info">
        </el-alert>
        <br>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="合同编号">
                <el-input v-model="formInline.contractNo" placeholder="请输入合同编号"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">发送</el-button>
            </el-form-item>
        </el-form>
        <hr>
        <div class="results" v-if="show">
            <h3>合同数据</h3>
            <el-table
                        :data="resData.online"
                        border
                        style="width: 100%">
                    <el-table-column
                            prop="role"
                            label="用户角色"
                            width="200">
                    </el-table-column>
                    <el-table-column
                            prop="partyName"
                            label="用户姓名"
                            width="200">
                    </el-table-column>
                    <el-table-column
                            prop="phone1"
                            label="用户电话"
                            width="200">
                    </el-table-column>
                    <el-table-column
                            prop="partyCardNo"
                            label="证件号码"
                            >
                    </el-table-column>
                </el-table>
            <h3>NTS数据</h3>
            <el-table
                        :data="resData.nts"
                        border
                        style="width: 100%">
                    <el-table-column
                            prop="role"
                            label="用户角色"
                            width="200">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="用户姓名"
                            width="200">
                    </el-table-column>
                    <el-table-column
                            prop="phone"
                            label="用户电话"
                            width="200">
                    </el-table-column>
                    <el-table-column
                            prop="card_no"
                            label="证件号码"
                            >
                    </el-table-column>
                </el-table>
            <h3>可视化数据</h3>
            <el-table
                        :data="resData.ntcs"
                        border
                        style="width: 100%">
                    <el-table-column
                            prop="user_type_desc"
                            label="用户角色"
                            width="200">
                    </el-table-column>
                    <el-table-column
                            prop="user_name"
                            label="用户姓名"
                            width="200">
                    </el-table-column>
                    <el-table-column
                            prop="phone_no"
                            label="用户电话"
                            width="200">
                    </el-table-column>
                    <el-table-column
                            prop="card_no"
                            label="证件号码"
                            >
                    </el-table-column>        
                    <el-table-column
                            prop="check_card.length"
                            label="是否绑定"
                            >        
                    </el-table-column>
                </el-table>
        </div>
    </div>
</template>

<script>
    import Axios from 'axios';

    export default {
        name: 'dataCompare',
        props: {
            msg: String
        },
        data() {
            return {
                formInline: {
                    contractNo: '',
                    appId: 410100
                },
                resData: '',
                show: false,
            }
        },
        methods: {
            onSubmit() {
                if (this.formInline.contractNo.length == 0) {
                    this.$message({
                        message: '参数非法',
                        type: 'warning'
                    });
                    return false;
                }
                //var bizInfoApi = 'http://weapons.ke.com/mock/1259/tool/data/compare';
                var bizInfoApi = '/tool/data/compare';
                Axios.get(bizInfoApi, {params: this.formInline})
                    .then((response) => {
                        if (response.data.error || response.data.code != 1) {
                            this.$message('请求失败');
                        } else {
                            this.show = true;
                            this.resData = response.data.data;
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
    .dataCompare {
        margin: 50px 50px;
        width: 100%;
    }
</style>
