/*获取节点li  ul*/
var qiehuan=document.getElementById("qiehuan").getElementsByTagName("li");

var qiehuan2=document.getElementById("infm").getElementsByTagName("ul");
console.log(qiehuan2);
/*使每一个li标签加一个点击事件*/
for (var i=0;i<qiehuan.length;i++)
     {
          qiehuan[i].onclick=showList;
     }

/*循环加判断 使点击到的li 增加一个属性class*/
function showList(){
     for(var i=0;i<qiehuan.length;i++)
     {
           if(qiehuan[i]==this)
                {qiehuan[i].className="active";
                qiehuan2[i].className="active";
               /*给li标签加上属性的同属给ul加上属性*/}
           else {qiehuan[i].className="";
           qiehuan2[i].className="";}
     }
}