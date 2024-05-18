

for(let i=0; i<16;i++)
{
    const rowDiv = document.createElement("div");
    rowDiv.className = "row";

    for(let i =0;i < 16; i++)
    {
        const cellDiv = document.createElement("div");
        cellDiv.className = "cell";

        rowDiv.appendChild(cellDiv);

    }

    const container = document.querySelector("#container");

    container.appendChild(rowDiv);


}