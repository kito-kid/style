
        //<![CDATA[
            function nocontext(e) {var clickedTag = (e==null) ? event.srcElement.tagName : e.target.tagName; if (clickedTag == "IMG") {alert(alertMsg);return false;}} var alertMsg = "الصور عليها حقوق لذلك ممنوع النسخ";document.oncontextmenu = nocontext; 