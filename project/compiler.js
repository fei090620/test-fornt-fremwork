
/**
 * Created by yzhou on 2017/5/4.
 */
var $ = require("jquery");

function compiler() {
    console.log("start compile ... ...");
    $.getJSON("configure.json",configure);
    function configure(data) {
        console.log(data);
    }
}

compiler();
