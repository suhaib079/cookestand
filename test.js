var obj = [
    {
        id: 201810082,
        age: 25,
        major: "software",
        name: "Obay",
        pic: "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
    },
    {
        id: 2017595912,
        age: 19,
        major: "engineer",
        name: "Suhaib",
        pic: "suhaib.jpg"
    },
    {
        id: 2016124,
        age: 41,
        major: "computer science",
        name: "Ali",
        pic: "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg"
    },
    
];

for(var i = 0; i < obj.length; i++) {
    // Created <ul>
    var list = document.createElement("ul");

    //created li
    var item = document.createElement("li");
    item.innerHTML = "<img src=" + obj[i].pic + ">";
    list.appendChild(item)

    //created li
    var item = document.createElement("li");
    item.innerHTML = "<h3>" + obj[i].name + "</h3>";
    list.appendChild(item)
    
    // Created <li>
    var item = document.createElement("li");
    item.innerText = obj[i].id;
    list.appendChild(item);
    
    // Created <li>
    var item = document.createElement("li");
    item.innerText = obj[i].major;
    list.appendChild(item);

    //created li
    var item = document.createElement("li");
    item.innerText = obj[i].age;
    list.appendChild(item)

    document.getElementById("mydata").append(list);
}

//console.log(list);