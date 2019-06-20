function checkTwId(id) {
    let ret = false;
    let regex = /^[A-Z][12][0-9]{8}$/;
    let result = id.match(regex);
    if (result != null) {
        let letters = 'ABCDEFGHJKLMNPQRSTUVXYWZIO';
        let c12 = id.substr(0, 1);
        let n12 = letters.indexOf(c12) + 10;
        let n1 = parseInt(n12 / 10);
        let n2 = n12 % 10;
        let n3 = parseInt(id.substr(1, 1));
        let n4 = parseInt(id.substr(2, 1));
        let n5 = parseInt(id.substr(3, 1));
        let n6 = parseInt(id.substr(4, 1));
        let n7 = parseInt(id.substr(5, 1));
        let n8 = parseInt(id.substr(6, 1));
        let n9 = parseInt(id.substr(7, 1));
        let n10 = parseInt(id.substr(8, 1));
        let n11 = parseInt(id.substr(9, 1));
        let sum = n1 * 1 + n2 * 9 + n3 * 8 + n4 * 7 + n5 * 6 + n6 * 5 + n7 * 4 + n8 * 3 + n9 * 2 + n10 * 1 + n11 * 1;
        ret = sum % 10 == 0;
    }
    // if (parseInt(id.length) == 10) {
    //     let c1 = id.substr(0, 1);
    //     console.log(`c1=${c1}`);
    //     let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    //     if (letters.indexOf(c1) >= 0) {
    //         let c2 = id.substr(1, 10);
    //         console.log(`c2=${c2}`);
    //         if (Number(c2 != null)) {
    //             if (id.substr(1, 2) == 1 || id.substr(1, 2) == 2) {
    //                 ret = true;    
    //             }      
    //         }    
    //     }
    // }
    return ret;
}
function createAnswer(num) {
    let poker = [];
    for (let i = 0; i < 10; i++) poker[i] = i;
    for (let i = poker.length - 1; i > 0; i--) {
        let rand = parseInt(Math.random() * (i + 1));
        let change = poker[i];
        poker[i] = poker[rand];
        poker[rand] = change;
    }
    let ret = '';
    for (let i = 0; i < num; i++)ret += poker[i];
    return ret;
}
function checkAB(ams,gus){
    let a=0,b=0;
    for(let i=0; i<gus.length; i++){
        //gus中的I碼==ans中的第I碼
        if(gus.charAt(i)==ams.charAt(i)){
            a++;
        }else if(ams.indexOf(gus.charAt(i)) >= 0){      //gus中的I碼是否存在於 ans中
            b++;
        }
    }
return a + 'A' + b + 'B';
}
function clone(source){
    if(typeof(source)!='Object')return null;
    let target = new Object();
    for (let attr in source){
        // if(source.hasOwnProperty(attr))hasOwnProperty擁有某個屬性
        target[attr]=source[attr];
    }
    return target;
    

}