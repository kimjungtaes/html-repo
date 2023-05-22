function openWindow(){
    const newWin = window.open("", "MsgWindow", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
    const textarea = document.querySelector("textarea");
    newWin.document.open();
    newWin.document.write(textarea.value);
    newWin.document.close();
}