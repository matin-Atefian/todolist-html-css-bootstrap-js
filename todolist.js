let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");

let input3 = document.querySelector(".input3");
let btn = document.querySelector("button");
let ol1 = document.querySelector(".ol1");
let ol2 = document.querySelector(".ol2");
let ol3 = document.querySelector(".ol3");
// let olInbox = document.querySelector(".olInbox");
let olHome = document.querySelector(".olHome");
let olProject = document.querySelector(".olProject");
let olWork = document.querySelector(".olWork");
let olStudy = document.querySelector(".olStudy");
// title ol
let h2Home = document.querySelector(".h2-Home");
let h2Project = document.querySelector(".h2-Project");
let h2Work = document.querySelector(".h2-Work");
let h2Study = document.querySelector(".h2-Study");

let p = document.querySelector("p");
// number of task
let listcount = document.querySelector(".span");
let listcount_p = document.querySelector(".span-my-p");
let listcount_h = document.querySelector(".span-my-h");
let listcount_w = document.querySelector(".span-my-w");
let listcount_s = document.querySelector(".span-my-s");
let listcountNum_P = document.querySelector(".span-num-p");
let listcountNum_h = document.querySelector(".span-num-h");
let listcountNum_w = document.querySelector(".span-num-w");
let listcountNum_s = document.querySelector(".span-num-s");
let listcount2 = document.querySelector(".listcount2");
let listcount3 = document.querySelector(".listcount3");
let count1 = 0;
let count2 = 0;
let count3 = 0;
let emp1 = 0;
let emp2 = 0;
let emp3 = 0;
let emp4 = 0;
// button Delete
let buttonDelete1 = document.querySelector(".button-delete1");
let buttonDelete2 = document.querySelector(".button-delete2");
// input value Projects
let inputChild = document.querySelector(".child-input1");
// input value Priority
let inputChild2 = document.querySelector(".child-input2");
let parentInput = document.querySelector(".parent-input1");
let parentInput2 = document.querySelector(".parent-input2");
// p Home
let pInput1 = document.querySelector(".p-input1");
// p work
let pInput2 = document.querySelector(".p-input2");
// p study
let pInput3 = document.querySelector(".p-input3");
// p High Priority
let pInput4 = document.querySelector(".p-input4");
// p Medium Priority
let pInput5 = document.querySelector(".p-input5");
// p low Priority
let pInput6 = document.querySelector(".p-input6");
// pop up
let popDone = document.querySelector(".pop-done");
let popDelete = document.querySelector(".pop-delete");
let spanUndo1 = document.querySelector(".span-undo1");
let spanUndo2 = document.querySelector(".span-undo2");
let span5 = document.createElement("span");
let span6 = document.createElement("span");
let span7 = document.createElement("span");
let span8 = document.createElement("span");

let spanProject0 = document.querySelector(".span-project0");
let spanProject1 = document.querySelector(".span-project1");
let spanProject2 = document.querySelector(".span-project2");
let spanProject3 = document.querySelector(".span-project3");
let spanProject4 = document.querySelector(".span-project4");

btn.addEventListener("click", toDoList);
btn.addEventListener("click", function () {
  input2.value = "Project";
  input3.value = "No Priority";
});
btn.addEventListener("click", function () {});
input1.addEventListener("keyup", function (event) {
  if (event.keyCode == 13) {
    toDoList();
    input2.value = "Project";
    input3.value = "No Priority";
  }
});

