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

const userImg = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfDB8MHx8&auto=format&fit=crop'
const path = window.location.pathname;
