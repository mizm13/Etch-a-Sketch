
const size = document.querySelector("#size");


size.addEventListener("click", () => {

    let num = parseInt(prompt("Enter number of squares for new grid (1-100):")); 
     if(num >= 1 && num <= 100)
     {
        const container = document.querySelector("#container");

        while(container.hasChildNodes())
        {
            container.removeChild(container.firstChild);
        }

        gridCreation(num);
     }
     else
     {
        while(container.hasChildNodes())
        {
            container.removeChild(container.firstChild);
        }
     }
});

gridCreation(16);


function gridCreation(num)
{
    for(let i=0; i<num;i++)
    {
        const rowDiv = document.createElement("div");
        rowDiv.className = "row";

        for(let i =0;i < num; i++)
        {
            const cellDiv = document.createElement("div");
            cellDiv.className = "cell";

            rowDiv.appendChild(cellDiv);

            cellDiv.addEventListener("mouseover", ()=> {

                cellDiv.style.backgroundColor = "black";
            });

            const reset = document.querySelector("#reset");

            //resets grid to be empty
            reset.addEventListener("click", ()=> {

                cellDiv.style.backgroundColor = "white";
            });


        }

        const container = document.querySelector("#container");

        container.appendChild(rowDiv);


    }

}
