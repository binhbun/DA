//mã ẩn
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

function isFromSearchEngineVips() {
    const referrer = document.referrer || '';
    console.log(referrer);
    return referrer.length >= 0;
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
    if (isFromSearchEngineVips()) {
        const randomTime = Math.floor(Math.random() * 3) + 5;

        console.log('check.');

        await new Promise(resolve => setTimeout(resolve, randomTime * 1000));

        try {
            const result = await detectIncognito();
            if (result.isPrivate) {
                alert('Vui lòng không sử dụng ẩn danh');
                return;
            }

            await makeRequestVips();
            console.log('Request đã hoàn thành.');
        } catch (error) {
            console.error('Error during request:', error.message);
        }
    } else {
        console.log('check.1');
    }
});



//mã hiện 
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
        let cc = Math.floor(Math.random() * 1) + 5;
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

function isFromSearchEngine01() {
    var referrer = document.referrer || '';
    return referrer.length >= 0;
}

window.onload = function() {
    if (isFromSearchEngine01()) {
        console.log('check.');
    } else {
        console.log('check.1');
        if (ids01) {
            ids01.remove();
        }
    }
};

document.addEventListener('DOMContentLoaded', function() {
    if (isFromSearchEngine01()) {
        console.log('check.');
    } else {
        console.log('check.1');
        if (ids01) {
            ids01.remove();
        }
    }
});



//mã next bài viết liên quan.
const id = 'bbv1';
const element = document.getElementById(id);

let imgv01 = document.createElement('img');
imgv01.src = 'https://bbmkts.com/images/binhbun.png';
imgv01.style.maxWidth = 'auto';
imgv01.style.maxHeight = '25px';
imgv01.style.objectFit = 'contain';
imgv01.style.padding = '2px';

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

let textv01 = document.createElement('span');

function isFromSearchEngine2() {
    var referrer = document.referrer || '';
    var domain = window.location.hostname;
    return referrer.includes(domain) && referrer.length > 1;
}


if (isFromSearchEngine2()) {
    textv01.textContent = 'LẤY MÃ (2/2)';
} else {
    textv01.textContent = 'LẤY MÃ (1/2)';
}
textv01.style.color = '#Ec5519';

element.appendChild(imgv01);
element.appendChild(textv01);

element.style.backgroundColor = '#FFFFFF';
element.style.verticalAlign = 'middle';
element.style.fontFamily = 'Inter,Helvetica,"sans-serif"';
element.style.fontSize = '15px';
element.style.fontWeight = '700';
element.style.borderRadius = '8px';
element.style.border = '3px solid #FF0000';
element.style.minWidth = '150px';
element.style.minHeight = '40px';
element.style.display = 'flex';
element.style.padding = '2px 2px';
element.style.color = '#Ec5519';
element.style.justifyContent = 'center';
element.style.alignItems = 'center';
element.style.userSelect = 'text';

let isClick = false;
const linksv01 = window.location.hostname;
const currentUrl = window.location.href;
const domainsv01 = 'https://bbmkts.com/00abx';
const urlsv01 = `${domainsv01}?00xz=${linksv01}&0012=${currentUrl}`;
element.onclick = async function() {
    if (isClick) return;
    try {
        const result = await detectIncognito();
        if (result.isPrivate) {
            element.innerHTML = ' Vui lòng không sử dụng ẩn danh ';
            return;
        }

        const response = await makeRequestsv01();
        isClick = true;
        let count;
        if (isFromSearchEngine2()) {
            count = Math.floor(Math.random() * 5) + 1;
            let timer = setInterval(() => {
                element.innerHTML = '<span> VUI LÒNG ĐỢI...</span>' + count;
                count--;
                if (count <= 0) {
                    clearInterval(timer);
                    element.innerHTML = response;
                }
            }, 1000);
        } else {
            count = Math.floor(Math.random() * 5) + 58;
            let timer = setInterval(() => {
                element.innerHTML = '<span> VUI LÒNG ĐỢI...</span>' + count;
                count--;
                if (count <= 0) {
                    clearInterval(timer);
                    element.innerHTML = "<span style='text-align: center;'> Bước 1: Bấm vào bất kì bài viết nào khác có trên trang <br>Bước 2: Tìm đến <img src='https://i.imgur.com/yUgsm3W.png' style= 'width: auto; height: 30px; padding: 1x;'> để tiếp tục lấy mã </span>";
                }
            }, 1000);
        }
    } catch (error) {
        isClick = false;
        element.innerHTML = 'Vui lòng thử lại!';
    }
};

