const id = 'bbv1';
const element = document.getElementById(id);

let imgv01 = document.createElement('img');
imgv01.src = 'https://bbmkts.com/images/binhbun.png';
imgv01.style.maxWidth = 'auto';
imgv01.style.maxHeight = '25px';
imgv01.style.objectFit = 'contain';
imgv01.style.padding = '2px';

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
            count = Math.floor(Math.random() * 5) + 10;
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
                    element.innerHTML = "<span style='text-align: center;'> Bước 1: Bấm vào bất kì bài viết khác - bài viết tương tự - bài viết liên quan,... có trên trang <br>Bước 2: Tìm đến <img src='https://i.imgur.com/yUgsm3W.png' style= 'width: auto; height: 30px; padding: 1x;'> để tiếp tục lấy mã </span>";
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