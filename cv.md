# Irakli Razmadze
---

## Contact information
**Email:** *irakli.dsd@gmail.com*
**Linkedin:** *https://www.linkedin.com/in/irakli-razmadze-aa887a206/*


## Summary

Highly motivated Front-End Developer, self-confident in work, effective in self-education and working independently. Looking for problems to solve and gain work experience.

## Skills
+ HTML5, CSS3, Javascript
+ Reactjs & JQuery libraries for Javascript
+ Bootstrap framework for CSS
+ Material UI component library
+ Firebase, Azure
+ Python with Selenium 
+ Oracle RDBMS, MS SQL
+ Jira, Git


## Code examples
Given array, returns a new array where all zeroes are moved to the end, preserving the order of other elements.
```Javascript
let moveZeros = function (arr) {
let zeroes = 0;
let arr2 = arr.filter(item => {
    if(item === 0){
        zeroes++;
        return false
    } else {
        return true;
    }
})
for(let i = 0; zeroes > i; i++){
    arr2.push(0)
}
return arr2
}
```
Given a string, returns a new string with hastag followed by words in PascalCase.
```Javascript
function generateHashtag (str) {
  let trimmedStr = str.replace(/\s\s+/g, ' ').trim();
  if( trimmedStr === " " || trimmedStr === "") return false;
  arr = trimmedStr.split(" ")
  console.log(trimmedStr)
  arr.forEach((item,i) => {
    arr[i] = item[0].toUpperCase() + item.substring(1)
  })
  let res = arr.join('')
  if( res.length >= 140) return false;
  return `#${res}`
}
```
Given an n x n array, returns the array elements arranged from outermost elements to the middle element, traveling clockwise.
```Javascript
function snail(array) {
    let dimension = array.length;
    let isEven = (dimension%2) ? false : true; 
    let snailPathArray = []
    let pathNumber;
    
    if(array[0].length === 0) return [];
    
    if(dimension === 2){
        snailPathArray.push( array[Math.ceil(dimension/2-1)][Math.ceil(dimension/2-1)] )
        snailPathArray.push( array[Math.ceil(dimension/2-1)][Math.ceil(dimension/2)] )
        snailPathArray.push( array[Math.ceil(dimension/2)][Math.ceil(dimension/2)] )
        snailPathArray.push( array[Math.ceil(dimension/2)][Math.ceil(dimension/2-1)] )
        return snailPathArray;
    }
  
    if(dimension === 1){
      return [array[0][0]]
    }
  
    if(isEven && dimension >= 4){
        pathNumber = Math.ceil((dimension - 4)/2 + 1);

    }
    if( !isEven && dimension >= 3){
        pathNumber = Math.ceil((dimension - 3)/2 + 1);
    }
 

    
    for(let i = 0; i < pathNumber; i++){

        let start = { row: i, index: i, last: dimension - i}
        let borders = { top: [], right: [], bottom: [], left: []}

        
        

        let row = start.row;
        let index = start.index;
        let last = start.last;


        borders.top = [].concat(array[row]).slice(index, last)
        borders.right = array.slice(index, last).map(item => item[item.length-1-i]).slice(1)
        borders.bottom = [].concat(array[dimension-1-i]).slice(index, last).reverse().slice(1)
        borders.left = array.slice(index, last).map(item => item[0+i]).reverse().slice(1, last - 1 - i)


    
        for(item in borders){
            snailPathArray.push(...borders[item])
        }

        if(!isEven && i == pathNumber - 1){
            let center = Math.floor(dimension/2)
            snailPathArray.push( array[center][center] )
        }

        if(isEven && i == pathNumber - 1){
            snailPathArray.push( array[Math.ceil(dimension/2-1)][Math.ceil(dimension/2-1)] )
            snailPathArray.push( array[Math.ceil(dimension/2-1)][Math.ceil(dimension/2)] )
            snailPathArray.push( array[Math.ceil(dimension/2)][Math.ceil(dimension/2)] )
            snailPathArray.push( array[Math.ceil(dimension/2)][Math.ceil(dimension/2-1)] )
        }
        

    }

    return snailPathArray;
    
  }
```

## Experience
+ Building e-commerce website from HTML Template
+ Implementing various React components in an exsiting project
+ Building CRUD application with Firebase & React

## Education
+ CS Major in the Tbilisi State University (II course)
+ Eloquent JavaScript by Marijn Haverbeke
+ javascript.info
+ "Полный курс по JavaScript + React - с нуля до результата" by Ivan Petrechenko

## English
+ Completed basic english course in the №161 Public School of Georgia
+ Completed full B2 course in the Georgian University (SANGU)
+ Provided IT support/Software documentation to English-speaking clients