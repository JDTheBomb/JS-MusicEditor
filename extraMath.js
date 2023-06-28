(Math.Sine = function (d) {
  return Math.sin((d * Math.PI) / 180);
}),
  (Math.Cosine = function (d) {
    return Math.cos((d * Math.PI) / 180);
  }),
  (Math.ACosine = function (d) {
    return Math.acos(d / Math.PI / 180);
  }),
  (Math.ListSum = function (a) {
    sum = 0;
    for (let i = 0; i < a.length; i++) {
      sum += a[i];
    }
    return sum;
  });
Math.MatMul = function (a, b) {
  let ca = a[0].length; //Colum A
  if (ca != b.length) {
    console.log("matmul: Collums don't match rows");
    return undefined;
  } else {
    let answer = [];
    for (let i = 0; i < a.length; i++) {
      let row = [];

      for (let j = 0; j < b[0].length; j++) {
        let sum = 0;

        for (let k = 0; k < ca; k++) {
          sum += a[i][k] * b[k][j];
        }
        row.push(sum);
      }
      answer.push(row);
    }
    return answer;
  }
};
Math.MatAdd = function (a, b) {
  let ra = a.length;
  let ca = a[0].length;
  if (ra != b.length || ca != b[0].length) {
    console.log('matadd: Collums and Rows do not match.');
  } else {
    let answer = [];
    for (let i = 0; i < ra; i++) {
      let row = [];
      for (let j = 0; j < ca; j++) {
        row.push(a[i][j] + b[i][j]);
      }
      answer.push(row);
    }
    return answer;
  }
};
Math.Transpose = function (a) {
  answer = [];
  for (let i = 0; i < a[0].length; i++) {
    let row = [];
    for (let j = 0; j < a.length; j++) {
      row.push(a[j][i]);
    }
    answer.push(row);
  }
  return answer;
};
Math.Maximum = function (a, b) {
  if (Math.ListSum(a) < Math.ListSum(b)) {
    return b;
  } else {
    return a;
  }
};
Math.Sigmoid = function (z) {
  return 1 / (1 + Math.exp(-z));
};
