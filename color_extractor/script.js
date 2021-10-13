const Extractor ={
        canvas: null,
        ctx: null,
        data:[],
        img: null,
        //pixel:null,
        init(){
                Extractor.canvas=document.querySelector('main canvas');//choosing a canvas
                Extractor.ctx=Extractor.canvas.getContext('2d');// making a context for a canvas
                Extractor.img=document.createElement('img');//creating <img> element
                Extractor.img.src=Extractor.canvas.getAttribute('data-src');//allocating it in memory
                //img is loaded -> adding it to canvas
                Extractor.canvas.width=630;
                Extractor.canvas.style.width=630;
                Extractor.canvas.height=568;
                Extractor.canvas.style.height=568;
                Extractor.img.onload = (event)=>{
                        //Extractor.ctx.clearRect(0,0,cols,rows);
                        Extractor.ctx.drawImage(Extractor.img,0,0);//void (img-src,dx,dy)
                        //getImageData - an array of (r,g,b,a) elements
                        let imgDataObj= Extractor.ctx.getImageData( //(sx(pixel x coord),sy(pixel y coord),sw,sh)
                                0,
                                0,
                                Extractor.canvas.width,
                                Extractor.canvas.height
                        );
                        Extractor.data=imgDataObj.data;//m*n*4(rgba)
                        Extractor.canvas.addEventListener('mousemove', Extractor.getPixel);
                        Extractor.canvas.addEventListener('click', Extractor.addBox);
                };
        },

        //getting a pixel using getPixel color and HTML string
        getPixel(event)
        {
                let cols=Extractor.canvas.width;
                //let rows=Extractor.canvas.height;
                let{offsetX,offsetY}=event; // coordinates of an event
                let colorArr=Extractor.getPixelColor(cols,offsetY,offsetX);
                let htmlColor=`rgb(${colorArr.red}, ${colorArr.green}, ${colorArr.blue})`;
                //document.getElementById('pixelColor').style.background=htmlColor;//curr span bg == curr color 
                Extractor.pixel=htmlColor;
                m_glass.style.background=htmlColor;
                //Extractor.getAverage(event);// call this if need Average color 
        },

        getAverage(event)
        {
                let cols=Extractor.canvas.width;
                let rows= Extractor.canvas.height;
                // console.log(cols);
                // console.log(rows);
                //1. remove curr content  to draw img
                Extractor.ctx.clearRect(0,0,cols,rows);
                Extractor.ctx.drawImage(Extractor.img,0,0);

                let {offsetX,offsetY}=event;//our curr position
                const inset = 20; //inset 20px  as workable range('ll getAvgClr in it)
                // find a logic in it (bounding box, stops the rectangle)
                offsetX=Math.min(offsetX,cols-inset);
                offsetX=Math.max(offsetX, inset);
                offsetY=Math.min(offsetY,rows-inset);
                offsetY=Math.max(offsetY,inset);

                // create an average color rect 
                let reds=0;
                let greens=0; 
                let blues=0;// total for all val in rect
                // for anything in range of(-20 to 20)
                for(let x = -1 *inset;x<=inset;x++){// x=-20 to x=20
                        for(let y = -1*inset;y<=inset;y++){
                                let c = Extractor.getPixelColor(cols,offsetY+y,offsetX+x);
                                reds+= c.red;//arr of a num of a red values
                                greens+= c.green;
                                blues+= c.blue;
                        }
                }
                let boxSize=30*30;
                let red= Math.round(reds/boxSize);// natural median of all reds 
                let green= Math.round(greens/boxSize);
                let blue= Math.round(blues/boxSize);

                //avgColor is string
                let avgClr=`rgb(${red},${green},${blue})`;
                //m_glass.style.background=avgClr;

                //document.getElementById('pixelColor').style.background=avgClr;
                //draw on that rect
                /*Extractor.avg=avgClr;
                Extractor.ctx.fillStyle=avgClr;//fill our rect 
                Extractor.ctx.strokeStyle='#FFFFFF';//color of a rect stroke
                Extractor.ctx.strokeWidth=2;
                Extractor.ctx.strokeRect(offsetX-inset,offsetY-inset,41,41);//(x,y,width,height)(draw on a canvas)
                Extractor.ctx.fillRect(offsetX-inset,offsetY-inset,41,41);//(draw on a canvas)
                */
        },

        //get curr pixel color
        getPixelColor(cols,x,y)
        {
                let pixel = cols*x+y;// pixel position in canvas
                let arrayPos=pixel*4;//pixel num *4
                return{
                        red: Extractor.data[arrayPos],
                        green: Extractor.data[arrayPos+1],
                        blue: Extractor.data[arrayPos+2],
                        alpha: Extractor.data[arrayPos+3],
                }; 
        },

        //rgb to hex text converter
        rgba2hex(orig)
        {
        var a,
                rgb = orig.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),
                alpha = (rgb && rgb[4] || "").trim(),
                hex = rgb ?
                (rgb[1] | 1 << 8).toString(16).slice(1) +
                (rgb[2] | 1 << 8).toString(16).slice(1) +
                (rgb[3] | 1 << 8).toString(16).slice(1) : orig;

                if (alpha !== "") {
                a = alpha;
                } else {
                a = 01;
                }
                // multiply before convert to HEX
                a = ((a * 255) | 1 << 8).toString(16).slice(1)
                hex = hex + a;

                return hex;
        },

        addBox(event)//add a color to  clrArr
        {
                let colors = document.querySelector('.colors');
                let pxl= document.createElement('span');
                //creating a pixel class, so we can change attributes, etc.
                pxl.className='box';
                //adding to our sectionClr elm

                //creating 'delete button' and 'color info' string
                let dltBtn=document.createElement('button');
                let trashImg=document.createElement('img');
                let clrInfo=document.createElement('div');//color box 

                dltBtn.textContent="";
                dltBtn.className='delete-btn';
                trashImg.src='img/trash.png';
                trashImg.className='trashImg';
                clrInfo.textContent=`HEX #`+Extractor.rgba2hex(Extractor.pixel);
                clrInfo.className='colorInfo';

                //dlt button functionality
                dltBtn.addEventListener('click',deleteItem,false);
                function deleteItem()
                {
                        sectionClrs.pop();
                        this.parentNode.parentNode.removeChild(this.parentNode);
                }

                //pixelBox.innerHTML=`<button type="button" class="delete-btn">x</button>`;
                pxl.setAttribute('data-label','Exact pixel');// (attr name, val)
                pxl.setAttribute('data-color',`#`+Extractor.rgba2hex(Extractor.pixel));// htmlString
                pxl.style.backgroundColor=Extractor.pixel;//htmlColor
                
                dltBtn.appendChild(trashImg);
                pxl.appendChild(dltBtn);
                pxl.appendChild(clrInfo);
        
                // if delete an elm -> delete from sectionClrs arr
                if(sectionClrs.length < 9){
                        sectionClrs.push(pxl);
                        colors.appendChild(pxl);
                        console.log(sectionClrs);
                }
                else//pop a message that user can't add >9 elms
                {
                        alert('Вы не можете добавить больше 9 цветов');
                        alert('Удалите один из цветов,чтобы добавить новый');
                        pxl.remove();
                }
        },
};