//Function
function toDoList() {
  if (input1.value.trim() !== "") {
    let li = document.createElement("li");
    // let numOflis = document.querySelectorAll("li").length;

    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let span1 = document.createElement("span");
    let span2 = document.createElement("span");
    let span3 = document.createElement("span");
    let span4 = document.createElement("span");
    span1.textContent = input1.value;
    span2.textContent = "Done";
    span3.textContent = "Delete";
    span4.textContent = "Add Description";
    ol1.appendChild(li);
    li.appendChild(div1);
    div1.appendChild(span1);
    div1.appendChild(div2);
    div2.appendChild(span2);
    div2.appendChild(span3);
    div2.appendChild(span4);
    div1.classList.add("div");
    span2.classList.add("span2");
    span3.classList.add("span3");
    span4.classList.add("span4");
    p.classList.replace("text-danger", "text-secondary");
    p.textContent = "Please Write Your Task";
    input1.classList.remove("error");
    input1.value = "";
    input1.focus();
    // My List number
    count1++;
    listcount.textContent = count1;
    listcount_p.textContent = count1;
    listcount_h.textContent = count1;
    listcount_w.textContent = count1;
    listcount_s.textContent = count1;
    // css button
    function cssOrder() {
      span2.style.padding = "5px";
      span1.style.padding = "5px";
      span1.style.margin = "5px";
      span2.style.border = "2px solid #212529";
      span3.style.padding = "5px";
      span4.style.padding = "5px";
      span3.style.border = "2px solid #212529";
      span4.style.border = "2px solid #212529";
      li.style.margin = "15px 0px";
      span2.style.boxShadow = "0px 0px 1px 5px #212529";
      span3.style.boxShadow = "0px 0px 1px 5px #212529";
      span4.style.boxShadow = "0px 0px 1px 5px #212529";
    }
    cssOrder();
    function spanButton() {
      // Done button
      span2.addEventListener("click", function () {
        let c = 5;
        let timerId = setInterval(function () {
          c--;
          spanUndo1.textContent = c;

          if (c == 0) {
            popDone.classList.remove("vis2");
            c = 6;
          }
        }, 1000);

        setTimeout(() => {
          clearInterval(timerId);
        }, 6000);
        // let li2 = li).legh;
        ol2.appendChild(li2);
        div1.removeChild(div2);
        li.classList.add("pot");
        li.classList.add("opas2");
        count2++;
        listcount2.textContent = count2;
        count1--;

        listcount.textContent = count1;
        listcount_p.textContent = count1;
        listcount_h.textContent = count1;
        listcount_w.textContent = count1;
        listcount_s.textContent = count1;

        popDone.classList.add("vis2");
        // Undo Number
        buttonDelete1.addEventListener("click", function () {
          count2 = 0;
          listcount2.textContent = count2;
          ol2.removeChild(li);
        });
        span2.style.border = "1px solid green";
      });
      let li2 = li;
      // Delete button
      span3.addEventListener("click", function () {
        li.classList.add("pot");

        ol3.appendChild(li2);
        div1.removeChild(div2);
        li.classList.add("opas1");
        // Delete list Number
        count3++;
        listcount3.textContent = count3;
        count1--;
        listcount.textContent = count1;
        listcount_p.textContent = count1;
        listcount_h.textContent = count1;
        listcount_w.textContent = count1;
        listcount_s.textContent = count1;
        if (listcount3 >= 0) {
          listcount3 = 0;
          listcount3.textContent = count3;
        }
        popDelete.classList.add("vis3");
        // Undo Number
        let d = 5;
        let timerId = setInterval(function () {
          d--;
          spanUndo2.textContent = d;
          if (d == 0) {
            popDelete.classList.remove("vis3");
            d = 6;
          }
        }, 1000);
        setTimeout(() => {
          clearInterval(timerId);
        }, 6000);
        buttonDelete2.addEventListener("click", function () {
          count3 = 0;
          listcount3.textContent = count3;
          li2.remove();
        });
      });
      // Description button
      span4.addEventListener("click", function () {
        let int = document.createElement("input");
        let btn2 = document.createElement("button");

        btn2.textContent = "Add To Task";
        btn2.style.textAlign = "center";
        btn2.classList.add("button1");
        int.classList.add("int");
        div2.appendChild(int);
        div2.appendChild(btn2);

        span4.classList.add("pot");
        btn2.addEventListener("click", Description);
        function Description() {
          if (int.value.trim() !== "") {
            let p2 = document.createElement("p");
            p2.classList.add("grid-col");
            div1.appendChild(p2);
            div2.removeChild(int);
            div2.removeChild(btn2);
            p2.textContent = "Description :: " + int.value.trim();
          } else {
          }
        }

        int.addEventListener("keyup", function (event) {
          if (event.keyCode == 13) {
            Description();
          }
        });
      });
    }
    spanButton();

    function input() {
      if (
        input3.value.trim() == "No Priority" ||
        input3.value.trim() == "no priority"
      ) {
        let span5 = document.createElement("span");

        li.classList.add("border-no");
        span5.textContent = "No Priority";
        div2.appendChild(span5);
        span5.classList.add("color-no");
      }
      if (
        input3.value.trim() == "High Priority" ||
        input3.value.trim() == "high priority"
      ) {
        let span6 = document.createElement("span");

        li.classList.add("border-high");
        span6.textContent = "High Priority";
        span6.classList.add("color-High");
        div2.appendChild(span6);
      }
      if (
        input3.value.trim() == "Medium Priority" ||
        input3.value.trim() == "medium priority"
      ) {
        let span7 = document.createElement("span");

        li.classList.add("border-Medium");
        span7.textContent = "Medium Priority";
        div2.appendChild(span7);
        span7.classList.add("color-medium");
      }
      if (
        input3.value.trim() == "Low Priority" ||
        input3.value.trim() == "low priority"
      ) {
        let span8 = document.createElement("span");

        li.classList.add("border-Low");
        span8.textContent = "Low Priority";
        div2.appendChild(span8);
        span8.classList.add("color-low");
      }
    }
    input();
    function hoverSpan() {
      span2.addEventListener("mouseenter", function () {
        span2.style.border = "2px solid rgb(0, 128, 0)";
        span2.style.color = "rgb(0, 128, 0)";
        span2.style.boxShadow = "0px 0px 10px 1px rgb(0, 128, 0)";
        span2.style.transition = "0.2s";
      });
      span2.addEventListener("mouseleave", function () {
        span2.style.border = "2px solid #212529";
        span2.style.color = "rgb(255,255,255)";
        span2.style.boxShadow = "0px 0px 1px 5px #212529";
        span2.style.transition = "0.2s";
      });
      span3.addEventListener("mouseenter", function () {
        span3.style.border = "2px solid rgb(255, 0, 0)";
        span3.style.color = "rgb(255, 0, 0)";
        span3.style.boxShadow = "0px 0px 10px 2px rgb(255, 0, 0)";
        span3.style.transition = "0.2s";
      });
      span3.addEventListener("mouseleave", function () {
        span3.style.border = "2px solid #212529";
        span3.style.color = "rgb(255,255,255)";
        span3.style.boxShadow = "0px 0px 1px 5px #212529";
        span3.style.transition = "0.2s";
      });
      span4.addEventListener("mouseenter", function () {
        span4.style.border = "2px solid rgb(255, 193, 6)";
        span4.style.color = "rgb(255, 193, 6)";
        span4.style.boxShadow = "0px 0px 10px 2px rgb(255, 193, 6)";
        span4.style.transition = "0.2s";
      });
      span4.addEventListener("mouseleave", function () {
        span4.style.border = "2px solid #212529";
        span4.style.color = "rgb(255,255,255)";
        span4.style.boxShadow = "0px 0px 1px 5px #212529";
        span4.style.transition = "0.2s";
      });
    }
    hoverSpan();

    function inputProject() {
      if (
        input2.value.trim() == "Project" ||
        input2.value.trim() == "project"
      ) {
        let Project = document.createElement("span");
        Project.textContent = "Project";
        Project.style.color = "#08c7e1";
        Project.style.margin = "5px";
        div2.appendChild(Project);
        let liProject = li;
        h2Project.classList.add("vis");
        olProject.appendChild(liProject);
        emp1++;
        listcountNum_P.textContent = emp1 + "/";
        span2.addEventListener("click", function () {
          emp1--;
          listcountNum_P.textContent = emp1 + "/";
        });
        span3.addEventListener("click", function () {
          emp1--;
          listcountNum_P.textContent = emp1 + "/";
        });
      }
      if (input2.value.trim() == "Home" || input2.value.trim() == "home") {
        let Home = document.createElement("span");
        Home.textContent = "Home";
        Home.style.color = "#08c7e1";
        Home.style.margin = "5px";
        div2.appendChild(Home);
        let liHome = li;
        h2Home.classList.add("vis");
        olHome.appendChild(liHome);
        console.log(olHome.length);
        emp2++;
        listcountNum_h.textContent = emp2 + "/";
        span2.addEventListener("click", function () {
          emp2--;
          listcountNum_h.textContent = emp2 + "/";
        });
        span3.addEventListener("click", function () {
          emp2--;
          listcountNum_h.textContent = emp2 + "/";
        });
      }
      if (input2.value.trim() == "Work" || input2.value.trim() == "work") {
        let Work = document.createElement("span");
        Work.textContent = "Work";
        Work.style.color = "#08c7e1";
        Work.style.margin = "5px";
        div2.appendChild(Work);
        let liWork = li;
        olWork.appendChild(liWork);
        console.log(olWork);
        h2Work.classList.add("vis");
        emp3++;
        listcountNum_w.textContent = emp3 + "/";
        span2.addEventListener("click", function () {
          emp3--;
          listcountNum_w.textContent = emp3 + "/";
        });
        span3.addEventListener("click", function () {
          emp3--;
          listcountNum_w.textContent = emp3 + "/";
        });
      }

      if (input2.value.trim() == "Study" || input2.value.trim() == "study") {
        let Study = document.createElement("span");
        Study.textContent = "Study";
        div2.appendChild(Study);
        Study.style.color = "#08c7e1";
        Study.style.margin = "5px";
        let liStudy = li;
        olStudy.appendChild(liStudy);

        h2Study.classList.add("vis");
        emp4++;
        listcountNum_s.textContent = emp4 + "/";
        span2.addEventListener("click", function () {
          emp4--;
          listcountNum_s.textContent = emp4 + "/";
        });
        span3.addEventListener("click", function () {
          emp4--;
          listcountNum_s.textContent = emp4 + "/";
        });
      }
    }
    inputProject();
    function myList() {
      spanProject0.addEventListener("click", function () {
        olHome.classList.remove("hid", "vis");
        olProject.classList.remove("hid", "vis");
        h2Project.classList.remove("hid", "vis");
        ol1.classList.remove("hid", "vis");
        olWork.classList.remove("hid", "vis");
        olStudy.classList.remove("hid", "vis");
        h2Home.classList.remove("hid", "vis");
        h2Work.classList.remove("hid", "vis");
        h2Study.classList.remove("hid", "vis");
        olHome.classList.add("vis");
        h2Home.classList.add("vis");
        ol1.classList.add("vis");
        olWork.classList.add("vis");
        h2Work.classList.add("vis");
        olStudy.classList.add("vis");
        h2Home.classList.add("vis");
        olProject.classList.add("vis");
        h2Project.classList.add("vis");
      });
      spanProject1.addEventListener("click", function () {
        console.log("ok");
        olProject.classList.remove("hid", "vis");
        h2Project.classList.remove("hid", "vis");
        olHome.classList.remove("hid", "vis");
        ol1.classList.remove("hid", "vis");
        olWork.classList.remove("hid", "vis");
        olStudy.classList.remove("hid", "vis");
        h2Home.classList.remove("hid", "vis");
        h2Work.classList.remove("hid", "vis");
        h2Study.classList.remove("hid", "vis");
        olHome.classList.add("vis");
        h2Home.classList.add("vis");
        ol1.classList.add("hid");
        olWork.classList.add("hid");
        h2Work.classList.add("hid");
        olStudy.classList.add("hid");
        h2Study.classList.add("hid");
        olProject.classList.add("hid");
        h2Project.classList.add("hid");
      });
      spanProject2.addEventListener("click", function () {
        console.log("ok");
        olProject.classList.remove("hid", "vis");
        h2Project.classList.remove("hid", "vis");
        olHome.classList.remove("hid", "vis");
        ol1.classList.remove("hid", "vis");
        olWork.classList.remove("hid", "vis");
        olStudy.classList.remove("hid", "vis");
        h2Home.classList.remove("hid", "vis");
        h2Work.classList.remove("hid", "vis");
        h2Study.classList.remove("hid", "vis");
        olHome.classList.add("hid");
        h2Home.classList.add("hid");
        ol1.classList.add("hid");
        olWork.classList.add("vis");
        h2Work.classList.add("vis");
        olStudy.classList.add("hid");
        h2Study.classList.add("hid");
        olProject.classList.add("hid");
        h2Project.classList.add("hid");
      });
      spanProject3.addEventListener("click", function () {
        console.log("ok");
        olProject.classList.remove("hid", "vis");
        h2Project.classList.remove("hid", "vis");
        olHome.classList.remove("hid", "vis");
        ol1.classList.remove("hid", "vis");
        olWork.classList.remove("hid", "vis");
        olStudy.classList.remove("hid", "vis");
        h2Home.classList.remove("hid", "vis");
        h2Work.classList.remove("hid", "vis");
        h2Study.classList.remove("hid", "vis");
        olHome.classList.add("hid");
        h2Home.classList.add("hid");
        ol1.classList.add("hid");
        olWork.classList.add("hid");
        h2Work.classList.add("hid");
        olStudy.classList.add("vis");
        h2Study.classList.add("vis");
        olProject.classList.add("hid");
        h2Project.classList.add("hid");
      });
      spanProject4.addEventListener("click", function () {
        console.log("ok");
        olProject.classList.remove("hid", "vis");
        h2Project.classList.remove("hid", "vis");
        olHome.classList.remove("hid", "vis");
        ol1.classList.remove("hid", "vis");
        olWork.classList.remove("hid", "vis");
        olStudy.classList.remove("hid", "vis");
        h2Home.classList.remove("hid", "vis");
        h2Work.classList.remove("hid", "vis");
        h2Study.classList.remove("hid", "vis");
        olHome.classList.add("hid");
        h2Home.classList.add("hid");
        ol1.classList.add("hid");
        olWork.classList.add("hid");
        h2Work.classList.add("hid");
        olStudy.classList.add("hid");
        h2Study.classList.add("hid");
        olProject.classList.add("vis");
        h2Project.classList.add("vis");
      });
    }
    myList();
  } else {
    p.textContent = "لطفا مثل آدم متنت رو وارد کن";
    p.classList.replace("text-secondary", "text-danger");
    input1.classList.add("error");
  }
}
parentInput.addEventListener("mouseenter", () => {
  inputChild.classList.add("vis");
  pInput3.classList.add("p-input-next3");
  pInput2.classList.add("p-input-next3");
  pInput1.classList.add("p-input-next3");
});
parentInput.addEventListener("mouseleave", () => {
  inputChild.classList.remove("vis");
  pInput3.classList.remove("p-input-next3");
  pInput2.classList.remove("p-input-next3");
  pInput1.classList.remove("p-input-next3");
});

parentInput2.addEventListener("mouseenter", () => {
  inputChild2.classList.add("vis");
  pInput6.classList.add("p-input-next");
  pInput5.classList.add("p-input-next1");
  pInput4.classList.add("p-input-next2");
});
parentInput2.addEventListener("mouseleave", () => {
  inputChild2.classList.remove("vis");
  pInput6.classList.remove("p-input-next");
  pInput5.classList.remove("p-input-next1");
  pInput4.classList.remove("p-input-next2");
});
pInput1.addEventListener("click", function () {
  input2.value = pInput1.innerHTML;
});
pInput2.addEventListener("click", function () {
  input2.value = pInput2.innerHTML;
});
pInput3.addEventListener("click", function () {
  input2.value = pInput3.innerHTML;
});
pInput4.addEventListener("click", function () {
  input3.value = pInput4.innerHTML;
});
pInput5.addEventListener("click", function () {
  input3.value = pInput5.innerHTML;
});
pInput6.addEventListener("click", function () {
  input3.value = pInput6.innerHTML;
});
