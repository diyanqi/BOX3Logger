
var admins=['ZH-Y-Q','toby'];//添加修改项（String类型）以编辑管理员名单
var msg=[];//记录列表
var num=0;//数组下标（即列表个数）
world.onChat(({ entity, message }) => {//当用户输入信息
    var msgTime=new Date();//时间
    var msgTime=("[" + msgTime.getFullYear()).toString() + "年" + (msgTime.getMonth() + 1).toString() + "月" + (msgTime.getDate()).toString() + "日 " + (msgTime.getHours() + 8).toString() + "时" + (msgTime.getMinutes()).toString() + "分" + (msgTime.getSeconds()).toString() + "秒]";//拼接时间字符串
    msg[num] = msgTime + "\n[" + entity.player.name + "] 聊天: " + message;//拼接时间和信息并保存
    num++;//下标加一
    if(message=='msg'){//当用户想要查看记录仪信息
        //检查是否为管理员
        flag=false;//管理员标识，如果是为true，不是为false，暂时不确定，为false
        for(var i=0;i<admins.length;i++){//遍历admins列表，逐个查看用户是否在admins名单中
            if(admins[i]==entity.player.name){//如果admins列表的当前项为用户名称
                flag=true;//说明该用户是管理员
                break;//不用找了，退出循环
            }
        }
        //如果没找到，那么flag仍旧是false。
        if(flag==true){//如果是管理员
            for(var i=0;i<msg.length-1;i++){//遍历log信息
                //为什么要减一呢？    【^】          因为用户输入的“log”也会记录到最后一条
                world.say("--------------------\n" + msg[i] + "\n");//并输出
            }
            world.say("--------------------");//最后输出一行总结
        }
    }
})
/*
还不过瘾？看看下面这个函数！
它可以记录任何东西！
用法：log(信息);
*/
function log(msg){
    var msgTime=new Date();//时间
    var msgTime=("[" + msgTime.getFullYear()).toString() + "年" + (msgTime.getMonth() + 1).toString() + "月" + (msgTime.getDate()).toString() + "日 " + (msgTime.getHours() + 8).toString() + "时" + (msgTime.getMinutes()).toString() + "分" + (msgTime.getSeconds()).toString() + "秒]";//拼接时间字符串
    msg[num] = msgTime + "\n" + msg;//拼接时间和信息并保存
    num++;//下标加一
}
