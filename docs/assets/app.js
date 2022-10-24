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
