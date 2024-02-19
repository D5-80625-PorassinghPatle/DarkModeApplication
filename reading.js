window.onload =function(){
    const filepath="content1.txt";

    const xhr=new XMLHttpRequest();
    xhr.open("GET",filepath,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState == 4 &&xhr.status== 200){
            document.getElementById("readingcontent").textContent=xhr.responseText;
        }
    };
    xhr.send ()
};