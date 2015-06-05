/**
 * Created by N on 6/2/15.
 */
//
//chrome.browserAction.onClicked.addListener(function(tab) {
//    chrome.tabs.executeScript(null,{
//        code:'document.body.style.backgroundColor="red"'
//    },function(result){
//        document.querySelector('.button').innerHTML = string(result);
//    });
//});

window.onload = function() {
    var btn = document.querySelector('.button');
    chrome.devtools.inspectedWindow.getResources(function(resources){
        for (var r in resources){
            var tbody = document.querySelector('tbody');
            var tr = document.createElement('tr');
            var td1 = document.createElement('td');
            var index=tbody.getElementsByTagName('tr').length;
            td1.innerHTML=index.toString();
            var td3 = document.createElement('td');
            if (resources[r].url.indexOf(".js") > -1) {
                td3.innerHTML=resources[r].url;
            } else {
                continue;
            }
            var td2 = document.createElement('td');
            td2.innerHTML=td3.innerHTML.split("/").pop().split(".js")[0]+".js";


            //td3.innerHTML="Something";
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tbody.appendChild(tr);
        }
        btn.className = "small button secondary disabled";
    });
};