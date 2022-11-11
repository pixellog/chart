<template>
  <!-- errorInfoModal -->
  <div class="modal fade" :id="'errorInfoModal'+data[0]" tabindex="-1" aria-labelledby="errorInfoModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-scrollable modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header d-flex align-center">
          <h1 class="modal-title fs-5">Error Info</h1>
          <div class="ml-3">총 <span class="text-primary">{{ lists.length }}</span>개의 항목이 있습니다.</div>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body pa-4 text-left">
<!--          <div class="alert alert-secondary">
            <ul class="unlist mb-0">
              <li>인증서 만료일 : 2022.10.30 (인증서 갱신이 필요합니다.)</li>
              <li>국세청 조회 인증서 여부 :
                <span v-if="true" class="text-primary">정상</span>
                <span v-else class="text-danger">국세청 조회 가능한 인증서가 없습니다.</span>
              </li>
            </ul>
          </div>-->
          <table class="table table-hover table-sm">
            <thead>
            <tr>
              <th class="text-center" v-for="item in ['번호','모듈코드','에러코드','발생일시']" :key="item.id">
                {{ item }}
              </th>
            </tr>
            </thead>
            <tbody class="table-group-divider">
            <tr v-for="(item,i) in lists" :key="item.id">
              <td class="text-center">{{ i + 1 }}</td>
              <td class="text-center">{{ item.module_name }}</td>
              <td class="text-center">{{ item.ret_cd }}</td>
              <td class="text-center">{{ item.crt_dt }}</td>
            </tr>
            </tbody>
          </table>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: []
    },
  },
  computed: {
    lists(){
      return this.selectErrorList(this.data[0], this.data[1]).errorInfo
    }
  },
  methods: {
    selectErrorList(corpNo, taskId) {
      var returnValue;
      var params = {};
      params.corpNo = corpNo;
      params.taskId = taskId;

      $.ajax({
        url: "http://localhost:8080/dataroom/selectErrorList",
        type: "POST",
        data: JSON.stringify(params),
        dataType: "json",
        async: false,
        contentType: "application/json;charset=utf-8",
        success: function (data) {
          console.log(data)
          returnValue = data;
        },
        error: function (err) {
          console.log(err);
        }
      });

      return returnValue;
    }
  },
}
</script>
