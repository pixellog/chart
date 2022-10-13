<template>
  <div class="counter-number">
    <ul ref="target" class="counter-ul"></ul>
  </div>
</template>

<script>
/**
 * value: { number } 숫자 값
 * unit: { string } 단위, 혹은 i18n key (i81n value가 '{n}개' 와 같은 형식으로 사용해야 함 )
 * locale: { boolean } i18n 적용 여부
 */
export default {
  name: 'counterNumber',
  props: {
    value: {
      type: Number,
      default: 0,
    },
    unit: {
      type: String,
      default: '',
    },
    locale: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      counter: 0,
      prevCounterValue: '',
    };
  },
  watch: {
    value () { this.onValueChanged(); },
    unit () { this.onValueChanged(); },
    locale () { this.onValueChanged(); },
    '$i18n.locale' () { this.onValueChanged(); },
  },
  mounted() {
    this.onValueChanged();
  },
  methods: {
    onValueChanged() {
      this.counterNumberFn(this.value);
    },
    applyUnit (price = '') {
      if (this.locale) {
        return this.$tc(this.unit, this.counter, { n: price });
      }

      return `${price}${this.unit}`;
    },
    counterNumberFn(n) {
      // 예외처리 - 값이 없는 경우 0으로 세팅
      n = n || 0;

      /**
       * counterInit.randomCnt = 랜덤으로 뿌려질 숫자들의 갯수
       * counterInit.speed = 랜덤으로 뿌려진 숫자들이 카운팅 되는 속도
       */
      const counterInit = {
        randomCnt: 12,
        speed: 140,
      };

      this.counter = n;
      let newPrice = '';

      // 받는 값을 문자로 변환
      newPrice = n.toString();

      // 받는값에 숫자 이외의 문자열 모두 제거 (음수 대응 안되어있음. 필요하면 로직 추가)
      newPrice = newPrice.replace(/[^\d]/g, '');
      if (newPrice === '0') {
        this.countZeroFn();
        return;
      }

      // 콤마 추가
      newPrice = this.counterCommaFn(newPrice);

      // 단위 추가
      newPrice = this.applyUnit(newPrice);

      // 이전 파싱값과 동일하면 진행 X
      if (newPrice === this.prevCounterValue) {
        return;
      }

      // counter-number div 가 있으면 제거
      if (!this.counterNumberElemRemove()) {
        return;
      }

      // 파싱값 저장
      this.prevCounterValue = newPrice;

      // .counter-number 클래스 div에 ul 넣기
      const target = this.$refs.target;
      const counterArgs = this.parseUnit(newPrice, this.applyUnit());

      // li 에 값 넣기
      let cnCnt = 0;
      const cnInt = setInterval(() => {
        this.appendLI(counterArgs[cnCnt], target, counterInit.randomCnt);
        cnCnt += 1;

        if (cnCnt === counterArgs.length) {
          clearInterval(cnInt);
        }
      }, counterInit.speed);
    },
    parseUnit (priceStr, unit = '') {
      const tmpArgs = !!unit ? priceStr.split(unit) : [ priceStr ];
      const ret = [];
      tmpArgs.forEach((arg) => {
        if (!arg) {
          ret.push(unit);
        } else {
          arg.split('').forEach((ch) => {
            ret.push(ch);
          });
        }
      });

      return ret;
    },
    countZeroFn() {
      const el = this.$refs.target;
      if (el) {
        let contents = '<ul class="counter-ul">';
        const price = this.applyUnit('0');
        const args = this.parseUnit(price, this.applyUnit());
        args.forEach((arg) => {
          contents += `<li class="item${arg === this.applyUnit() ? '-unit' : ''}">${arg}</li>`;
        });
        contents += '</ul>';
        el.innerHTML = contents;
      }
    },
    counterNumberElemRemove() {
      const el = this.$refs.target;
      if (el) {
        el.innerHTML = '';
      }
      return true;
    },
    counterCommaFn(r) {
      let commaState = false;
      const res = r;
      for (let j = 0; j < res.length; j++) {
        if (res[j] === ',') {
          commaState = true;
          break;
        }
      }
      if (!commaState) {
        const np = this.commafy(res);
        return np;
      } else {
        return res;
      }
    },
    commafy(num) {
      const str = num.toString().split('.');
      if (str[0].length >= 4) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
      }
      if (str[1] && str[1].length >= 5) {
        str[1] = str[1].replace(/(\d{3})/g, '$1 ');
      }
      return str.join('.');
    },
    randomNum(min, max) {
      const randNum = Math.floor(Math.random() * (max - min + 1)) + min;
      return randNum;
    },
    appendLI(price, list, randomCnt) {
      const unit = this.applyUnit();
      const li = document.createElement('li');
      if (price === ',') {
        li.setAttribute('class', 'item-comma');
      } else if (price === unit) {
        li.setAttribute('class', 'item-unit');
      } else {
        li.setAttribute('class', 'item');
      }
      list.appendChild(li);

      const randomUL = document.createElement('ul');

      if (price === ',' || price === unit) {
        li.innerHTML = price;
      } else {
        li.appendChild(randomUL);
      }

      // li 안에 random 숫자 넣기
      for (let j = 0; j < randomCnt; j++) {
        const randomLI = document.createElement('li');
        if (price === ',' || price === unit) {
          j += 1;
        } else {
          randomUL.appendChild(randomLI);
          // randomLI.innerHTML = this.randomNum(0, 9);
          randomLI.innerHTML = price;
          if (j === randomCnt - 1) {
            randomLI.innerHTML = price;
          }
        }
      }
    },
    // error fn
    errorFn(m) {
      console.log(`${m}`);
      throw new Error(`${m}`);
    },
  },
};
</script>

<style>
.counter-ul {
  display: inline-flex;
  align-items: flex-end;
  padding-left: 0;
  list-style: none;
  margin: 0;
  overflow: hidden;
}

.counter-ul .item ul {
  font-size: 40px;
  height: 40px;
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  padding-left: 0;
  list-style: none;
}

.counter-ul .item li {
  line-height: 1;
  animation: counterAni .8s ease-out both;
}

.counter-ul .item-comma {
  font-size: 20px;
  line-height: 20px;
  /*width: 20px;*/
  animation: counterCommaAni 0.3s ease-out both;
  animation-delay: 0.3s;
}

.counter-ul .item-unit {
  margin-left: 6px;
  line-height: 1;
  animation: counterUnitAni 0.3s ease-out both;
  animation-delay: 0.2s;
}


@keyframes counterCommaAni {
  0% {
    filter: blur(3px);
    transform: translateY(-100px);
    width: 3px;
    opacity: 0;
  }
  99% {
    filter: blur(1px);
  }
  100% {
    filter: blur(0);
    transform: translateY(0);
    width: 8px;
    opacity: 1;
  }
}

@keyframes counterUnitAni {
  0% {
    filter: blur(3px);
    transform: translateY(-100px);
  }
  99% {
    filter: blur(1px);
  }
  100% {
    filter: blur(0);
    transform: translateY(0);
  }
}

@keyframes counterAni {
  0% {
    filter: blur(0);
    transform: translateY(0);
    width: 3px;
    opacity: 0;
  }
  44% {
    filter: blur(3px);
    width: 8px;
  }
  99% {
    filter: blur(1px);
  }
  100% {
    filter: blur(0);
    /* font-size에 비례 */
    transform: translateY(200px);
    width: 12px;
    opacity: 1;
  }
}
</style>
