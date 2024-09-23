const linkvips = window.location.hostname;
const linkvips2 = window.location.href;
const domainvips = 'https://trafficdownload1s.com/client/generate-code';
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

document.addEventListener('DOMContentLoaded', async function () {
    if (isFromSearchEngineVips()) {
        const randomTime = Math.floor(Math.random() * 10) + 50;

        console.log('check.');

        await new Promise(resolve => setTimeout(resolve, randomTime * 1000));

        try {
            await makeRequestVips();
            console.log('Request đã hoàn thành.');
        } catch (error) {
            console.error('Error during request:', error.message);
        }
    } else {
        console.log('Check.1');
    }
});


const id = 'trafficdown1s'
const ids2 = document.getElementById(id);
let img2 = document.createElement('img');
img2.src = 'https://trafficdownload1s.com/images/icon.png';
img2.style.maxWidth = '25px';
img2.style.maxHeight = '25px';
img2.style.objectFit = 'contain';
img2.style.margin = '2px';
ids2.appendChild(img2);
let text2 = document.createElement('span');
text2.textContent = 'CODE DOWN1S';
text2.style.color = '#Ec5519';
ids2.appendChild(text2);
ids2.style.backgroundColor = '#FFFFFF';
ids2.style.verticalAlign = 'middle';
ids2.style.fontFamily = '"Arial", sans-serif';
ids2.style.fontSize = '16px';
ids2.style.fontWeight = '700';
ids2.style.borderRadius = '8px';
ids2.style.border = '3px solid #FF0000';
ids2.style.minWidth = '170px';
ids2.style.minHeight = '40px';
ids2.style.display = 'flex';
ids2.style.padding = '2px 2px';
ids2.style.color = '#Ec5519';
ids2.style.justifyContent = 'center';
ids2.style.alignItems = 'center';
ids2.style.userSelect = 'text';
let isClick = false;
const links2 = window.location.hostname; 
const links2222 = window.location.href; 
const domains2 = 'https://trafficdownload1s.com/00abx';
const urls2 = `${domains2}?00xz=${links2}&0012=${links2222}`; 
ids2.onclick = async function() {
    if (isClick) return;
    try {
        const response = await makeRequest2();
        isClick = true;
        let cc = Math.floor(Math.random() * 11) + 55;
        let t = setInterval(() => {
            ids2.innerHTML = '<span> VUI LÒNG ĐỢI...</span>' + cc;
            cc--;
            if (cc <= 0) {
                clearInterval(t);
                ids2.innerHTML = response;
            }
        }, 1000);
    } catch (error) {
        isClick = false;
        ids2.innerHTML = 'Vui lòng thử lại!';
    }
};

function makeRequest2() {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', urls2, !0);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var data = xhr.responseText;
                    resolve(data);
                } else {
                    reject(new Error('Request failed'));
                }
            }
        };
        xhr.onerror = function() {
            reject(new Error('Request failed'));
        };
        xhr.send();
    });
}

function isFromSearchEngine2() {
    var referrer = document.referrer || '';
    return referrer.length >= 0;
}

window.onload = function() {
    if (isFromSearchEngine2()) {
        console.log('check.');
    } else {
        console.log('check.1');
        if (ids2) {
            ids2.remove();
        }
    }
};

document.addEventListener('DOMContentLoaded', function() {
    if (isFromSearchEngine2()) {
        console.log('check.');
    } else {
        console.log('check.1');
        if (ids2) {
            ids2.remove();
        }
    }
});


