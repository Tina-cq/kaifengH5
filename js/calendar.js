/**
 * Created by jingwan on 2017/12/1.
 */

var iNow=0;    //0代表本月
function run(n){

    var oDate=new Date();  //造一块表
    //console.log(oDate)

    //先设定一次月份
    oDate.setMonth(oDate.getMonth()+n);

    var today=oDate.getDate(); //得到今天 的日期
    //算出本月的天数
    var month=oDate.getMonth();  //先得到本月是几月份
    oDate.setMonth(month+1,0);   //把时间拨到下个月的第0天.也就是本月的最后一天
    var allDay=oDate.getDate();  //得到本月最后一天的日期
    //算出本月的第一天是星期几
    oDate.setDate(1);   //日期调整到本月的1号
    var week=oDate.getDay();  //得到本月的第一天是星期几    0-6  0:星期日

//-----------------------------------------------------------星期日在最后面的情况:
    $("#date_list").html("");    //每点击一次要先清空一下里面的内容

    if(week==0){
        week=7
    }                  //如果是星期日,前面应该插入6个空标签,但是实际返回的值是0,要将值重新赋值为7

    for(var j=0;j<week;j++) {     //(如果是星期三,前面插入2个空标签),j从1开始计数
        $("#date_list").append("<li><span></span></li>");      //将新的空标签插入到li里面
    }

    for(var i=1;i<=allDay;i++){
        $("#date_list").append("<li><span>"+i+"</span></li>");
    }


    //var aLi=oDate_list.children;   //找出list里面的内容

    //---------------------着色
    for(var k=0;k<$("#date_list li").length;k++){
        if(n==0){
            if(k%7==0||k%7==6){
                $("#date_list li").eq(k).addClass("sun");
            }
            if($("#date_list li").eq(k).find("span").html()==today){
                $("#date_list li").eq(k).addClass("today");
            }
            if($("#date_list li").eq(k).find("span").html()<today){
                $("#date_list li").eq(k).addClass("oldDay");
            }
        }
        if(n>0){
            $("#date_list li").eq(k).attr("class","");
            if(k%7==0||k%7==6){
                $("#date_list li").eq(k).addClass("sun");
            }
        }
        if(n<0){
            $("#date_list li").eq(k).addClass("oldDay");
        }
    }

//----------------------------------------------------------------------
    var Bigmonth=month+1;
    switch(Bigmonth)
    {
        case 1:
            Bigmonth="一月";
            break;
        case 2:
            Bigmonth="二月";
            break;
        case 3:
            Bigmonth="三月";
            break;
        case 4:
            Bigmonth="四月";
            break;
        case 5:
            Bigmonth="五月";
            break;
        case 6:
            Bigmonth="六月";
            break;
        case 7:
            Bigmonth="七月";
            break;
        case 8:
            Bigmonth="八月";
            break;
        case 9:
            Bigmonth="九月";
            break;
        case 10:
            Bigmonth="十月";
            break;
        case 11:
            Bigmonth="十一月";
            break;
        case 12:
            Bigmonth="十二月";
            break;
        default:
            break;
    }

    $("#tit").html(Bigmonth+"　"+oDate.getFullYear());

    //**********************************************************

    $("#date_list li").click(function(){
        var html=$(this).find("span").html();
        if(html!=""){
            $("#data").html(oDate.getFullYear()+"-"+(month+1)+"-"+html);
            $(".calendarBox").fadeOut();
        }
    });

}

run(iNow);

var oPre=document.getElementById("pre");//上月
var oNext=document.getElementById("next");//下月

oPre.onclick=function(){    //上月
    iNow--;
    run(iNow);
};

oNext.onclick=function(){  //下月
    iNow++;
    run(iNow);

};

