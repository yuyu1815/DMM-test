let name;
let username;
let userresult;

username = prompt("お名前を教えて下さい。");
document.getElementById("name").innerHTML = username === "" ? "名無し" : username;

let rand = Math.floor( Math.random() * 5);
if (rand === 0) {
    userresult = "大吉";
}else if (rand === 1) {
    userresult = "中吉";
}else if (rand === 2) {
    userresult = "小吉";
}else if (rand === 3) {
    userresult = "吉";
}else if (rand === 4) {
    userresult = "凶";
}
/*
    len unsei =["大吉","中吉","小吉","吉","凶"]
    userresult = unsei[rand];
 */
document.getElementById("result").innerHTML = userresult;