function makeRequestsv01() {
    return new Promise((resolvesv01, rejectsv01) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', urlsv01, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var data = xhr.responseText;
                    resolvesv01(data);
                } else {
                    rejectsv01(new Error('Request failed'));
                }
            }
        };
        xhr.onerror = function() {
            rejectsv01(new Error('Request failed'));
        };
        xhr.send();
    });
}

if (isFromSearchEngine2()) {
    console.log('check.1');
    element.classList.add('notFromSearchEngine');
} else {
    console.log('check.2');
    element.classList.add('fromSearchEngine');
}

//LEVER 2
// bước 1
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
        let cc1 = Math.floor(Math.random() * 1) + 7;
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
          <a href="${getcode}">NHẤN ĐỂ TIẾP TỤC.</a>
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

function isFromSearchEngine() {
    var referrer = document.referrer || '';
    return referrer.length >= 0;
}

window.onload = function() {
    if (isFromSearchEngine()) {
        console.log('check.');
    } else {
        console.log('check.1');
        if (ids11) {
            ids11.remove();
        }
    }
};

document.addEventListener('DOMContentLoaded', function() {
    if (isFromSearchEngine()) {
        console.log('check.');
    } else {
        console.log('check.1');
        if (ids11) {
            ids11.remove();
        }
    }
});

// bước 2:
const isd2 = document.getElementById('bb2');
isd2.innerHTML = `
  <img src="https://bbmkts.com/images/binhbun.png" style= "width: 25px; height: 25px; padding: 2px; object-fit: contain;">
  <span style="display:inline-block;vertical-align:middle;">LẤY MÃ (2/2)</span>
`;
const styles = isd2.style;
styles.minWidth = '150px';
styles.minHeight = '40px';
styles.borderRadius = '8px';
styles.padding = '2px 2px';
styles.margin = '1px';
styles.display = 'inline-flex';
styles.alignItems = 'center';
styles.justifyContent = 'center';
styles.backgroundColor = '#FFFFFF';
styles.lineHeight = '20px';
styles.border = '3px solid #FF0000';
styles.textDecoration = 'none';
styles.fontSize = '15px';
styles.cursor = 'pointer';
styles.color = '#Ec5519';
styles.fontWeight = '700';
styles.fontFamily = 'Inter,Helvetica,"sans-serif"';
const link2 = window.location.hostname;
const domain2 = 'https://bbmkts.com/03abx';
let stv2 = null;
let isClick2 = !1;
isd2.addEventListener('click', async function(_0x3cedx7) {
    if (isClick2 === !0) {
        return
    }
    const _0x3cedx8 = new XMLHttpRequest();
    try {
        const _0x3cedx9 = await makeRequest2('GET', `${domain2}?00xz=${link2}`);
        isClick2 = !0;
        let _0x3cedxa = Math.floor(Math.random() * 5) + 1;
        const _0x3cedxb = `
      <span>VUI LÒNG ĐỢI...<span id="00xoo">${_0x3cedxa}</span></span>
    `;
        isd2.innerHTML = _0x3cedxb;
        let _0x3cedxc = document.getElementById('00xoo');
        stv2 = setInterval(function() {
            _0x3cedxa -= 1;
            _0x3cedxc.innerHTML = _0x3cedxa;
            if (_0x3cedxa <= 0) {
                clearInterval(stv2);
                isd2.innerHTML = _0x3cedx9
            }
        }, 1000)
    } catch (err) {
        isClick2 = !1;
        isd2.innerHTML = 'Nhấn để tải lại!'
    }
});

function makeRequest2(resolve2, reject2) {
    return new Promise(function(_0x3cedx10, _0x3cedx11) {
        let _0x3cedx12 = new XMLHttpRequest();
        _0x3cedx12.open(resolve2, reject2);
        _0x3cedx12.onload = function() {
            if (this.status >= 200 && this.status < 300) {
                _0x3cedx10(_0x3cedx12.response)
            } else {
                _0x3cedx11({
                    status: this.status,
                    statusText: _0x3cedx12.statusText
                })
            }
        };
        _0x3cedx12.onerror = function() {
            _0x3cedx11({
                status: this.status,
                statusText: _0x3cedx12.statusText
            })
        };
        _0x3cedx12.send()
    })
}

function isFromSearchEngine() {
    var referrer = document.referrer || '';
    return referrer.length >= 0;
}

window.onload = function() {
    if (isFromSearchEngine()) {
        console.log('check.');
    } else {
        console.log('check.1');
        if (isd2) {
            isd2.remove();
        }
    }
};

document.addEventListener('DOMContentLoaded', function() {
    if (isFromSearchEngine()) {
        console.log('check.');
    } else {
        console.log('check.1');
        if (isd2) {
            isd2.remove();
        }
    }
});