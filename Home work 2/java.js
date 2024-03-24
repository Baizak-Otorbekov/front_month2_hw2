let num = [400, 122, 132, 111, 1100, 688, 900];
    for (let i = 0; i < num.length; i++) {
        for (let u = i + 1; u < num.length; u++)
        {
            if (num[i] < num[u]) {
                let temp = num[i];
                num[i] = num[u];
                num[u] = temp;
            }
        }
    }
console.log(num);

let arr = [400, 122, 132, 111, 1100, 688, 900];
    for (let i = 0; i < arr.length; i++) {
        for (let u = i + 1; u < arr.length; u++)
        {
            if (arr[i] > arr[u]) {
                let item = arr[i];
                arr[i] = arr[u];
                arr[u] = item;
            }
        }
    }
console.log(arr);