<template>
    <div class="userInfo">
        <el-alert
                title="查询交易单详情、用户信息及绑定情况等，以下查询条件只填写一个即可。"
                type="info">
        </el-alert>
        <br>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="交易编号">
                <el-input v-model="formInline.bizCode" placeholder="交易编号"></el-input>
            </el-form-item>
            <el-form-item label="交易单id">
                <el-input v-model="formInline.businessId" placeholder="交易id"></el-input>
            </el-form-item>
            <el-form-item label="合同编号">
                <el-input v-model="formInline.contractNo" placeholder="合同编号"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>
        <el-divider></el-divider>
        <div class="results" v-if="show">
            <h3>交易单信息</h3>
            <span class="basic">
            <div>交易单id : {{resData.data.business_id}}</div>
            <div>系统id : {{resData.data.app_id}}</div>
            <div>合同id : {{resData.data.contract_id}}</div>
            <div>合同编号 : {{resData.data.contract_no}}</div>
            <div>一级产品编码 : {{resData.data.trade_product}}</div>
            <div>二级产品编码 : {{resData.data.sub_trade_product}}</div>
            <div>签约时间 : {{resData.data.sign_time}}</div>
            <div>订单状态 : {{resData.data.order_status}}</div>
            <div>有章打印时间 : {{resData.data.print_time}}</div>
            <div>交易单状态 : {{resData.data.business_status_str}}</div>
                </span>
            <h3>用户信息</h3>
            <template>
                <el-table
                        :data="resData.data.phone"
                        style="width: 100%">
                    <el-table-column type="expand">
                        <template slot-scope="props">
                            <span v-for="binds in props.row.check_card">
                            <el-form label-position="left" inline class="demo-table-expand">
                                <el-form-item label="绑定证件">
                                <span>{{ binds.card_no }}</span>
                            </el-form-item>
                                <el-form-item label="来源">
                                    <span>{{ binds.source }}</span>
                                </el-form-item>
                                <el-form-item label="绑定时间">
                                    <span>{{ binds.created_at }}</span>
                                </el-form-item>
                            </el-form>
                                 <el-divider></el-divider>
                            </span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="用户姓名"
                            prop="user_name">
                    </el-table-column>
                    <el-table-column
                            label="手机号"
                            prop="phone_no">
                    </el-table-column>
                    <el-table-column
                            label="证件号"
                            prop="card_no">
                    </el-table-column>
                    <el-table-column
                            label="角色"
                            prop="user_type_desc">
                    </el-table-column>
                    <el-table-column
                            label="是否绑定"
                            prop="check_card.length">
                    </el-table-column>
                </el-table>
            </template>
        </div>
    </div>
</template>

<script>
    import Axios from 'axios';

    export default {
        name: 'userInfo',
        data() {
            return {
                formInline: {
                    bizCode: '',
                    businessId: '',
                    contractNo: ''
                },
                resData: {},
                show: false,
            }
        },
        methods: {
            onSubmit() {
                var slen = this.formInline.bizCode.length + this.formInline.businessId.length + this.formInline.contractNo.length;
                if (slen == 0) {
                    this.$message({
                        message: '参数非法',
                        type: 'warning'
                    });
                    return false;
                }
                var bizInfoApi = '/rsync/bizUserInfo';
                Axios.get(bizInfoApi, {params: this.formInline})
                    .then((response) => {
                        if (response.data.error || response.data.code != 1) {
                            this.$message('请求失败');
                        } else {
                            if(response.data.data.length == 0){
                                this.$message('查询结果为空');
                                return false;
                            }
                            this.resData = response.data;
                            this.show = true;
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
    .userInfo {
        margin: 50px 50px;
        width: 100%;
    }

    .demo-table-expand {
        font-size: 0;
    }

    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }

    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }

    .basic {
        color: #999999;
        font-size: 14px;
    }
</style>
