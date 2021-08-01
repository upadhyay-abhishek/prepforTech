//1. Sum of n natural numbers
 
function sum(n){
   
    if(n<=1){return n}
    else{return n+=sum(n-1);}
}

//2. even or not using if-else
function checkEven(n){
    if(n%2==0){
        return 'Even';
    }else return 'Not an Even number';
}

//3. prime or not 
function checkPrime(n){
    if(n==2) return 'not prime';

     for(i=2; i<=n/2;i++){
        if(n%i==0) return 'not prime'
     } 

     return 'Prime';
}

// 4. week day using switch 
function weekDay(n){
    switch (n) {
        case 1: return 'Sunday';
                break;
        case 2: return 'Monday';
                break;
        case 3: return 'Tuesday';
                break;
        case 4: return 'Wednesday';
                break;
        case 5: return 'Thursday';
                break;
        case 6: return 'Friday';
                break;  
        case 7: return 'Saturday';
                break;    
        default: return 'Invalid input'
            break;
    }
}

// 5. week day using if else 

function weekDay(n){
   if(n==1) return 'Sunday';
   else if (n==2) return 'Monday';
   else if (n==3) return 'Tuesday';
   else if (n==4) return 'Wednesday';
   else if (n==5) return 'Thursday';
   else if (n==6) return 'Friday';
   else if (n==7) return 'Saturday';
   else return 'Invalid input';
}

//6. weekday using ternary operators(? :)

function weekDay(n){  
var res=n==1?  'Sunday': 
       n==2? 'Monday':
       n==3? 'Tuesday':
       n==4? 'Wednesday':
       n==5? 'Thursday':
       n==6? 'Friday':
       n==7? 'Saturday':'Invalid input';

       return res;
}
//7. search from an array Element
function searchElement(n, arr){
    for(i=0;i<arr.length;i++){
        if(n.equals(arr[i])){ return 'element found'}
    }
    return 'element not found';

}

//8.find max in an array

function findMax(arr){
    val=arr[0];
    for(i=0;i<arr.length-1;i++){
        if(val< arr[i+1]){val =arr[i+1]}
    }
    return val;
}

//9. find min in an arry
function findMin(){
    val=arr[0];
    for(i=0;i<arr.length-1;i++){
        if(val> arr[i+1]){val =arr[i+1]}
    }
    return val;
}
//10. factorial
function fact(n){
   if(n==1) return 1;
   else return n*=fact(n-1);
} 

//11 reverse an array
//arr=[1,2,3,4,5]
function reverseArray(arr){
    var arr1=[];
    for(i=arr.length-1;i>=0;i--){
        arr1.push(arr[i]);
    }
    return arr1;
}

//12. reverse a string
function reverseString(str){
    var str1=[];
    for(i=str.length-1;i>=0;i--){
        str1.push(str[i]);
    }
    return str1.join('');
}
//13. remove duplicate from String
function removeDuplicate(str){
    var ch=[];
   
    for(i=0;i<str.length-1;i++){
        for(j=i+1;j<str.length;j++){
            if(str[i]==str[j]){
                    ch.push(str[i]);
            }
        }
    }
    for(i=0;i<ch.length;i++){
       
        str=str.replace(ch[i],'');
        
    }
    return str;
}

//14. palindrome or not
function checkPalindrome(n){
    var sum=0;
    var copy=n
    var val;
    while(copy/10 >0){
        val= copy%10;
        sum=sum*10+val;
        copy=Math.floor(copy/10);
        
    }
    if(sum==n){return 'Palindrome'}else {return 'not palindrome'} 
}
//15. palindrome string or not
function checkPalindromestring(n){
    let str1;
   let str2;
   let len=n.length;
   let iter=Math.floor(len/2);
   
   if(len%2==0){
       str1=n.substring(0,iter);
       str2=n.substring(iter);
   }else{
       str1=n.substring(0,iter);
       str2=n.substring(iter+1);
   }
   let str=[];
    for(i=str1.length-1;i>=0;i--){
        str.push(str1[i]);
    }
    str=str.join('');
    
    if(str==str2){return 'palindrome'}
    else return 'not a palindrome';

}
//16.no of words in the string

function countWords(n){
    let str=n.split(' ');
    return str.length;
}
//17.no days in month using swithch case

function noOfdaysByMonth(n){
    switch (n) {
        case "January": return 31;  
            break;
            case "February": return 28;  
            break;
            case "March": return 31;  
            break;
            case "April": return 30;  
            break;
            case "May": return 31;  
            break;
            case "June": return 30;  
            break;
            case "July": return 31;  
            break;
            case "August": return 31;  
            break;
            case "September": return 30;  
            break;
            case "October": return 31;  
            break;
            case "November": return 30;  
            break;
            case "December": return 31;  
            break;
    
        default: return 'enter valid month';
            break;
    }

}

//18. check if number is 0 , -ve or positive

function checknum(n){
    let sign='';
    if(n==0){ sign='0'}
    else if(n>0){sign='+'}
    else sign='-';
    switch (sign) {
        case '0': return 0;
            break;
        case '+': return 'positive';
            break;
        default:  return 'negative';
            break;
    }
}
//19. check even or not using if else same as 2
function checkEven(n){
    if(n%2==0){
        return 'Even';
    }else return 'Not an Even number';
}

//20.even or not using switch case
function evenOrOdd(n){
    res= n%2;
    switch(res){
        case 0: return 'Even';
            break;
        case 1: return 'Odd';
            break;
    }

}
//21. reverse only words in a string

function reverseWords(n){
    var str=n.split(' ');
    var res=[];
    for(i=0;i<str.length;i++){
        var str1=[];
        for(j=str[i].length;j>=0;j--){
            str1.push(str[i][j]);
        }
        str1=str1.join('');
        res.push(str1);
    }
    res=res.join(' ');
    return res;
}

//22. occurance of given charactyer in a string

function charCount(sampleChar,str){
    var counter=0;
    for(i=0;i<str.length;i++){
        if(sampleChar==str[i]){
            counter+=1;
        }
    }
    return counter;
}