# Missing default export example

This repository shows a case of losing the default `axios` export when it is added to the `shared` for esm package.

- run in first terminal:
```shell
cd ./host && npm i && npm run serve
```

- run in second terminal:
```shell
cd ./remote && npm i && npm run serve
```

- go to `http://localhost:9000/` and check DevTools console:

```
Uncaught (in promise) TypeError: axios__WEBPACK_IMPORTED_MODULE_0__.create is not a function
    at ./src/bootstrap.js (src_bootstrap_js.host.js:16:57)
    at __webpack_require__ (host.js:3556:32)
    at Function.fn (host.js:3883:21)
```

Both apps do not get the correct default export. Correct behavior is:  
```
axios__WEBPACK_IMPORTED_MODULE_0__["default"].create
```


