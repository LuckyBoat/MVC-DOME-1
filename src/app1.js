import $ from "jquery";
import "./app1.css";

const $number = $("#app1 #number");
const $add1 = $("#app1 #add1");
const $minus1 = $("#app1 #minus1");
const $multi2 = $("#app1 #multi2");
const $divide2 = $("#app1 #divide2");
let num = localStorage.getItem("num");
$number.text(num || 100);

$add1.on("click", () => {
  num = parseInt($number.text());
  num += 1;
  $number.text(num);
  localStorage.setItem("num", num);
});
$minus1.on("click", () => {
  num = parseInt($number.text());
  num -= 1;
  $number.text(num);
  localStorage.setItem("num", num);
});
$multi2.on("click", () => {
  num = parseInt($number.text());
  num *= 2;
  $number.text(num);
  localStorage.setItem("num", num);
});
$divide2.on("click", () => {
  num = parseInt($number.text());
  num /= 2;
  $number.text(num);
  localStorage.setItem("num", num);
});
