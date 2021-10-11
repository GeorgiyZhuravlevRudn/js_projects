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
                //Extractor.img.src=Extractor.canvas.getAttribute('data-src');//allocating it in memory
                //img is loaded -> adding it to canvas
                Extractor.canvas.width=900;
                Extractor.canvas.style.width=900;
                Extractor.canvas.height=500;
                Extractor.canvas.style.height=500;

                Extractor.img.onload = (event)=>{
                        Extractor.ctx.drawImage(Extractor.img,0,0);//void (img-src,dx,dy)
                        //getImageData - an array of (r,g,b,a) elements
                        let imgDataObj= Extractor.ctx.getImageData( //(sx(pixel x coord),sy(pixel y coord),sw,sh)
                                0,
                                0,
                                Extractor.canvas.width,
                                Extractor.canvas.height
                        );
                        Extractor.data=imgDataObj.data;//m*n*4(rgba)

                        Extractor.canvas.addEventListener('mousemove', Extractor.getPixel);// every time i move mouse it'll get a pixel
                        Extractor.canvas.addEventListener('click', Extractor.addBox);
                };
        },

        getPixel(event)
        {
                let cols=Extractor.canvas.width;
                //let rows=Extractor.canvas.height;
                let{offsetX,offsetY}=event; // coordinates of an event
                let colorArr=Extractor.getPixelColor(cols,offsetY,offsetX);//
                let htmlColor=`rgb(${colorArr.red}, ${colorArr.green}, ${colorArr.blue})`;//
                document.getElementById('pixelColor').style.background=htmlColor;//curr span bg == curr color 
                Extractor.pixel=htmlColor;
                Extractor.getAverage(event);
        },
        getAverage(event)
        {
                let cols=Extractor.canvas.width;
                let rows= Extractor.canvas.height;
                //1. remove curr content  to draw img and rect 
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
                let boxSize=41*41;
                let red= Math.round(reds/boxSize);// natural median of all reds 
                let green= Math.round(greens/boxSize);
                let blue= Math.round(blues/boxSize);

                //avgColor is string
                let avgClr=`rgb(${red},${green},${blue})`;
                //document.getElementById('pixelColor').style.background=avgClr;
                //draw on that rect
                m_glass.style.background=avgClr;
                /*Extractor.avg=avgClr;
                Extractor.ctx.fillStyle=avgClr;//fill our rect 
                Extractor.ctx.strokeStyle='#FFFFFF';//color of a rect stroke
                Extractor.ctx.strokeWidth=2;
                Extractor.ctx.strokeRect(offsetX-inset,offsetY-inset,41,41);//(x,y,width,height)(draw on a canvas)
                Extractor.ctx.fillRect(offsetX-inset,offsetY-inset,41,41);//(draw on a canvas)
                */
        },

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
        rgba2hex(orig)
        {
        var a, isPercent,
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
                let dltBtn=document.createElement('button');
                dltBtn.textContent="x";
                dltBtn.className='delete-btn';
                dltBtn.addEventListener('click',deleteItem,false);
                function deleteItem()
                {
                        this.parentNode.parentNode.removeChild(this.parentNode);
                }
                //pixelBox.innerHTML=`<button type="button" class="delete-btn">x</button>`;
                pxl.setAttribute('data-label','Exact pixel');// (attr name, val)
                pxl.setAttribute('data-color',`#`+Extractor.rgba2hex(Extractor.pixel));// htmlString
                pxl.style.backgroundColor=Extractor.pixel;//htmlColor
                pxl.appendChild(dltBtn);
                colors.appendChild(pxl);
        },
};
magnify(50);
const image_input= document.querySelector('#image_input');
image_input.addEventListener('change',function()
{
        const reader= new FileReader();
        reader.onload = function(e){
                Extractor.img.src=`${e.target.result}`;
                img_src=`${e.target.result}`
        }
        reader.readAsDataURL(this.files[0]);
})
const m_glass=document.querySelector('.m-glass');
console.log(m_glass);
//magnify(document.querySelector('canvas'),1);
var img_src="";

function magnify(zoom)
{
        var img,glass,w,h,bw;
        img=document.getElementById('m-canvas');
        console.log(img);
        
        glass=document.createElement('div');
        glass.setAttribute("class","m-glass");

        img.parentElement.insertBefore(glass,img);//insert glass before img
        console.log(img_src);

        //make a background
        if(img_src!=null){
                glass.style.backgroundImage="url('"+Extractor.img.src+"')";
                glass.style.backgroundRepeat="no-repeat";
                glass.style.backgroundSize=(img.width*zoom)+"px "+(img.height*zoom)+"px ";
        }
        bw=3;
        w = glass.offsetWidth / 2;
        h = glass.offsetHeight / 2;

  /* Выполните функцию, когда кто-то перемещает лупу по изображению: */
        glass.addEventListener("mousemove", moveMagnifier);
        img.addEventListener("mousemove", moveMagnifier);
        function moveMagnifier(e) {
                var pos, x, y;
                /* Предотвратите любые другие действия, которые могут возникнуть при перемещении по изображению */
                e.preventDefault();
                /* Получить позиции курсора x и y: */
                pos = getCursorPos(e);
                x = pos.x;
                y = pos.y;
                /* Не допускайте, чтобы лупа находилась вне изображения: */
                if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
                if (x < w / zoom) {x = w / zoom;}
                if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
                if (y < h / zoom) {y = h / zoom;}
                /* Установите положение стекла лупы: */
                glass.style.left = (x - w) + "px";
                glass.style.top = (y - h) + "px";
                /* Покажите, что такое увеличительное стекло "смотреть": */
                glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
        }
            
        function getCursorPos(e) {
                var a, x = 0, y = 0;
                e = e || window.event;
                /* Получить x и y позиции изображения: */
                a = img.getBoundingClientRect();
                /* Вычислите координаты курсора x и y относительно изображения: */
                x = e.pageX - a.left;
                y = e.pageY - a.top;
                /* Consider any page scrolling: */
                x = x - window.pageXOffset;
                y = y - window.pageYOffset;
                return {x : x, y : y};
        }

}
document.addEventListener('DOMContentLoaded', Extractor.init);