moveGlass(); // changes glass position 
let sectionClrs=[]; //an array of our current colors (maxLength=9)
var img_src="";
const m_glass=document.querySelector('.m-glass');
const image_input= document.querySelector('#image_input');

//start of a magnify function
function moveGlass()
{
        var img,glass,w,h;
        img=document.getElementById('m-canvas');
        glass=document.createElement('div');
        glass.setAttribute("class","m-glass");
        img.parentElement.insertBefore(glass,img);//insert glass before img
        w = glass.offsetWidth / 2;
        h = glass.offsetHeight / 2;
        glass.addEventListener("mousemove", moveMagnifier);
        img.addEventListener("mousemove", moveMagnifier);

        function moveMagnifier(e) {
                var pos, x, y;
                e.preventDefault();
                pos = getCursorPos(e);
                x = pos.x;
                y = pos.y;

                //moving only in canvas+30 area
                if (x > img.width+30 ) {x = img.width+30; }
                if (x < -30 ) {x = 30;}
                if (y > img.height) {y = img.height ;}
                if (y < -30 ) {y = -30 ;}
                
                glass.style.left = (x) + "px";
                glass.style.top = (y-30-h) + "px";
        }
            
        function getCursorPos(e) {
                var a, x = 0, y = 0;
                e = e || window.event;
                a = img.getBoundingClientRect();
                x = e.pageX - a.left;
                y = e.pageY - a.top;
                x = x - window.pageXOffset;
                y = y - window.pageYOffset;
                return {x : x, y : y};
        }

}
//end of a magnify function


/**-- input section--**/

//start of an button input
image_input.addEventListener('change',function()
{

        //firstly -> clean the area
        Extractor.ctx.clearRect(0,0,Extractor.canvas.width,Extractor.canvas.height);
        const reader= new FileReader();
        reader.onload = function(e){
                Extractor.img.src=`${e.target.result}`;
                img_src=`${e.target.result}`;
        }
        reader.readAsDataURL(this.files[0]);
})
//end of an button input

//start of a drop zone input
document.querySelectorAll(".dropZoneInput").forEach((inputElement) => {

        const dropZoneElement = inputElement.closest(".invisible_input");
      
        dropZoneElement.addEventListener("click", () => {
          inputElement.click();
        });
      
        inputElement.addEventListener("change", (e) => {
                e.preventDefault();
                console.log(e.dataTransfer.files);
                if(e.dataTransfer.files.length){
                        inputElement.files=e.dataTransfer.files;
                        const reader= new FileReader();
                        reader.onload = function(e){
                                Extractor.img.src=`${e.target.result}`;
                                img_src=`${e.target.result}`;
                        }
                        reader.readAsDataURL(e.dataTransfer.files[0]);
                }
        });
      
        dropZoneElement.addEventListener("dragover", (e) => {
          e.preventDefault();
          dropZoneElement.classList.add("drop_zone_over");
        });
      //when leave drop zone or cancel drag
        ["dragleave", "dragend"].forEach((type) => {
          dropZoneElement.addEventListener(type, (e) => {
            dropZoneElement.classList.remove("drop_zone_over");
          });
        });      

        dropZoneElement.addEventListener("drop", function(e) {
                e.preventDefault();
                
                if(e.dataTransfer.files.length){
                        Extractor.ctx.clearRect(0,0,Extractor.canvas.width,Extractor.canvas.height);
                        inputElement.files=e.dataTransfer.files;
                        const reader= new FileReader();
                        reader.onload = function(e){
                                Extractor.img.src=`${e.target.result}`;
                                img_src=`${e.target.result}`;
                        }
                        reader.readAsDataURL(e.dataTransfer.files[0]);
                }
         
          dropZoneElement.classList.remove("drop_zone_over");
        });
});
//end of a drop zone input

//--- input section end--//
document.addEventListener('DOMContentLoaded', Extractor.init);
