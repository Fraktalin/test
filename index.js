const chooseOptimalDistance = (t, k, ls) => {
  if (k > ls.length) {
    return null;
  } else {
    let fn = (a, n) =>
      [...Array(2e3)]
        .map((x, q) => a.filter((x, i) => q & (1 << i)).sort())
        .sort()
        .filter((x, i, a) => (x + "" != a[i - 1]) & (eval(x.join`+`) <= n));

    const newArray = fn(ls, t).filter((i) => i.length === k);
    let result = [];
    for (let i = 0; i < newArray.length; i++) {
      result.push(newArray[i].reduce((a, b) => a + b, 0));
    }
    return Math.max(...result);
  }
};
chooseOptimalDistance(174, 3, [51, 56, 58, 59, 61]); //173
chooseOptimalDistance(163, 3, [50]); // null
