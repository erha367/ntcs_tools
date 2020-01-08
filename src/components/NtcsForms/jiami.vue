<template>
    <div class="jiami">
        <el-alert
                title="对字符串进行加密解密 aes-128"
                type="info">
        </el-alert>
        <br>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="用户手机号">
                <el-input v-model="formInline.str" placeholder="请输入字符串"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit(0)">加密</el-button>
                <el-button type="success" @click="onSubmit(1)">解密</el-button>
            </el-form-item>
        </el-form>
        <hr>
        <div class="results" v-if="show">
            <h3>返回结果</h3>
            <div>{{ resData }}</div>
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
                    str: '',
                },
                resData: '',
                show: false,
            }
        },
        methods: {
            onSubmit(x) {
                if (this.formInline.str.length == 0) {
                    this.$message({
                        message: '参数非法',
                        type: 'warning'
                    });
                    return false;
                }
                //默认加密
                var jiami = '/debug/jiami';
                if (x == 1) {
                    jiami = '/debug/jiemi';
                }
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
    .jiami {
        margin: 50px 50px;
        width: 100%;
    }
</style>
