function reportInfo(vars, showType = false) {
    if (showType === true) console.log(typeof vars);
    console.log(vars);
}

function addImg(ele, content) {
    var myDIV = document.querySelector(ele);
    var newContent = document.createElement('div');
    newContent.innerHTML = content;

    while (newContent.firstChild) {
        myDIV.appendChild(newContent.firstChild);
    }
}

var feedback = function(res) {
    reportInfo(res, true);
    if (res.success === true) {
        var get_link = res.data.link.replace(/^http:\/\//i, 'https://');
        document.querySelector('.status').classList.add('bg-success');
        var content =
            'Link : ' + '<br><input class="image-url" id="copy" value=\"' + get_link + '\" readonly/><button class="copy" onclick="copyText()">Copy</button>' 
             + '<img class="img" alt="uploadfree.pw" src=\"' + get_link + '\"/>';
        addImg('.status', content);
        
        // var get_link = res.data.link.replace(/^http:\/\//i, 'https://');
        // var inputElement = document.getElementById('image-url');
        // inputElement.value = get_link;
    }
};
function copyText() {
    var copyText = document.getElementById("copy");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
  }
new Imgur({
    clientid: '31d4880e14af70a',
    callback: feedback
});
