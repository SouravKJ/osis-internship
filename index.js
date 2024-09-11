function convertTemp() {
    const tempInput = document.querySelector(".degree");  
    const temp = parseFloat(tempInput.value); 
    const unit = document.querySelector(".cel").value;  // Select the unit input
    const to=document.querySelector(".cel1").value;
    console.log("temp:",temp);
    console.log("unit:",unit);
    console.log("to:",to);
    // Check if the temperature input is a valid number
    if (isNaN(temp)) {
        alert("Please enter a valid number!");
        return; // Stop the function if the input is invalid
    }

    // Initialize the conversion variables
    let c, f, k;

    // Convert the input temperature to all units based on the selected input type
    if(unit=='celsius'){
            c = temp;
            f = (temp * 9 / 5) + 32;
            k = temp + 273.15;
            console.log("celsius:",c);
            console.log("fahrenhit:",f);
            console.log("kelvin:",k);
    }
     else if(unit=='fahrenhit'){
        c = (temp - 32) * 5 / 9;
        f = temp;
        k = c + 273.15;
        console.log("celsius:",c);
        console.log("fahrenhit:",f);
        console.log("kelvin:",k);
     }   
     else if(unit=='kelvin'){
        c = temp - 273.15;
            f = (c * 9 / 5) + 32;
            k = temp;
            console.log("celsius:",c);
            console.log("fahrenhit:",f);
            console.log("kelvin:",k);
     }
     else{
        alert("Please select a valid input unit!");
            return; 
     }
 if(to=='celsius'){
    document.querySelector(".display").innerHTML = `${c.toFixed(2)}°C`;
}
 else if(to=='fahrenhit'){
    document.querySelector(".display").innerHTML = `${f.toFixed(2)}°F`;
 }   
 else if(to=='kelvin'){
    document.querySelector(".display").innerHTML = `${k.toFixed(2)}°K`;
 }
 else{
    alert("can't get it!");
        return; 
 }

    // Set the output temperature based on the selected target unit
      
        
        
   
}
