function dis(x) {
    document.getElementById("inbox").value += x;
}

function clr() {
    document.getElementById("inbox").value = '';
    document.getElementById("res").innerHTML = '';
}

function del() {
    var a = document.getElementById("inbox").value;
    var l = a.substring(0, a.length - 1);
    document.getElementById("inbox").value = l;
}

function fun() {
    var a = document.getElementById("inbox").value;
    document.getElementById("res").innerHTML = a;
    var i;
    var f = '';
    var c = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] == '+' || a[i] == '-' || a[i] == 'x' || a[i] == '/' || a[i] == '^') {
            if (c == 1) {
                c = 0;
                if (op == '+') {
                    var r = parseFloat(num1) + parseFloat(f);
                    document.getElementById("inbox").value = r;
                    f = r;
                } else if (op == '-') {
                    var r = parseFloat(num1) - parseFloat(f);
                    document.getElementById("inbox").value = r;
                    f = r;
                } else if (op == 'x') {
                    var r = parseFloat(num1) * parseFloat(f);
                    document.getElementById("inbox").value = r;
                    f = r;
                } else if (op == '/') {
                    var r = parseFloat(num1) / parseFloat(f);
                    document.getElementById("inbox").value = r;
                    f = r;
                } else if (op == '^') {
                    var r = Math.pow(parseFloat(num1), parseFloat(f));
                    document.getElementById("inbox").value = r;
                    f = r;
                }
            }
            var op = a[i];
            var num1 = f;
            f = '';
            c++;
        } else {
            f += a[i];
        }
    }
    if (op == '+') {
        var r = parseFloat(num1) + parseFloat(f);
        document.getElementById("inbox").value = r;
    } else if (op == '-') {
        var r = parseFloat(num1) - parseFloat(f);
        document.getElementById("inbox").value = r;
    } else if (op == 'x') {
        var r = parseFloat(num1) * parseFloat(f);
        document.getElementById("inbox").value = r;
    } else if (op == '/') {
        var r = parseFloat(num1) / parseFloat(f);
        document.getElementById("inbox").value = r;
    } else if (op == '^') {
        var r = Math.pow(parseFloat(num1), parseFloat(f));
        document.getElementById("inbox").value = r;
    }
}
