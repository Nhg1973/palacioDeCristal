
let $map = document.getElementById('locales');


let obtenerSector =(e) => {

    if (e.x <215 && e.y <306) {
        
        var texto = document.getElementById('msjProduc');texto.innerText="Juan produce 50 lechugas cada 20 dias y las quiere compartir contigo";
        return 1; 
    } else if( e.x > 215 && e.x <443 && e.y <=250) {
        var texto = document.getElementById('msjProduc');texto.innerText="Maxi en su terraza produce super tomates, tantos que le alcanzan para toda su familia, amigos y familiares.";
        return 2
    }else if( e.x > 443 && e.x <681 && e.y <=283) {
        var texto = document.getElementById('msjProduc');texto.innerText="Tomas es productor tiempo completo y nos provee de todo tipo de verduras de hoja";
        return 3
    }else if( e.x > 681 && e.x <830 && e.y <=250) {
        var texto = document.getElementById('msjProduc');texto.innerText="Fabian hace Brenjenas y frutillas.";
        return 4
    }else if( e.x > 30 && e.x <139 && e.y > 306 && e.y <=580) {
        var texto = document.getElementById('msjProduc');texto.innerText="Sole es una genia";
        return 6
    }else if( e.x > 139 && e.x <275 && e.y > 306 && e.y <=580) {
        var texto = document.getElementById('msjProduc');texto.innerText="Valentina, administra todo el negocio";
        return 7
    }else if( e.x > 275 && e.x <480 && e.y > 357 && e.y <=580) {
        var texto = document.getElementById('msjProduc');texto.innerText="Mateo tiene toda la logistica, es quien hace que el producto llegue a tu casa";
        return 8
    }else if( e.x > 681 && e.x <830 && e.y > 250 && e.y <=357) {
        var texto = document.getElementById('msjProduc');texto.innerText="Juan y Aide, tien un local a la calle ellos pueden mostrarte nuestros productos y podras conocerlos";
        return 9
    } else if( e.x > 480 && e.x <830 && e.y > 357 && e.y <=580) {
        var texto = document.getElementById('msjProduc');texto.innerText="En un terreno baldio producimos 100 Kg. de papas para las canastes";
        return 10
    } else {
        var texto = document.getElementById('msjProduc');texto.innerText="Genial";
        return 5
    }

}

$map.addEventListener("click",function(e) {

    let sector = obtenerSector(e);
    var foto = document.getElementById('intro');
    foto.src="./imagenes/foto"+sector+".jpg";
    
    console.log(foto.src);
      
    
})






   


