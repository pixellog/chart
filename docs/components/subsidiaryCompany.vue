<template>
  <div class="d-flex align-center justify-end mt-n16 mb-10">
    <i class="material-symbols-outlined mr-n9 position-relative">search</i>
    <input v-model="searchString" type="search" class="form-control rounded-pill pl-10" placeholder="Search" style="width: 240px;"/>
  </div>

  <table class="table table-hover border-top mt-5">
    <!--    <thead>
        <tr>
          <th v-for="header in headers" @click="setSortColumn(header.key)" class="text-center py-3" style="cursor: pointer">
            {{ header.value }}
            <span class="arrow opacity-25" :class="{ 'opacity-100': sortColumn === header.key && order === 'ASC'}">&#8593;</span>
            <span class="arrow opacity-25" :class="{ 'opacity-100': sortColumn === header.key && order === 'DESC'}">&#8595;</span>
          </th>
        </tr>
        </thead>-->
    <thead>
    <tr>
      <th colspan="3" class="text-center">주식발행법인</th>
      <th v-for="(item,i) in ['보유주식 수','지분율']" :key="item.id" @click="setSortColumn(['stockCnt','stockRatio'][i])"
          style="cursor:pointer;" rowspan="2" class="text-center border-start">
        {{ item }}
        <span class="arrow opacity-25" :class="{ 'opacity-100': this.sortColumn === ['stockCnt','stockRatio'][i] && this.order === 'ASC'}">&#8593;</span>
        <span class="arrow opacity-25" :class="{ 'opacity-100': this.sortColumn === ['stockCnt','stockRatio'][i] && this.order === 'DESC'}">&#8595;</span>
      </th>
    </tr>
    <tr>
      <th class="text-center">법인명</th>
      <th class="text-center border-start">사업자번호</th>
      <th class="text-center border-start">관할세무서</th>
    </tr>
    </thead>
    <tbody v-if="!returnValue.length" class="table-group-divider">
    <tr>
      <td colspan="5" class="text-center">조회된 데이터가 없습니다.</td>
    </tr>
    </tbody>
    <tbody v-else class="table-group-divider">
    <tr v-for="item in filteredWorkers" :key="item.id">
      <td class="text-left">{{ item.ownedStockCorpNm }}</td>
      <td class="text-center">{{ item.ownedStockCorpNo.substring(0, 3) }}-{{ item.ownedStockCorpNo.substring(3, 5) }}-{{ item.ownedStockCorpNo.substring(5) }}</td>
      <td class="text-center">{{ item.compeOrg }}</td>
      <td class="text-right">{{ item.stockCnt.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") }}</td>
      <td class="text-right">{{ item.stockRatio }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'subsidiaryCompany',
  mounted() {
    this.getSubsidiaryCompany(this.corpNo);
    this.getWorkers();
  },
  data() {
    return {
      corpNo: get_query().corpNo,
      returnValue: {},
      searchString: '',
      sortColumn: "",
      order: "ASC",
      headers: [],
      workers: [],
    }
  },
  computed: {
    filteredWorkers() {
      const filteredWorkers = this.searchString === ""
        ? this.workers
        : this.workers.filter(wo => Object.values(wo).join("").indexOf(this.searchString) !== -1);

      const column = this.sortColumn
      const order = this.order;

      filteredWorkers.sort(function (a, b) {
        let nameA = a[column] + "".toUpperCase();
        let nameB = b[column] + "".toUpperCase();

        // typeof number 일때 예외처리
        if (column == 'ownedStockCorpNo' || column == 'stockCnt' || column == 'stockRatio') {
          nameA = parseInt(nameA)
          nameB = parseInt(nameB)
        }

        if (order === "DESC" && nameA > nameB) {
          return -1;
        }
        if (order === "DESC" && nameA < nameB) {
          return 1;
        }
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        return 0;
      });

      return filteredWorkers;
    },
  },
  methods: {
    async getWorkers() {
      const workers = this.returnValue;
      const headers = [
        {key: "ownedStockCorpNm", value: "법인명"},
        {key: "ownedStockCorpNo", value: "사업자번호"},
        {key: "compeOrg", value: "관할세무서"},
        {key: "stockCnt", value: "보유주식수"},
        {key: "stockRatio", value: "지분율"},
      ];

      this.headers = headers;
      this.workers = workers;
    },
    setSortColumn(column) {
      if (this.sortColumn === column) {
        this.order = this.order === "ASC" ? "DESC" : "ASC";
      } else {
        this.order = "ASC";
        this.sortColumn = column;
      }
    },
    getSubsidiaryCompany(corpNo) {
      const $this = this;
      $.ajax({
        url: "http://localhost:8080/corpInfo/subsidiaryCompany",
        type: "POST",
        data: JSON.stringify({"corpNo": corpNo}),
        dataType: "json",
        async: false,
        contentType: "application/json;charset=utf-8",
        success: function (data) {
          $this.returnValue = data;
        },
        error: function (err) {
          console.log(err);
        }
      });
    }
  },
}

</script>

