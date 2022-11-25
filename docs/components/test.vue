<template>
  <div class="container py-6">
    <div class="row">
      <div class="col-auto flex-grow-1">
        <div class="d-flex align-center">
          <h4 id="corpNm" class="text-white"></h4>
          <div class="ml-3 text-white opacity-50">
            <span v-if="true"></span>
            <span v-else>비상장</span>
          </div>
        </div>

        <div class="text-white opacity-50 text-caption">
          <div id="bizItems">
          </div>
          <div class="mt-2 d-flex align-center lh-1">
            <span id="corpNo"></span><span class="vr mx-3"/>
            <span id="repNm"></span><span class="vr mx-3"/>
            <span id="bizRegDt"></span>
          </div>
          <div class="mt-2">
            <span id="corpAddr"></span>
          </div>
        </div>
      </div>
      <div class="col-auto">
        <div class="d-flex align-center text-white opacity-50 small justify-end pr-3">정보수집일 <i
          class="material-symbols-outlined icon-sm ml-2 mr-1">schedule</i> <div
          id="upDateDate"></div> </div>
      </div>
    </div>

  </div>
</template>


<script>
export default {
  name : 'regInfo',
  data() {
    return {
      getcorpNo : $('#reqCorpNo').val(),
      getUpdateDt : $('#reqUpdateDt').val(),
    }
  },
  computed: {
    getUpdateDt2() {
      return this.getUpdateDt!= undefined ? this.getUpdateDt.replaceAll('\-', '\.') : '. .'
    }
  },
  mounted() {
    this.getRegInfo(this.getcorpNo);
  },
  methods: {
    getRegInfo(corpNo) {
      var returnValue;
      $.ajax({
        url: "/corpInfo/regInfo",
        type: "POST",
        data: JSON.stringify({"corpNo":corpNo}),
        dataType: "json",
        async: false,
        contentType: "application/json;charset=utf-8",
        success: function(data) {
          returnValue = data;
          $('#corpNm').text(returnValue.corpNm);
          $('#corpNo').text(returnValue.corpNo.substring(0,3) + "-" +
            returnValue.corpNo.substring(3,5) + "-" + returnValue.corpNo.substring(5));
          $('#repNm').text("대표 " + returnValue.repNm);
          $('#bizRegDt').text("설립일 " + returnValue.bizRegDt.replaceAll('\-', '\.'));
          $('#corpAddr').text(returnValue.corpAddr);
          var bizItems = returnValue.bizItems.split('|');
          bizItems.forEach(bizItem => $('#bizItems').append('<span class="text-white mr-3" >#'
            + bizItem + '</span>'));
        },
        error: function(err) {
          console.log(err);
        }
      });

      return returnValue;
    }
  },
}

</script>
