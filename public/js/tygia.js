const node = document.getElementById("invoice-money");
                        node.addEventListener("keyup", function(event) {
                        var n = document.getElementById("invoice-money").value; 
                        const formatCash = n => {
                        if (n < 1e3) return n + " đ";
                        if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(2) + ".000 đ";
                        if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(2) + ".000.000 đ";
                        if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(2) + ".000.000.000 đ";
                        if (n >= 1e12) return +(n / 1e12).toFixed(1) + ".000.000.000.000 đ";     
                        };
                        document.getElementById("donvitien").innerHTML = '<b style="font-size:18px;color:#ff4444;margin:10px 0px; display:block">' + formatCash(n) + '</b>';
                        });