// Вернуть число в обратном порядке
function task1()
{
    document.getElementById("result1").textContent = "";
    const val = document.getElementById("zadach1").value;
    let result = "";

    for (let i = val.length - 1; i >= 0; i--) {
        result += val[i];
    }

    document.getElementById("result1").textContent = result;
}

// Вернуть число без повторяющихся цифр
function task2()
{
    document.getElementById("result1").textContent = "";
    const val = document.getElementById("zadach1").value;
    let result = "";

    for (let i = 0; i < val.length; i++)
    {
        let currentDigit = val[i];
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
            result += currentDigit;
        }
    }

    document.getElementById("result1").textContent = result;
}

// Посчитать, сколько раз в данном числе встречается данная цифра
function task3()
{
    document.getElementById("result1").textContent = "";
    const val = document.getElementById("zadach1").value;
    const digit = document.getElementById("zadach1_zifra").value;
    let count = 0;

    for (let i = 0; i < val.length; i++)
    {
        if (val[i] === digit[0])
        {
            count++;
        }
    }

    document.getElementById("result1").textContent = count;
}

// Посчитать самую длинную последовательность нулей/единиц в двоичной записи данного числа
function task4()
{
    document.getElementById("result1").textContent = "";

    const val = document.getElementById("zadach1").value;
    let num = Number(val);
    let binary = num.toString(2);

    let maxQueque = 1;
    let currentQueque = 1;

    for (let i = 1; i < binary.length; i++)
    {
        if (binary[i] === binary[i - 1])
        {
            currentQueque++;
        }
        else
        {
            if (currentQueque > maxQueque)
            {
                maxQueque = currentQueque;
            }
            currentQueque = 1;
        }
    }

    if (currentQueque > maxQueque)
    {
        maxQueque = currentQueque;
    }

    document.getElementById("result1").textContent = `Двоичный вид: ${binary}, макс. серия: ${maxQueque}`;
}

// Найти самый первый неповторяющийся символ в строке
function task5()
{
    document.getElementById("result2").textContent = "";
    const str = document.getElementById("zadach2").value;

    for (let i = 0; i < str.length; i++)
    {
        let char = str[i];
        let count = 0;
        for (let j = 0; j < str.length; j++)
        {
            if (str[j] === char)
            {
                count++;
            }
        }
        if (count === 1)
        {
            document.getElementById("result2").textContent = char;
            return;
        }
    }

    document.getElementById("result2").textContent = "Нет";
}

// Cгенерировать строку заданной длины из случайных символов, взятых из набора английскийх букв и цифр
function task6()
{
    document.getElementById("result2").textContent = "";
    const len = document.getElementById("zadach2_zifra").value;
    let length = Number(len);

    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";

    for (let i = 0; i < length; i++)
    {
        let index = Math.floor(Math.random() * chars.length);
        result += chars[index];
    }

    document.getElementById("result2").textContent = result;
}

// Вернуть только уникальные символы строки
function task7()
{
    document.getElementById("result2").textContent = "";
    const str = document.getElementById("zadach2").value;

    let result = "";
    let seen = {};

    for (let i = 0; i < str.length; i++)
    {
        let char = str[i];
        if (!seen[char])
        {
            result += char;
            seen[char] = true;
        }
    }

    document.getElementById("result2").textContent = result;
}
