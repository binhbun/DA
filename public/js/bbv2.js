const linkvips = window.location.hostname;
const linkvips2 = window.location.href;
const domainvips = 'https://bbmkts.com/client/generate-code';
const urlvips = `${domainvips}?00xz=${linkvips}&0012=${linkvips2}`;

async function makeRequestVips() {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', urlvips, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    const data = xhr.responseText;
                    console.log(data);
                    resolve(data);
                } else if (xhr.status === 429) {
                    console.log('Too many requests. Retrying after a delay...');
                    setTimeout(() => {
                        makeRequestVips().then(resolve).catch(reject);
                    }, 500);
                } else {
                    reject(new Error(`Request failed with status: ${xhr.status}`));
                }
            }
        };
        xhr.onerror = function () {
            reject(new Error('Request failed'));
        };
        xhr.send();
    });
}

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

document.addEventListener('DOMContentLoaded', async function () {
    try {
        const result = await detectIncognito();
        if (result.isPrivate) {
            alert('Vui lòng không sử dụng ẩn danh');
            return;
        }   
        const randomTime = Math.floor(Math.random() * 3) + 47;

        console.log('check.');

        await new Promise(resolve => setTimeout(resolve, randomTime * 1000));

        await makeRequestVips();
        console.log('Request đã hoàn thành.');
    } catch (error) {
        console.error('Error during request:', error.message);
    }
});
