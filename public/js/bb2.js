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
        let _0x3cedxa = Math.floor(Math.random() * 5) + 15;
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