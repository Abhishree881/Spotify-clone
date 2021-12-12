var count=0;
const row_1 = document.getElementById("row-1");
const row_2 = document.getElementById("row-2");
const row_3 = document.getElementById("row-3");
const row_4 = document.getElementById("row-4");
const row_5 = document.getElementById("row-5");
const row_6 = document.getElementById("row-6");
const row_7 = document.getElementById("row-7");
const row_8 = document.getElementById("row-8");
const row_9 = document.getElementById("row-9");
const row_10 = document.getElementById("row-10");
function createNew(row)
{
    const newDiv = document.createElement('div');
    newDiv.classList.add('container')
    newDiv.innerHTML = `<div class="image">
                        <span class="img1">
                            <img src="https://rfmsomnii.com/wp-content/uploads/2020/02/Optimized-AW_AVIATION_11-CLEAN.jpg" class="i001">
                        </span>
                        <span class="img2">
                            <img src="play.png" class="i002">
                        </span>
                    </div>
                    <div class="artist">
                        Alan Walker
                    </div>
                    <div class="other">
                        tag 1,tag2,tag3
                    </div>`
    row.appendChild(newDiv);
    count++;
    if (count<4)
    {
        createNew(row);
    }
}
createNew(row_1);
count=0;
createNew(row_2);
count=0;
createNew(row_3);
count=0;
createNew(row_4);
count=0;
createNew(row_5);
count=0;
createNew(row_6);
count=0;
createNew(row_7);
count=0;
createNew(row_8);
count=0;
createNew(row_9);
count=0;
createNew(row_10);