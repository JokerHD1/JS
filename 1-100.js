for (let num=1; num<101; num++) 
{
    if (num % 5 === 0 && num % 3 === 0)
    {
        console.log(num+" делится без остатка на 3 и на 5")
    }
    else if (num % 3 === 0)
    {
        console.log(num+" делится без остатка на 3")
    }
    else if (num % 5 === 0) 
    { 
        console.log(num+" делится без остатка на 5")
    }
    else 
    {
        console.log(num)
    }
}

// if(num % 5 === 0 && num % 3 === 0)