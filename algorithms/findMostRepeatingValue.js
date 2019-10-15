const user = {
  firstname: "Deniz",
  lastname: "Deniz",
  name: "Simsek",
  middlename: "Deniz",
  deniz: true,
  sdfsd: "Simsek"
};

function findMostRepeatingValue(obj) {
  let counter = {};
  let frequentValue = 0;

  for (let key in user) {
    if (counter[user[key]] === undefined) {
      counter[user[key]] = 1;
    } else {
      counter[user[key]]++;
    }
  }

  for (let key in counter) {
    if (counter[key] > frequentValue) {
      frequentValue = key;
    }
  }

  return frequentValue;
}

console.log(findMostRepeatingValue(user));
