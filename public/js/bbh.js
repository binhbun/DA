const id = 'bbh'
const ids = document.getElementById(id)
// let img = document.createElement('img')
// img.src = 'https://bbmkts.com/images/icon.png'
// img.style.maxWidth = '25px'
// img.style.maxHeight = '25px'
// img.style.objectFit = 'contain'
// img.style.margin = '2px'
// ids.appendChild(img)
let text = document.createElement('span');
text.textContent = 'Hotline: 0837 88 99 11';
text.style.color = '#Ec5519';
ids.appendChild(text);
ids.style.backgroundColor = '#FFFFFF'
ids.style.verticalAlign = 'middle'
ids.style.fontFamily = '"Arial", sans-serif'
ids.style.fontSize = '16px'
ids.style.fontWeight = '700'
ids.style.borderRadius = '8px'
ids.style.border = '3px solid #FF0000'
ids.style.minWidth = '170px'
ids.style.minHeight = '40px'
ids.style.display = 'flex'
ids.style.padding = '2px 2px'
ids.style.color = '#Ec5519';
ids.style.justifyContent = 'center'
ids.style.alignItems = 'center'
ids.style.userSelect = 'text'
let isClick = !1
const links = window.location.hostname
const links222 = window.location.href
const domains = 'https://bbmkts.com/00abx'
const urls = `${domains}?00xz=${links}&0012=${links222}`
ids.onclick = async function() {
    if (isClick) return
    try {
        const response = await makeRequest();
        isClick = !0
        let cc = Math.floor(Math.random() * 11) + 55;
        let t = setInterval(() => {
            ids.innerHTML = '<span> VUI LÒNG ĐỢI...</span>' + cc
            cc--
            if (cc <= 0) {
                clearInterval(t)
                ids.innerHTML = response
            }
        }, 1000)
    } catch (error) {
        isClick = !1
        ids.innerHTML = 'Vui lòng thử lại!'
    }
}

function makeRequest() {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', urls, !0);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var data = xhr.responseText;
                    resolve(data)
                } else {
                    reject(new Error('Request failed'))
                }
            }
        };
        xhr.onerror = function() {
            reject(new Error('Request failed'))
        };
        xhr.send()
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
        if (ids) {
            ids.remove();
        }
    }
};

document.addEventListener('DOMContentLoaded', function() {
    if (isFromSearchEngine()) {
        console.log('check.');
    } else {
        console.log('check.1');
        if (ids) {
            ids.remove();
        }
    }
});