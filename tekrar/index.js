const name = "Deniz Simsek";
const age = 26;
const isMarried = false;

console.log(typeof name);
console.log(typeof age);
console.log(typeof isMarried);

const araba = {
  marka: "AUDI",
  model: "A3",
  manual: true,
  yakit: "HYBRID",
  motorHacmi: 1.6
};

const markalar = ["AUDI", "Mercedes", "FIAT", "Jaguar", "Rolls Royce"];
console.log(markalar[2]);

function welcome() {
  console.log("Galeriye hoşgeldiniz...");
}

welcome();

function halsor(isim) {
  console.log("Nasılsın " + isim + "?");
}

halsor("Deniz");

const welcomeArrow = () => {
    console.log("Galeriye hoşgeldiniz...");
}

welcomeArrow();

const halsorArrow = (isim) => {
    console.log("Nasılsın " + isim + "?");
}

halsorArrow("Deniz");

