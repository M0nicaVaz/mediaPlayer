<div align="center">

# Media Player

Um player de músicas!
<br><br>
<a href = "https://m0nicavaz.github.io/mediaPlayer/"> Veja em funcionamento. </a>

## Preview

<img src="https://github.com/M0nicaVaz/mediaPlayer/blob/master/assets/images/preview.gif?raw=true" width="680px" >

### Desafios

A barra de progresso foi um desafio e tanto, mas nada comparado a escolher a música através da lista, sem mudar a ordem de reprodução. Para isso encontrei a seguinte solução:

```
 musicQueue.addEventListener('click', (e) => {
 let obj = songList.findIndex((obj) => obj.title === e.target.innerText);
 index = obj;
 song.src = songList[index].src;
});
```

## Feito com:

HTML
CSS
JavaScript

E também com 💜 por <a href="https://www.linkedin.com/in/monica-vaz/"> Monica Vaz </a>

</div>
