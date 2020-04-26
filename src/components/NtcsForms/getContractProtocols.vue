<template>
  <div class="getContractProtocols">
    <el-alert title="查询履约协议，以下参数均为必填" type="info"></el-alert>
    <br />
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="合同编号（必填）">
        <el-input v-model="formInline.contractNo" placeholder="合同编号（必填）"></el-input>
      </el-form-item>
      <el-form-item label="交易单id（必填）">
        <el-input v-model="formInline.businessId" placeholder="交易单id（必填）"></el-input>
      </el-form-item>
      <el-form-item label="用户手机号（必填）">
        <el-input v-model="formInline.mobile" placeholder="用户手机号（必填）"></el-input>
      </el-form-item>
      <el-form-item label="来源">
        <el-select v-model="formInline.source" placeholder="来源">
          <el-option label="掌链" value="1"></el-option>
          <el-option label="贝壳" value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="用户身份">
        <el-select v-model="formInline.identityType" placeholder="身份">
          <el-option label="买方" value="1"></el-option>
          <el-option label="卖方" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <hr />
    <div class="results" v-if="show">
      <h3>协议数量：{{resData.basicInfo.protocolNums}}</h3>
      <div v-for="protocols in resData.protocolList" style="border:0.5px solid gray;padding:40px;">
        <h4>协议类型：{{ protocols.label }}</h4>
        <h4>协议编号：{{ protocols.productCode }}</h4>
        <h4>协议状态：{{ protocols.standardStatusDesc }}</h4>
        <h4>创建时间：{{ protocols.createTime }}</h4>
        <h4>错误提示：{{ protocols.errHint }}</h4>
        <h4>资金流水：</h4>
        <template>
          <el-table :data="protocols.protocolFundItemList" border style="width: 100%">
            <el-table-column prop="fundName" label="资金名称" width="200"></el-table-column>
            <el-table-column prop="totalAmount" label="总金额" width="200"></el-table-column>
            <el-table-column prop="cellectionAmount" label="已付金额" width="200"></el-table-column>
          </el-table>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  name: "getContractProtocols",
  props: {
    msg: String
  },
  data() {
    return {
      formInline: {
        contractNo: "",
        businessId: "",
        mobile: "",
        source: "",
        identityType: ""
      },
      resData: "",
      show: false
    };
  },
  methods: {
    onSubmit() {
      if (
        this.formInline.contractNo.length == 0 ||
        this.formInline.businessId.length == 0 ||
        this.formInline.mobile.length == 0
      ) {
        this.$message({
          message: "参数非法",
          type: "warning"
        });
        return false;
      }
      //默认加密
      var url = "/fund/getContractProtocols";
      //var url = 'http://weapons.ke.com/mock/1259/fund/getContractProtocols';
      Axios.get(url, { params: this.formInline })
        .then(response => {
          if (response.data.error || response.data.code != 1) {
            this.$message(response.data.msg);
          } else {
            if (response.data.data.length == 0) {
              this.$message("臣妾查不到呀！");
            } else {
              this.show = true;
              this.resData = response.data.data;
            }
          }
        })
        .catch(error => {
          this.$message("系统异常:" + error);
        });
    }
  }
};
</script>

<style>
.getContractProtocols {
  margin: 50px 50px;
  width: 100%;
}
</style>
