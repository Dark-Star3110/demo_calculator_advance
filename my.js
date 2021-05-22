function get_input(number){
    document.getElementById("screen").value += number;
}
function del(){
    let output=document.getElementById("screen").value;
    // let post=output.charAt(output.length-1);
    //document.getElementById("screen").value -= post;
    output= output.substring(0,output.length-1);
    document.getElementById("screen").value=output;
}
function del_all(){
    let output=document.getElementById("screen").value;
    output= output.substring(0,0);
    document.getElementById("screen").value=output;
}
function calcultor(){
    let input=document.getElementById("screen").value;
    result= eval(input); //eval: ham tinh gia tri cua chuoi
    if(result==NaN){
        document.getElementById("screen").value = "lỗi cú pháp";
    }
    else{
        document.getElementById("screen").value = result;
    }
}