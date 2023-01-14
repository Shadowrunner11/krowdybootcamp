export function validateNumber(shoudBeNumber){
  if(typeof shoudBeNumber !== 'number' || Number.isNaN(shoudBeNumber))
    throw new Error('Is not a valid number')

  return shoudBeNumber
}

