const nums = [1,2,3,4,5,6,7,8,9,10]

for (x in nums) { // ele desviou o fluxo pro laço for
    if (x == 5) { 
        break
    }
    console.log (`x = ${nums[x]}`)
}   

for (y in nums) { // ele pulou e desviou o fluxo pra a proxima repetição
    if (y == 5) { 
        continue
    }
    console.log (`${y} = ${nums[y]}`)
}   