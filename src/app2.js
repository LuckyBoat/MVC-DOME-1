import $ from "jquery";
import "./app2.css";
const $tab_bar = $("#app2 .tab_bar");
const $tab_con = $("#app2 .tab_con");

$tab_bar.on("click", "li", e => {
  //$tab_bar.children().removeClass("selected");
  //$tab_con.children().removeClass("active");//这样写也可以，但下面的链式操作更方便
  $(e.currentTarget)
    .addClass("selected")
    .siblings()
    .removeClass("selected");
  let index = $(e.currentTarget).index();
  $tab_con
    .children()
    .eq(index)
    .addClass("active")
    .siblings()
    .removeClass("active");
});
$tab_bar
  .children()
  .eq(0)
  .trigger("click");
