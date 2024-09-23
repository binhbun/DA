const id01 = 'bb';
const ids01 = document.getElementById(id01);
let img01 = document.createElement('img');
img01.src = 'https://bbmkts.com/images/binhbun.png';
img01.style.maxWidth = 'auto';
img01.style.maxHeight = '25px';
img01.style.objectFit = 'contain';
img01.style.padding = '2px';
ids01.appendChild(img01);
let text01 = document.createElement('span');
text01.textContent = 'LẤY MÃ';
text01.style.color = '#Ec5519';
text01.style.fontFamily = 'Inter,Helvetica,"sans-serif"';
ids01.appendChild(text01);
ids01.style.backgroundColor = '#FFFFFF';
ids01.style.verticalAlign = 'middle';
ids01.style.fontFamily = 'Inter,Helvetica,"sans-serif"';
ids01.style.fontSize = '15px';
ids01.style.fontWeight = '700';
ids01.style.borderRadius = '8px';
ids01.style.border = '3px solid #FF0000';
ids01.style.minWidth = '150px';
ids01.style.minHeight = '40px';
ids01.style.display = 'flex';
ids01.style.padding = '2px 2px';
ids01.style.color = '#Ec5519';
ids01.style.justifyContent = 'center';
ids01.style.alignItems = 'center';
ids01.style.userSelect = 'text';
let isClick01 = false;
const links01 = window.location.hostname; 
const links01222 = window.location.href; 
const domains01 = 'https://bbmkts.com/00abx';
const urls01 = `${domains01}?00xz=${links01}&0012=${links01222}`; 

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

ids01.onclick = async function() {
    if (isClick01) return;
    try {
        const result = await detectIncognito();
        if (result.isPrivate) {
            ids01.innerHTML = ' Vui lòng không sử dụng ẩn danh ';
            return;
        }
        const response = await makeRequest01();
        isClick01 = true;
        let cc = Math.floor(Math.random() * 10) + 50;
        let t = setInterval(() => {
            ids01.innerHTML = '<span> VUI LÒNG ĐỢI...</span>' + cc;
            cc--;
            if (cc <= 0) {
                clearInterval(t);
                ids01.innerHTML = response;
            }
        }, 1000);
    } catch (error) {
        isClick01 = false;
        ids01.innerHTML = 'Vui lòng thử lại!';
    }
};

function makeRequest01() {
    return new Promise((resolve01, reject01) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', urls01, !0);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var data = xhr.responseText;
                    resolve01(data);
                } else {
                    reject01(new Error('Request failed'));
                }
            }
        };
        xhr.onerror = function() {
            reject01(new Error('Request failed'));
        };
        xhr.send();
    });
}