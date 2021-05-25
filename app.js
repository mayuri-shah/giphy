
const $ImageArea = $("#ImgArea");
async function AppendImg(images){
    let TotalImg = images.data.length;
    let RandomIndex = Math.floor(Math.random() * TotalImg);
    let ImgUrl = images.data[RandomIndex].images.original.url;
    let $NewCol = $("<div>" ,{class: "col-md-4 col-12 mb-4"});
    let $NewImg = $("<img>" , {class: "w-100" , src : ImgUrl });
    $NewCol.append($NewImg);
    $ImageArea.append($NewCol);

}

$("form").on("submit", async function(evt){
    evt.preventDefault();
    let $search = $("#SearchText").val();
    $("SearchText").val("");
    const res = await axios.get("http://api.giphy.com/v1/gifs/search",
    {params:
     {
        q:$search,
        api_key:"MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
     }
    });
    AppendImg(res.data);  
    
});

$("#RemoveImg").on("click",function(){
    $ImageArea.empty();
});