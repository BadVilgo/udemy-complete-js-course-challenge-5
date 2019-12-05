let John = {
    name: 'John Liv',
    billValues: [ 124, 48, 268, 180, 42],
    tipValues: [],
    paidAmmounts: [], 
}

function johnTip(){
    for (let i=0; i<John.billValues.length; i++){

        if (John.billValues[i]<50){
            John.tipValues[i]=John.billValues[i]*0.2;
        }
        else if(John.billValues[i]>=50 && John.billValues[i]<=200){
            John.tipValues[i]=John.billValues[i]*0.15;
        }
        else if(John.billValues[i]>200){
            John.tipValues[i]=John.billValues[i]*0.1;
        }
    }
    for (let i=0; i<John.billValues.length; i++){
        John.paidAmmounts[i] = John.tipValues[i] + John.billValues[i];
    }
}

johnTip();
console.log(John);

//

let Mark = {
    name: 'Mark Kennedy',
    billValues: [ 77, 375, 110, 45],
    tipValues: [],
    paidAmmounts: [],
}

function markTip(){
    for (let i=0; i<Mark.billValues.length; i++){

        if (Mark.billValues[i]<100){
            Mark.tipValues[i]=Mark.billValues[i]*0.2;
        }
        else if(Mark.billValues[i]>=100 && Mark.billValues[i]<=300){
            Mark.tipValues[i]=Mark.billValues[i]*0.1;
        }
        else if(Mark.billValues[i]>300){
            Mark.tipValues[i]=Mark.billValues[i]*0.25;
        }
    }
    for (let i=0; i<Mark.billValues.length; i++){
        Mark.paidAmmounts[i] = Mark.tipValues[i] + Mark.billValues[i];
    }
}

markTip();
console.log(Mark);

function calcAverage(){
    let sum=0;
    for(let i=0; i<Mark.tipValues.length; i++){
        sum += Mark.tipValues[i];
    }
    console.log(sum/Mark.tipValues.length+ ' TUTAJJJ');
}
calcAverage();
//zrób tak jak w ćwiczeniu





/*
let avgJ = (John.tipValues.reduce((a, b) => a+b, 0))/John.tipValues.length;
let avgM = (Mark.tipValues.reduce((a, b) => a+b, 0))/Mark.tipValues.length;
console.log(avgM, avgJ);

function highestTip(){
    if (avgJ > avgM){
        console.log('John familly paid the highest tips on average => $'+avgJ);
    }
    else if(avgJ < avgM){
        console.log('Mark familly paid the highest tips on average => $'+avgM); 
    }
    else{
        console.log('Both families paid same ammount in tips'); 
    }
}
highestTip();

*/




//suma tipów MArk = 129,15
/*
let suma=0;
function tipSum(){ 
    for(let i=0; i<Mark.tipValues.length; i++){
        suma =+ Mark.tipValues[i]; 
    }
} 

tipSum(); 
console.log(suma); 
*/



