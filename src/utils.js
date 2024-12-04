export const range = (start, end, step = 1) => {
  let output = [];
  // solve this range utility
  // handle scenario where end is not specified range(5) - [0, 1, 2, 3, 4]
  // a conditional check for end
  
  //if the end is not specified, let us assume end is start and start is 0
  if (end === undefined) { 
    end = start; 
    start = 0; 
  }

  //Generate the range
  for (let i = start; i < end; i += step) {
   output.push(i); 
  }

  return output;
};
 // range(5) -> [0, 1, 2, 3, 4] 



