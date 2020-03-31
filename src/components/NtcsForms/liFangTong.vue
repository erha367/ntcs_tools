<template>
    <div class="li_fang_tong">
        <el-alert
                title="理房通反查接口，通过协议编号查询"
                type="info">
        </el-alert>
        <br>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="协议编号（必填）">
                <el-input v-model="formInline.bargNo" placeholder="请输入协议编号"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>
        <hr>
        <div class="results" v-if="show">
            <h3>返回结果</h3>
            <div>协议编号：{{ resData.bargNo }}</div>
            <div>买方：{{ resData.buyer }}</div>
            <div>卖方：{{ resData.seller }}</div>
            <div style="height: 10px"></div>
            <div>资金向及明细：</div>
            <template>
                <el-table
                        :data="resData.fundList"
                        style="width: 100%">
                    <el-table-column
                            prop="type"
                            label="款项"
                            width="300">
                    </el-table-column>
                    <el-table-column
                            prop="amount"
                            label="金额"
                            width="300">
                    </el-table-column>
                </el-table>
            </template>
        </div>
    </div>
</template>

<script>
    import Axios from 'axios';

    export default {
        name: 'liFangTong',
        props: {
            msg: String
        },
        data() {
            return {
                formInline: {
                    str: '',
                },
                resData: '',
                show: false,
            }
        },
        methods: {
            onSubmit() {
                if (this.formInline.bargNo.length == 0) {
                    this.$message({
                        message: '参数非法',
                        type: 'warning'
                    });
                    return false;
                }
                //默认加密
                var jiami = '/tool/liFangContract';
                Axios.get(jiami, {params: this.formInline})
                    .then((response) => {
                        if (response.data.error || response.data.code != 1) {
                            this.$message(response.data.msg);
                        } else {
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
    .li_fang_tong {
        margin: 50px 50px;
        width: 100%;
    }
</style>
