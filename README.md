# Proyecto-Final-LMSGI

https://rawgit.com/Sebaslc1077/Proyecto-Final-LMSGI/master/news.html

Projecto Final LMSGI - Pagina web de noticas autorellenable (scroll)

Checklist:

1. Maquetación
2. news.html
3. news1.html y news2.html
4. 1.json y 2.json
5. Imagenes (news.html + 1.json y 2.json)
6. news.js (boton mas noticias y evento scroll)
7. RSS.xml
8. boton facebook + boton ampliar noticia
9. CSS
10. Validacion de los ficheros
11. Bibliografia
12. Subir todo a Github.
13. Comprobar funcionamiento adecuado.

Tareas:

1. Realitza la maquetació o layer design del projecte. Entrega un breu document amb l'anàlisi i la planificació al README.md (valen fotos d'esquemes del quadern)

Empiezo plasmando un boceto del layer design que tengo en mente, lo hago de forma vaga y sin concretar mucho por que he tenido malas experiencias con proyectos pasados (hace años) respecto a la gestión del tiempo y el consecuente resultado final...
Independientemente del resto de elementos, dejo una parte sin alterar que sera para la publicidad que posteriormente insertare en news.html, news1.html y news2.html

2. Presenta news.html, la portada, amb 3 notícies (ja escrites al html) 

Comienzo con news.html, añado los metadatos y siguiendo los apuntes (http://fpadistancia.caib.es/mod/page/view.php?id=66482) añado una sección para utilizar el protocolo Open Graph, con el atributo <link> llamo a un fichero .css y a la ultima versión disponible de bootstrap, divido los diferentes apartado con divs y añado las 3 noticias con sus respectivas imagenes y a petición de la tarea del tema 7, incluyo una referencia en HEAD.

3. Emmagatzema 6 noticies més en dos fitxers, data/1.json data/2.json per ser carregades amb js.

Basandome en el ejemplo de (http://fpadistancia.caib.es/mod/page/view.php?id=72573), añado 6 noticias, (3 y 3), con los siguientes datos:

	title, 
	imgbig, 
	imgmid,
	description, (aqui me doy cuenta de que hay un minimo de 300 caracteres, por lo que procedo a editar los ficheros para cumplir dicho requisito)
	datetime
	
4. Codifica news.js en jQuery per fer: "botó carregar més notícies" i l'event "scroll bottom" que, en ser activat qualsevol d'ells, faci una càrrega i presentació de més dades (fins a dues vegades 1.json, 2.json)

5. Inclou rss.xml (especificat al tema 7)

Basandome en el ejemplo de (http://fpadistancia.caib.es/mod/page/view.php?id=66399), creo el fichero .xml añadiendo las tres noticias "principales" de news.html.

6. Codifica news1.html i news2.html, pàgines que corresponen a les dues primeres noticies (darreres publicades). Quan feim clic a la notícia 1 de news.html ens va a news1.html, quan feim clic a la notícia 2 de news.html ens va a news2.html (no és necessari fer-ne més, aquesta tasca es pot automatitzar amb codi de servidor que es veurà a segon curs).

Partiendo de news.html puesto que los metadatos y un trozo del body sera lo mismo, con alguna ligera diferencia, estructuro los divs y añado las noticias requeridas y los hipervinculos necesarios para poder navegar entre html mediante las noticias.
K
7. La plantilla o pàgina de veure una sola notícia news1.html (news2.html és idèntica) ha de contenir una imatge i un vídeo de Youtube responsive. 

Para las dos primeras noticias de news.html, escribo un apartado en cada html para que al acceder a cada respectiva noticia, se vea el titulo, una imagen (grande), una descripcion y un video de youtube responsive incrustado.

8. Cada pàgina ha de contenir les etiquetes meta (amb open graph) per compartir a Facebook el títol, descripció, imatge (gran), nom de l'aplicació i url de la pàgina. 

La intención inicial es añadir un boton para compartir en Facebook y un boton que amplie la noticia (paso 4.), de modo que esta lleve a la pagina web que muestra una unica noticia con su correspondiente imagen, video, noticia completa...
