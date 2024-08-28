const form=document.querySelector('form')
form.addEventListener('submit',function(e){
  // Preventing the default action of the form
  e.preventDefault()

  // Fetching values from input
  // document.querySelector('#height').value
  // As the above code gives value in string so we need to parse it into integer which is done as follows
  const height=parseInt(document.querySelector("#height").value)
  const weight=parseInt(document.querySelector("#weight").value)
  const results=document.querySelector("#results")

  if(height==='' || height<0 || isNaN(height)){
    results.innerHTML=`Please give a valid height ${height}`
  }
  else if(weight==='' || weight<0 || isNaN(weight)){
    results.innerHTML=`Please give a valid weight ${weight}`
  }
  else{
    const bmi=(weight/((height*height)/10000)).toFixed(2)

    // show the result
    results.innerHTML=`<span>${bmi}</span>`
    
  }
})