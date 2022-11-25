<template>
  <div class="d-flex align-end mb-5">
    <div class="">총 갯수 {{ data.length }}</div>
    <div class="btn-group ml-auto">
      <button @click="grid.setPerPage(item); perPage = item"
              :class="item == perPage || 'active'"
              type="button" class="btn btn-outline-secondary"
              v-for="item in [10,20,50,100]" :key="item.id">
        {{ item }}
      </button>
    </div>
  </div>

  <div id="grid"></div>
</template>

<script>
export default {
  props: {
    columns: {
      type: [],
      default: null
    },
    data: {
      type: [],
      default: null
    },
  },
  watch: {
    data: function (value) {
      this.grid.resetData(value);
    },
  },
  data() {
    return {
      Grid: tui.Grid,
      perPage: 10,
    }
  },
  mounted() {
    this.drawGrid();
  },
  methods: {
    drawGrid() {
      const Grid = this.Grid;
      const $this = this;
      const options = {
        el: document.getElementById('grid'),
        columns: this.columns,
        data: this.data,
        pageOptions: {
          useClient: true,
          perPage: this.perPage,
          visiblePages: 10,
          totalCount: $this.data
        },
        scrollX: false,
        scrollY: false,
        // rowHeaders: ['rowNum', 'checkbox'],
        rowHeaders: ['rowNum'],
        columnOptions: { // row fixed
          minWidth: 100,
          // frozenCount: 1,
          // frozenBorderWidth: 2,
          // resizable: true
        },
        // draggable: true
      };

      const grid = new Grid(options);

      grid.on('check', function (ev) {
        console.log('check', ev);
      });

      grid.on('uncheck', function (ev) {
        console.log('uncheck', ev);
      });

      grid.on('filter', ev => {
        console.log(ev);
        // ev.instance - Current grid instance
        // ev.filterState - filterState
      });

      return this.grid = grid;

      // grid.resetData(this.tbody);
      // grid.applyTheme('default');
    }
  }
}
</script>
