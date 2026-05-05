function task1_1()
{
    document.getElementById("result1_1").textContent = "";
    const arr = [1, 2, 3, 4, 5, 1, 5, 7, 9, 15];
    let max = arr[0];
    let min = arr[0];
    for (let i = 1; i < arr.length; i++)
    {
        if(max < arr[i]) max = arr[i];
        if(min > arr[i]) min = arr[i];
    }
    document.getElementById("result1_1").textContent = max - min;
}

function task1_2()
{
    document.getElementById("result1_1").textContent = "";
    const arr = [1, 2, 3, 4, 5, 1, 5, 7, 9, 15];
    const result = [];

    for (let i = 0; i < arr.length; i++)
    {
        let currentDigit = arr[i];
        let isAlreadyAdded = false;

        for (let j = 0; j < result.length; j++)
        {
            if (result[j] === currentDigit)
            {
                isAlreadyAdded = true;
                break;
            }
        }

        if (!isAlreadyAdded)
        {
            result.push(currentDigit);
        }
    }

    document.getElementById("result1_1").textContent = result;
}

function task1_3()
{
    document.getElementById("result1_1").textContent = "";

    const arr = [
        {id: 1, idDone: true},
        {id: 2, idDone: false},
        {id: 3, idDone: true}
    ]

    const result = arr.filter(item => item.idDone);

    document.getElementById("result1_1").textContent = JSON.stringify(result);
}

function task2_1()
{
    document.getElementById("result1_2").textContent = "";

    const arr = [1, 4, 6, 3, 2];
    const num = 2;

    const result = arr.filter(item => item > num);

    document.getElementById("result1_2").textContent = result;
}

function task2_2()
{
    document.getElementById("result1_2").textContent = "";

    const arr = [1, 4, [34, 1, 20], [6, [6, 12, 8], 6]];

    // const result = arr.flat(Infinity);

    function flatten(arr2)
    {
        let tempResult = [];

        for (let i = 0; i < arr2.length; i++)
        {
            if (Array.isArray(arr2[i]))
            {
                tempResult = tempResult.concat(flatten(arr2[i]));
            }
            else tempResult.push(arr2[i]);
        }
        return tempResult;
    }

    document.getElementById("result1_2").textContent = flatten(arr);
}

function task3_1()
{
    document.getElementById("result1_3").textContent = "";
    const arr = [1, 1, 1, 0, -1];
    let count = 0;
    const used = [];

    for (let i = 0; i < arr.length; i++)
    {
        if (used[i]) continue;

        for (let j = i + 1; j < arr.length; j++)
        {
            if (!used[j] && arr[i] + arr[j] === 0)
            {
                count++;
                used[i] = true;
                used[j] = true;
                break;
            }
        }
    }
    document.getElementById("result1_3").textContent = count;
}

function task3_2()
{
    document.getElementById("result1_3").textContent = "";
    const arr = [-1, 0, 1, 2, -1, -4, -1, 2];
    let count = 0;
    const used = [];

    for (let i = 0; i < arr.length; i++)
    {
        if (used[i]) continue;

        let found3 = false;

        for (let j = i + 1; j < arr.length; j++)
        {
            if (used[j] || found3) continue;

            for (let k = j + 1; k < arr.length; k++)
            {
                if (!used[k] && arr[i] + arr[j] + arr[k] === 0)
                {
                    count++;
                    used[i] = true;
                    used[j] = true;
                    used[k] = true;
                    found3 = true;
                    break;
                }
            }
        }
    }
    document.getElementById("result1_3").textContent = count;
}

function* randomGen(n, m)
{
    while (true) {
        yield Math.floor(Math.random() * (m - n + 1)) + n;
    }
}

function task21_1()
{
    document.getElementById("result2_1").textContent = "";
    const gen = randomGen(1, 10);

    const result = [];
    for(let i = 0; i < 5; i++)
    {
        result.push(gen.next().value);
    }
    document.getElementById("result2_1").textContent = "Случайные (1-10): " + result.join(", ") + " ...";
}

function* padovanGen()
{
    let p0 = 1, p1 = 1, p2 = 1;
    yield p0;
    yield p1;
    yield p2;
    while (true) {
        let next = p0 + p1;
        yield next;
        p0 = p1;
        p1 = p2;
        p2 = next;
    }
}

function task21_2()
{
    document.getElementById("result2_1").textContent = "";
    const gen = padovanGen();

    const result = [];
    for(let i = 0; i < 10; i++)
    {
        result.push(gen.next().value);
    }
    document.getElementById("result2_1").textContent = "Падован: " + result.join(", ") + " ...";
}

function* primeGen()
{
    yield 2;
    let n = 3;
    while (true) {
        let isPrime = true;
        for (let i = 2; i * i <= n; i++)
        {
            if (n % i === 0)
            {
                isPrime = false;
                break;
            }
        }
        if (isPrime) yield n;
        n += 2;
    }
}

function task21_3()
{
    document.getElementById("result2_1").textContent = "";
    const gen = primeGen();

    const result = [];
    for(let i = 0; i < 10; i++)
    {
        result.push(gen.next().value);
    }
    document.getElementById("result2_1").textContent = "Простые: " + result.join(", ") + " ...";
}

function task22_1()
{
    document.getElementById("result2_2").textContent = "";
    const str = "javascript";
    const map = new Map();

    for (let char of str)
    {
        if (char === " ") continue;
        if (map.has(char))
        {
            let currentCount = map.get(char);
            map.set(char, currentCount + 1);
        }
        else map.set(char, 1);
    }

    let result = "";
    for (let [key, value] of map)
    {
        result += `[${key}: ${value}] `;
    }

    document.getElementById("result2_2").textContent = `В слове "${str}": ` + result;
}

function getPrime(num)
{
    if (num === 1) return 2n;
    let count = 1;
    let n = 3n;

    while (true) {
        let isPrime = true;
        for (let i = 2n; i * i <= n; i++)
        {
            if (n % i === 0n)
            {
                isPrime = false;
                break;
            }
        }
        if (isPrime)
        {
            count++;
            if (count === num) return n;
        }
        n += 2n;
    }
}


function task22_2() {
    document.getElementById("result2_2").textContent = "";
    const n = 1000;
    const prime = getPrime(n);

    document.getElementById("result2_2").textContent = `${n}-е простое число: ${prime.toString()}`;
}
