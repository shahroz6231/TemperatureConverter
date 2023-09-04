 const calculateTemp=()=>{
    const numbertemp= document.getElementById('temp').value;
    const tempSelected= document.getElementById('temp_diff');
    const valueTemp= temp_diff.options[tempSelected.selectedIndex].value;

    const celToFah=(cel)=>{
        let fahrenheit= Math.round((cel*9/5) +32);
        return fahrenheit;
    }
    const fahToCel=(fehr)=>{
        let celsius= Math.round((fehr-32)*5/9);
        return celsius;
    }

    let result;

    if(valueTemp=='cel'){
        result=celToFah(numbertemp);
        document.getElementById('resultContainer').innerHTML=`= ${result} °Fahrenheit`;
    }else{
        result=fahToCel(numbertemp);
        document.getElementById('resultContainer').innerHTML=`= ${result} °Celsius`;
    }

 }