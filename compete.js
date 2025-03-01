function getCurrentTime() {
    const today = new Date();
    const options = { hour: '2-digit', minute: '2-digit', hour12: true };
    return today.toLocaleTimeString('en-US', options);
}

// first
document.getElementById("complete-1").addEventListener('click', function(event){
    event.preventDefault();
    alert("Board upload successfully");
    document.getElementById("complete-1").disabled = true; 
    const navNum= document.getElementById("nav-num").innerText;
    const convertedNavNum= parseInt(navNum);
    console.log(convertedNavNum);
    const taskNum= document.getElementById("task-num").innerText;
    const convertedTaskNum= parseInt(taskNum);
    console.log(convertedTaskNum);

    if(convertedTaskNum==1){
        alert("Congrats!! You have completed all the current task");
        document.getElementById("nav-num").innerText=convertedNavNum+1;
        document.getElementById("task-num").innerText=convertedTaskNum-1;
        const card1=document.getElementById("ShopEase").innerText;

        const log= document.getElementById("activity-log");
        const p=document.createElement("p");
        const time = getCurrentTime();
        p.innerText=`You have completed the task ${card1} at ${time}`;
        p.classList.add(
            "bg-gray-100", "p-4", "mb-4", "rounded-lg", "font-medium"
        );
        log.appendChild(p);
    }
    else{
        document.getElementById("nav-num").innerText=convertedNavNum+1;
        document.getElementById("task-num").innerText=convertedTaskNum-1;

        const card1=document.getElementById("ShopEase").innerText;

        const log= document.getElementById("activity-log");
        const p=document.createElement("p");
        const time = getCurrentTime();
        p.innerText=`You have completed the task ${card1} at ${time}`;
        p.classList.add(
            "bg-gray-100", "p-4", "mb-4", "rounded-lg", "font-medium"
        );

        log.appendChild(p);
    }
})
// second
document.getElementById("complete-2").addEventListener('click', function(event){
    event.preventDefault();
    alert("Board upload successfully");
    document.getElementById("complete-2").disabled = true; 
    const navNum= document.getElementById("nav-num").innerText;
    const convertedNavNum= parseInt(navNum);
    console.log(convertedNavNum);
    const taskNum= document.getElementById("task-num").innerText;
    const convertedTaskNum= parseInt(taskNum);
    console.log(convertedTaskNum);

    if(convertedTaskNum==1){
        alert("Congrats!! You have completed all the current task");
        document.getElementById("nav-num").innerText=convertedNavNum+1;
        document.getElementById("task-num").innerText=convertedTaskNum-1;
        const card2=document.getElementById("CloudSync").innerText;

        const log= document.getElementById("activity-log");
        const p=document.createElement("p");
        const time = getCurrentTime();
        p.innerText=`You have completed the task ${card2} at ${time}`;
        p.classList.add(
            "bg-gray-100", "p-4", "mb-4", "rounded-lg", "font-medium"
        );
        log.appendChild(p);
    }
    else{
        document.getElementById("nav-num").innerText=convertedNavNum+1;
        document.getElementById("task-num").innerText=convertedTaskNum-1;

        const card2=document.getElementById("CloudSync").innerText;

        const log= document.getElementById("activity-log");
        const p=document.createElement("p");
        const time = getCurrentTime();
        p.innerText=`You have completed the task ${card2} at ${time}`;
        p.classList.add(
            "bg-gray-100", "p-4", "mb-4", "rounded-lg", "font-medium"
        );
        log.appendChild(p);
    }
})
// third
document.getElementById("complete-3").addEventListener('click', function(event){
    event.preventDefault();
    alert("Board upload successfully");
    document.getElementById("complete-3").disabled = true; 
    const navNum= document.getElementById("nav-num").innerText;
    const convertedNavNum= parseInt(navNum);
    console.log(convertedNavNum);
    const taskNum= document.getElementById("task-num").innerText;
    const convertedTaskNum= parseInt(taskNum);
    console.log(convertedTaskNum);

    if(convertedTaskNum==1){
        alert("Congrats!! You have completed all the current task");
        document.getElementById("nav-num").innerText=convertedNavNum+1;
        document.getElementById("task-num").innerText=convertedTaskNum-1;
        const card3=document.getElementById("SwiftPay").innerText;

        const log= document.getElementById("activity-log");
        const p=document.createElement("p");
        const time = getCurrentTime();
        p.innerText=`You have completed the task ${card3} at ${time}`;
        p.classList.add(
            "bg-gray-100", "p-4", "mb-4", "rounded-lg", "font-medium"
        );
        log.appendChild(p);
    }
    else{
        document.getElementById("nav-num").innerText=convertedNavNum+1;
        document.getElementById("task-num").innerText=convertedTaskNum-1;

        const card3=document.getElementById("SwiftPay").innerText;

        const log= document.getElementById("activity-log");
        const p=document.createElement("p");
        const time = getCurrentTime();
        p.innerText=`You have completed the task ${card3} at ${time}`;
        p.classList.add(
            "bg-gray-100", "p-4", "mb-4", "rounded-lg", "font-medium"
        );
        log.appendChild(p);
    }
})
// fourth
document.getElementById("complete-4").addEventListener('click', function(event){
    event.preventDefault();
    alert("Board upload successfully");
    document.getElementById("complete-4").disabled = true; 
    const navNum= document.getElementById("nav-num").innerText;
    const convertedNavNum= parseInt(navNum);
    console.log(convertedNavNum);
    const taskNum= document.getElementById("task-num").innerText;
    const convertedTaskNum= parseInt(taskNum);
    console.log(convertedTaskNum);

    if(convertedTaskNum==1){
        alert("Congrats!! You have completed all the current task");
        document.getElementById("nav-num").innerText=convertedNavNum+1;
        document.getElementById("task-num").innerText=convertedTaskNum-1;
        const card4=document.getElementById("Meta").innerText;

        const log= document.getElementById("activity-log");
        const p=document.createElement("p");
        const time = getCurrentTime();
        p.innerText=`You have completed the task ${card4} at ${time}`;
        p.classList.add(
            "bg-gray-100", "p-4", "mb-4", "rounded-lg", "font-medium"
        );
        log.appendChild(p);
    }
    else{
        document.getElementById("nav-num").innerText=convertedNavNum+1;
        document.getElementById("task-num").innerText=convertedTaskNum-1;

        const card4=document.getElementById("Meta").innerText;

        const log= document.getElementById("activity-log");
        const p=document.createElement("p");
        const time = getCurrentTime();
        p.innerText=`You have completed the task ${card4} at ${time}`;
        p.classList.add(
            "bg-gray-100", "p-4", "mb-4", "rounded-lg", "font-medium"
        );
        log.appendChild(p);
    }
})
// fifth
document.getElementById("complete-5").addEventListener('click', function(event){
    event.preventDefault();
    alert("Board upload successfully");
    document.getElementById("complete-5").disabled = true; 
    const navNum= document.getElementById("nav-num").innerText;
    const convertedNavNum= parseInt(navNum);
    console.log(convertedNavNum);
    const taskNum= document.getElementById("task-num").innerText;
    const convertedTaskNum= parseInt(taskNum);
    console.log(convertedTaskNum);

    if(convertedTaskNum==1){
        alert("Congrats!! You have completed all the current task");
        document.getElementById("nav-num").innerText=convertedNavNum+1;
        document.getElementById("task-num").innerText=convertedTaskNum-1;
        const card5=document.getElementById("Google").innerText;

        const log= document.getElementById("activity-log");
        const p=document.createElement("p");
        const time = getCurrentTime();
        p.innerText=`You have completed the task ${card5} at ${time}`;
        p.classList.add(
            "bg-gray-100", "p-4", "mb-4", "rounded-lg", "font-medium"
        );
        log.appendChild(p);
    }
    else{
        document.getElementById("nav-num").innerText=convertedNavNum+1;
        document.getElementById("task-num").innerText=convertedTaskNum-1;

        const card5=document.getElementById("Google").innerText;

        const log= document.getElementById("activity-log");
        const p=document.createElement("p");
        const time = getCurrentTime();
        p.innerText=`You have completed the task ${card5} at ${time}`;
        p.classList.add(
            "bg-gray-100", "p-4", "mb-4", "rounded-lg", "font-medium"
        );
        log.appendChild(p);
    }
})
// sixth
document.getElementById("complete-6").addEventListener('click', function(event){
    event.preventDefault();
    alert("Board upload successfully");
    document.getElementById("complete-6").disabled = true; 
    const navNum= document.getElementById("nav-num").innerText;
    const convertedNavNum= parseInt(navNum);
    console.log(convertedNavNum);
    const taskNum= document.getElementById("task-num").innerText;
    const convertedTaskNum= parseInt(taskNum);
    console.log(convertedTaskNum);

    if(convertedTaskNum==1){
        alert("Congrats!! You have completed all the current task");
        document.getElementById("nav-num").innerText=convertedNavNum+1;
        document.getElementById("task-num").innerText=convertedTaskNum-1;
        const card6=document.getElementById("Glassdoor").innerText;

        const log= document.getElementById("activity-log");
        const p=document.createElement("p");
        const time = getCurrentTime();
        p.innerText=`You have completed the task ${card6} at ${time}`;
        p.classList.add(
            "bg-gray-100", "p-4", "mb-4", "rounded-lg", "font-medium"
        );
        log.appendChild(p);
    }
    else{
        document.getElementById("nav-num").innerText=convertedNavNum+1;
        document.getElementById("task-num").innerText=convertedTaskNum-1;

        const card6=document.getElementById("Glassdoor").innerText;

        const log= document.getElementById("activity-log");
        const p=document.createElement("p");
        const time = getCurrentTime();
        p.innerText=`You have completed the task ${card6} at ${time}`;
        p.classList.add(
            "bg-gray-100", "p-4", "mb-4", "rounded-lg", "font-medium"
        );
        log.appendChild(p);
    }
})

document.getElementById("clear-btn").addEventListener('click',function(){
    document.getElementById("activity-log").innerText='';
})

document.getElementById("dicover-btn").addEventListener('click', function(){
    console.log("hoise");
})