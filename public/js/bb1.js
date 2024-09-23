 const ids11 = document.getElementById('bb1');
ids11.innerHTML = `
  <img src="https://bbmkts.com/images/binhbun.png" style= "width: 25px; height: 25px; padding: 2px; object-fit: contain;">
  <span style="display:inline-block;vertical-align:middle;">LẤY MÃ (1/2)</span>
`;
ids11.style.minWidth = '150px';
ids11.style.minHeight = '40px';
ids11.style.borderRadius = '8px';
ids11.style.padding = '2px 2px';
ids11.style.margin = '1px';
ids11.style.display = 'inline-flex';
ids11.style.alignItems = 'center';
ids11.style.justifyContent = 'center';
ids11.style.backgroundColor = '#FFFFFF';
ids11.style.lineHeight = '20px';
ids11.style.border = '3px solid #FF0000';
ids11.style.textDecoration = 'none';
ids11.style.fontSize = '15px';
ids11.style.cursor = 'pointer';
ids11.style.color = '#Ec5519';
ids11.style.fontWeight = '700';
ids11.style.fontFamily = 'Inter,Helvetica,"sans-serif"';
const link11 = window.location.hostname;
const domain11 = 'https://bbmkts.com/02abx';
let stv11 = null;
let IsCick11 = !1;
var detectIncognito = function () {
    return new Promise(function (resolve, reject) {
        var browserName = "Unknown";
        function __callback(isPrivate) {
            resolve({
                isPrivate: isPrivate,
                browserName: browserName
            });
        }
        function identifyChromium() {
            var ua = navigator.userAgent;
            if (ua.match(/Chrome/)) {
                if (navigator.brave !== undefined) {
                    return "Brave";
                } else if (ua.match(/Edg/)) {
                    return "Edge";
                } else if (ua.match(/OPR/)) {
                    return "Opera";
                }
                return "Chrome";
            } else {
                return "Chromium";
            }
        }
        function assertEvalToString(value) {
            return value === eval.toString().length;
        }
        function isSafari() {
            var v = navigator.vendor;
            return (v !== undefined && v.indexOf("Apple") === 0 && assertEvalToString(37));
        }
        function isChrome() {
            var v = navigator.vendor;
            return (v !== undefined && v.indexOf("Google") === 0 && assertEvalToString(33));
        }
        function isFirefox() {
            return (document.documentElement !== undefined &&
                document.documentElement.style.MozAppearance !== undefined &&
                assertEvalToString(37));
        }
        function isMSIE() {
            return (navigator.msSaveBlob !== undefined && assertEvalToString(39));
        }
        function newSafariTest() {
            var tmp_name = String(Math.random());
            try {
                var db = window.indexedDB.open(tmp_name, 1);
                db.onupgradeneeded = function (i) {
                    var _a, _b;
                    var res = (_a = i.target) === null || _a === void 0 ? void 0 : _a.result;
                    try {
                        res.createObjectStore("test", {
                            autoIncrement: true
                        }).put(new Blob);
                        __callback(false);
                    } catch (e) {
                        var message = e;
                        if (e instanceof Error) {
                            message = (_b = e.message) !== null && _b !== void 0 ? _b : e;
                        }
                        if (typeof message !== 'string') {
                            return __callback(false);
                        }
                        var matchesExpectedError = /BlobURLs are not yet supported/.test(message);
                        return __callback(matchesExpectedError);
                    } finally {
                        res.close();
                        window.indexedDB.deleteDatabase(tmp_name);
                    }
                };
            } catch (e) {
                return __callback(false);
            }
        }
        function oldSafariTest() {
            var openDB = window.openDatabase;
            var storage = window.localStorage;
            try {
                openDB(null, null, null, null);
            } catch (e) {
                return __callback(true);
            }
            try {
                storage.setItem("test", "1");
                storage.removeItem("test");
            } catch (e) {
                return __callback(true);
            }
            return __callback(false);
        }
        function safariPrivateTest() {
            if (navigator.maxTouchPoints !== undefined) {
                newSafariTest();
            } else {
                oldSafariTest();
            }
        }
        function getQuotaLimit() {
            var w = window;
            if (w.performance !== undefined &&
                w.performance.memory !== undefined &&
                w.performance.memory.jsHeapSizeLimit !== undefined) {
                return performance.memory.jsHeapSizeLimit;
            }
            return 1073741824;
        }
        function storageQuotaChromePrivateTest() {
            navigator.webkitTemporaryStorage.queryUsageAndQuota(function (_, quota) {
                var quotaInMib = Math.round(quota / (1024 * 1024));
                var quotaLimitInMib = Math.round(getQuotaLimit() / (1024 * 1024)) * 2;
                __callback(quotaInMib < quotaLimitInMib);
            }, function (e) {
                reject(new Error("detectIncognito somehow failed to query storage quota: " + e.message));
            });
        }
        function oldChromePrivateTest() {
            var fs = window.webkitRequestFileSystem;
            var success = function () {
                __callback(false);
            };
            var error = function () {
                __callback(true);
            };
            fs(0, 1, success, error);
        }
        function chromePrivateTest() {
            if (self.Promise !== undefined && self.Promise.allSettled !== undefined) {
                storageQuotaChromePrivateTest();
            } else {
                oldChromePrivateTest();
            }
        }
        function firefoxPrivateTest() {
            __callback(navigator.serviceWorker === undefined);
        }
        function msiePrivateTest() {
            __callback(window.indexedDB === undefined);
        }
        function main() {
            if (isSafari()) {
                browserName = 'Safari';
                safariPrivateTest();
            } else if (isChrome()) {
                browserName = identifyChromium();
                chromePrivateTest();
            } else if (isFirefox()) {
                browserName = "Firefox";
                firefoxPrivateTest();
            } else if (isMSIE()) {
                browserName = "Internet Explorer";
                msiePrivateTest();
            } else {
                reject(new Error("detectIncognito cannot determine the browser"));
            }
        }
        main();
    });
};
ids11.addEventListener('click', async function(_0xd426x6) {
    if (IsCick11 == !0) {
        return
    }
    const result = await detectIncognito();
        if (result.isPrivate) {
            ids11.innerHTML = ' Vui lòng không sử dụng ẩn danh ';
            return;
        }
    const _0xd426x7 = new XMLHttpRequest();
    try {
        const getcode = await makeRequest11('GET', `${domain11}?00xz=${link11}`);
        IsCick11 = !0;
        let cc1 = Math.floor(Math.random() * 11) + 70;
        const _0xd426xa = `
      <span>VUI LÒNG ĐỢI... <span id="getlink1">${cc1}</span></span>
    `;
        ids11.innerHTML = _0xd426xa;
        let _0xd426xb = document.getElementById('getlink1');
        stv11 = setInterval(function() {
            cc1 -= 1;
            _0xd426xb.innerHTML = cc1;
            if (cc1 <= 0) {
                clearInterval(stv11);
                ids11.innerHTML = `
          <a href="${getcode}" style='text-align: center;'> Nhấn vào đây để tiếp tục <br> Tìm đến <img src='https://i.imgur.com/yUgsm3W.png' style= 'width: auto; height: 30px; padding: 1x;'> để tiếp tục lấy mã</a>
        `
            }
        }, 1000)
    } catch (err) {
        IsCick11 = !1;
        ids11.innerHTML = 'Nhấn để tải lại!'
    }
});

function makeRequest11(resolve11, reject11) {
    return new Promise(function(_0xd426xf, _0xd426x10) {
        let _0xd426x11 = new XMLHttpRequest();
        _0xd426x11.open(resolve11, reject11);
        _0xd426x11.onload = function() {
            if (this.status >= 200 && this.status < 300) {
                _0xd426xf(_0xd426x11.response)
            } else {
                _0xd426x10({
                    status: this.status,
                    statusText: _0xd426x11.statusText
                })
            }
        };
        _0xd426x11.onerror = function() {
            _0xd426x10({
                status: this.status,
                statusText: _0xd426x11.statusText
            })
        };
        _0xd426x11.send()
    })
}