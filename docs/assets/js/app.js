const options = {
  moduleCache: {
    vue: Vue,
  },
  getFile(url) {
    return fetch(url).then(resp =>
      resp.ok ? resp.text() : Promise.reject(resp)
    );
  },
  addStyle(styleStr) {
    const style = document.createElement("style");
    style.textContent = styleStr;
    const ref = document.head.getElementsByTagName("style")[0] || null;
    document.head.insertBefore(style, ref);
  },
  log(type, ...args) {
    // console.log(type, ...args);
  },
};

const {loadModule, version} = window["vue3-sfc-loader"];

const userImg = 'https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop'
const path = window.location.pathname;

// table filter
function filteredWorkers() {
  const filteredWorkers = this.searchString === ""
    ? this.workers
    : this.workers.filter(wo => Object.values(wo).join("").indexOf(this.searchString) !== -1);

  const column = this.sortColumn
  const order = this.order;

  filteredWorkers.sort(function (a, b) {
    const nameA = a[column] + "".toUpperCase();
    const nameB = b[column] + "".toUpperCase();
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
}
function setSortColumn(column) {
  if (this.sortColumn === column) {
    this.order = this.order === "ASC" ? "DESC" : "ASC";
  } else {
    this.order = "ASC";
    this.sortColumn = column;
  }
}
