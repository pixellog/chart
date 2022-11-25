function numberWithCommas(x) {
    if(x != null){
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}
function numberRemoveCommasAndKr(x) {
    if(x != null) {
        return x.toString().replace(/\,/g, "").replaceAll("원", "");
    }
}
function get_query(){
    var url = document.location.href;
    var qs = url.substring(url.indexOf('?') + 1).split('&');
    for(var i = 0, result = {}; i < qs.length; i++){
        qs[i] = qs[i].split('=');
        result[qs[i][0]] = decodeURIComponent(qs[i][1]);
    }
    return result;
}

const filters = {
    comma(val) {
        return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    yymmdd(val) {
        return String(val).replace(/(\d{4})(\d{2})(\d{2})/g, '$1.$2.$3');
    },
    hms(val) {
        return String(val).replace(/\B(?=(\d{2})+(?!\d))/g, ":");
    },
    corpNo(val) {
        return String(val).replace(/(\d{3})(\d{2})/g, '$1-$2-$3');
    }
}

function  yymmdd(val) {
  return String(val).replace(/(\d{4})(\d{2})(\d{2})/g, '$1.$2.$3');
}
