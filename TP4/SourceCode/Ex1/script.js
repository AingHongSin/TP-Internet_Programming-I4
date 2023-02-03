var tabs = document.getElementsByClassName("tab")

var historyTxt = "An essay is a piece of sustained writing in response to a question, topic or issue. Essays are commonly used for assessing and evaluating student progress in history. History essays test a range of skills including historical understanding, interpretation and analysis, planning, research and writing. To write an effective essay, students should examine the question, understand its focus and requirements, acquire information and evidence through research, then construct a clear and well-organised response."
var visionTxt = "As stated above, a vision statement is a very important part of an organization because it aligns with its mission, core values, and culture. It also guides the strategic plan, because it sets future goals. Similar to a mission statement, a vision statement it’s a living document that is referred to as a lodestar to lead a company to its next innovation. There are also different types of vision statements, as companies have unique core values. For example, a motivational vision statement will both motivate existing employees and also drive talent to the company. They’ll want to work at a place with a business vision that aligns with their personal values. A strong vision statement also works to help differentiate your company from others. All companies want to become profitable, but a company can create a unique vision statement that is appealing to its customers and employees."
var goaldTxt = "Make a business for yourself, boy, set some goals. Make a fat diamond out of dusty coals- OUTKAST. Goals are an extremely important thing in life without goals you would just be drifting through life. In ELA my reading goal is to work on my Literary text craft and structure. My writing goal is to improve my vocabulary skills. My personal goal is not one that will be reached soon but it is to become a professional and successful WNBA player. "

function tabClick(id) {
    console.log("clicked: " + id);

    for (let index = 0; index < tabs.length; index++) {
        tabs[index].style.backgroundColor = "transparent";
        
    }
    
    var selectedTab = document.getElementById(id);
    selectedTab.style.backgroundColor = "white"
    
    document.getElementById("context-title").innerHTML = id;
    
    var paragraph = document.getElementById("context")
    var listContext = document.getElementById("list-context")
    listContext.innerHTML = ""


    if (id == "History") {
        selectedTab.style.borderRadius = "10px 0 0 0"
        paragraph.innerHTML = historyTxt;
    } else if (id == "Vision") {
        paragraph.innerHTML = visionTxt;
        listContext.innerHTML = `
        <P class="title list-item">list item</P>
        <P class="title list-item">list item</P>
        <P class="title list-item">list item</P>
        `
        
    } else if (id == "Goals") {
        selectedTab.style.borderRadius = "0 10px 0 0"
        paragraph.innerHTML = goaldTxt;

    }





}