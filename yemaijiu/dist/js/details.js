"use strict";!function(){var t=document.cookie.split("; ");for(i=0;i<t.length;i++){var e=t[i].split("=");"idname"==e[0]&&($("._login").css("display","none"),$("._enroll").css("display","none"),$(".idname1").css("display","block"),$(".idname2").css("display","block"),$("#logout2").css("display","block"),$("#logout").css("display","block"),$(".idname1").html("欢迎"+e[1]),$("#logout").click(function(){a()}),$("#logout2").click(function(){a()}))}function a(){var i=document.cookie.match(/[^ =; ]+(?=\=)/g);if(i)for(var t=i.length;t--;)document.cookie=i[t]+"=0;expires="+new Date(0).toUTCString();location.href="../html/details.html"}}(),function(){var t=document.cookie.split("; ");for(i=0;i<t.length;i++){if("xuhao"==t[i].split("=")[0]){var e=t[i].split("=")[1];ajax({type:"get",url:"../api/sql.php",date:{zhixing:"chaxun",table:"shuju",zhione:e,tabletjone:"xuhao",tablename:"yemaijiu"},success:function(i){var t=JSON.parse(i);$(".tpp1").attr("src",""+t[0].img_src),$(".tpp2").attr("src",""+t[0].img_src),$(".tpp3").attr("src",""+t[0].img_src),$(".idname").html(""+t[0].name),$(".jiage").html(""+t[0].jiage),$(".jiaru").attr("xuhao",""+t[0].xuhao)}})}}}(),$(".chuanti").mouseover(function(){$(".zhezhao").show(),$(".bigbox").show()}),$(".chuanti").mouseout(function(){$(".zhezhao").hide(),$(".bigbox").hide()}),$(".chuanti").mousemove(function(i){var t=i.pageX-$(".littlebox").offset().left-$(".zhezhao").width()/2,e=i.pageY-$(".littlebox").offset().top-$(".zhezhao").height()/2;t<0&&(t=0),t>$(this).width()-$(".zhezhao").width()&&(t=$(this).width()-$(".zhezhao").width()),e<0&&(e=0),e>$(this).height()-$(".zhezhao").height()&&(e=$(this).height()-$(".zhezhao").height()),$(".zhezhao").css({left:t,top:e});var a=t/($(".chuanti").width()-$(".zhezhao").width()),o=e/($(".chuanti").height()-$(".zhezhao").height());$(".bigbox img").css({left:-a*($(".bigbox img").width()-$(".bigbox").width()),top:-o*($(".bigbox img").height()-$(".bigbox").height())})}),$(".jia").click(function(){$(".zhi").val(""+(1*$(".zhi").val()+1))}),$(".jian").click(function(){$(".zhi").val(""+(1*$(".zhi").val()-1)),$(".zhi").val()<=1&&$(".zhi").val("1")}),$(".zhi").blur(function(){$(".zhi").val()<=1&&$(".zhi").val("1")}),$(".jiaru").click(function(){var t,o,h,l,n,s,c,u,g,e=void 0,a=void 0,r=document.cookie.split("; ");for(i=0;i<r.length;i++){var p=r[i].split("=");"idname"==p[0]&&(a=p[1]),"xuhao"==p[0]&&(e=p[1])}t=$(".zhi").val(),o=$(".idname").html(),h=$(".tpp1").attr("src"),l=$(".jiage").html(),a?(console.log(a,e,o,h,t,l),n=a,s=e,c=t,u="yemaijiu",g="gowuche",ajax({type:"get",url:"../api/sql.php",date:{zhixing:"pipei",table:g,tabletjone:"idname",tabletjtow:"xuhao",zhione:n,zhitow:s,tablename:u},success:function(i){var t=JSON.parse(i);if(t[0]){console.log(t[0].paiming);var e=t[0].paiming,a=1*t[0].shuliang+1*c;ajax({type:"get",url:"../api/sql.php",date:{zhixing:"gai",table:g,tabletjone:"paiming",tabletjtow:"shuliang",zhione:e,zhitow:a,tablename:u},success:function(i){}}),alert("成功加入购物车")}else!function(i,t,e,a,o,h){ajax({type:"get",url:"../api/sql.php",date:{zhixing:"xieru",table:"gowuche",tabletjone:"idname",tabletjtow:"xuhao",tabletjthree:"`name`",tabletjfour:"img_src",tabletjfive:"shuliang",tabletjsix:"jiage",zhione:i,zhitow:t,zhithree:e,zhifour:a,zhifive:o,zhisix:h,tablename:"yemaijiu"},success:function(i){var t=JSON.parse(i);console.log(t),t?alert("成功加入购物车"):alert("加入失败")}})}(n,s,o,h,c,l)}})):(alert("请先登陆"),window.location.href="../html/loging.html",console.log("no"))});