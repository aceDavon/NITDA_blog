function SeatingStudents(arr) {
  const K = arr[0]
  const r = arr.slice(1).sort((a, b) => a - b)
  let varOcg = 0

  for (let i = 0; i < r.length - 1; i++) {
    if (r[i + 1] - r[i] > 1) {
      varOcg += r[i + 1] - r[i] - 1
    }
  }

  if (r[0] > 1) {
    varOcg += r[0] - 1
  }

  if (K - r[r.length - 1] > 1) {
    varOcg += K - r[r.length - 1] - 1
  }

  return varOcg
}
console.log(SeatingStudents([6, 4]))
