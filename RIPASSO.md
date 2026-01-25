[![License](https://img.shields.io/github/license/italia/bootstrap-italia.svg)](https://github.com/italia/bootstrap-italia/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/italia/bootstrap-italia.svg)](https://github.com/italia/bootstrap-italia/issues)
[![Join the #design channel](https://img.shields.io/badge/Slack%20channel-%23design-blue.svg)](https://developersitalia.slack.com/messages/C7VPAUVB3/)
[![Get invited](https://slack.developers.italia.it/badge.svg)](https://slack.developers.italia.it/)
[![18app on forum.italia.it](https://img.shields.io/badge/Forum-18app-blue.svg)](https://forum.italia.it/c/18app-carta-docente)

# Indice
- [Propagazione eventi](#propagazione-eventi)
- [Passare proprietà (children compresi) ed eventi ai figli](#proprietà-passate)
- [Ref](#ref)
- [flushSync](#flushsync)

# Propagazione eventi

👉 **[Prova il codice live frocio, e ricorda di cambaire "export default" in base al esempio che vuoi provare](https://codesandbox.io/p/sandbox/epic-hawking-rc29s4)**

Nell'esempio qui sotto, se premiamo su uno dei 2 bottoni all'interno del div genitore, scateneremo prima il bottone premuto e poi il div.
```js
export default function Toolbar(){ 
  return(
    <div onClick={()=> alert("clicked on toolbar")}>
      <button onClick={(e)=>{
          alert("playing");
        }}>
        play movie
      </button>
       <button onClick={(e)=>{
          alert("uploading")
        }}>
        upload image
      </button>
    </div>
  )
}
```

Per evitare lo scatenarsi del div genitore basterà inserire nei figli il metodo stopPropagation()
```js
export default function Toolbar(){
  return(
    <div onClick={()=> alert("clicked on toolbar")}>
      <button onClick={(e)=>{
          e.stopPropagation();
          alert("playing");
        }}>
        play movie
      </button>
       <button onClick={(e)=>{
          e.stopPropagation(); 
          alert("uploading")
        }}>
        upload image
      </button>
    </div>
  )
}
```

In quest altro esempio invece usiamo anche il metodo onClickCapture nel "GENITORE 2" che, nonostante ci sia o meno lo stopPropagation nei figli, scatenerà per primo il suo evento.<br>
Infatti il bottone "playing" scatenerà "GENITORE 2" per primo e poi se stesso, mentre il bottone "uploading" scatenerà anche lui prima "GENITORE 2", poi se stesso, e infine anche "GENITORE 1" dato che non ha lo stopPropagation() come il bottone di "playing"
```js
export default function Toolbar(){
  return(
    <div onClick={()=> alert("GENITORE 1")}>

      <div onClickCapture={()=> alert("GENITORE 2")}>
        
        <button onClick={(e)=>{
            e.stopPropagation();
            alert("playing");
          }}>
          play movie
        </button>
        <button onClick={(e)=>{ 
            alert("uploading")
          }}>
          upload image
        </button>

      </div>

    </div>
  )
}
```
<br><br><br><br><br>
# Proprietà passate 

👉 **[Prova il codice live frocio](https://codesandbox.io/p/sandbox/r8gycx)**

```js
 //Componente genitore che passa semplicemente la prorpeità movieName al filgio
export default function ToolBar(){
  return(
    <PlayButton movieName="28 anni dopo"></PlayButton> //se le proprità sono valori numerici,variabili o funzioni, vanno messe tra parentesi graffe {}
  )
}

//Componente che prende la proprietà movieName dal ToolBar di prima per riutilizarla nel prossimo componete figlio. Questa volta però gli passiamo solo un evento come proprità, e il movieName, che abbiamo messo all'interno, verrà automaticamente passato come children. 
function PlayButton({movieName}){ 
  function handlePlayClick(){
    alert("playing");
  }
  return(
    <Button
      onSmash={handlePlayClick}>
        Play {movieName}
      </Button>
  )
}

// Qui infatti ci sarà l'evento passato, e poi anche il children che però sta volta va inizializzato come proprità per poterlo utilizzare
function Button({onSmash,children}){
  return(
    <button 
      onClick={onSmash}>
        {children}
      </button>
  )
}
```
<br><br><br><br><br>
# Ref

👉 **[Prova il codice live frocio, e ricorda di cambaire "export default" in base al esempio che vuoi provare](https://codesandbox.io/p/sandbox/3mf8rz)**

## Esempio 1 Ref 
Uso di Ref per ottenere il valore di count precedente. Codice e Funzionamento: 

```js
import { useState, useEffect, useRef } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const prevCount = useRef(count);

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <>
      <p>Attuale: {count}</p>
      <p>Precedente: {prevCount.current}</p>

      <button onClick={() => setCount(c => c + 1)}>
        Incrementa
      </button>
    </>
  );
}
```
| Spiegazione | Valori | 
| :--- | :---: | 
| All'inizio, "count" e "prevCount" valgono entrambi 0:  | count = 0 <br> prevCount = 0 | 
| Al click del bottone, SetCount aumenta il valore di "count" di 1, quindi avremo: | count = 1 <br> prevCount = 0 | 
| Avendo fatto il setCount, il componente verra renderizzato nuovamente. Quindi nella pagina vedremo proprio i valori di prima, ovvero: | count = 1 <br> prevCount = 0. | 
| Solo alla fine della renderizzazione partirà lo useEffect che setterà il "prevCount" uguale a "count", così avremo: | count = 1 <br> prevCount = 1 |

Nonostante le 2 variabili abbiano lo stesso valore `ADESSO`, noi nella pagina vediamo quello che avevamo `PRIMA`, `quando il componente è stata renderizzata`, ovvero: count = 1  prevCount = 0
<br><br><br>
## Esempio 2 Ref: Ref applicato per setInterval, SetTimeout
In questo esempio, utilizziamo il Ref semplicemente per referenziare il setInterval in modo da poterlo fermare quando premiamo il tasto stop

```js
export default function StopDefault(){
    const [startTime,setStartTime]=useState(null);
    const [now,setNow]=useState(null);
    const intervalRef=useRef(null);

    function handleStart(){
        setStartTime(Date.now());
        setNow(Date.now());
        clearInterval(intervalRef.current)
        intervalRef.current= setInterval(()=>{
            setNow(Date.now());
        },10);
    }
    function handleStop(){
        clearInterval(intervalRef.current)
    }
    let secondsPassed=0;
    if(startTime!=null && now!=null)
        secondsPassed=(now-startTime)/1000;

    return(
        <>

        <h1>time passer: {secondsPassed}</h1>

        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        </>
    )

}
```

<br><br><br>
## Esempio Ref 3: Ref applicato agli elementi
Il Ref lo si può usare sugli elementi html anche per affidargli le proprità focus(), select(), oppure come in questo esempio per fare uno scroll fino al'elemento desiderato<br>
`ATTENZIONE`: per provare il funzionamento di questo codice dovrai ridurre l'altezza della tua finestra restringendola, in modo da garantire lo scroll

```js
export default function ChceckScrolling(){
    const firstRef=useRef(null)
    const secondRef=useRef(null)
    const thirdRef=useRef(null)

    function handleScrollToFirst(){
        firstRef.current.scrollIntoView({
            behavior:'smooth',
            block:'nearest',
            inline:'center'
        });
    }

    function handleScrollToSecond(){
        secondRef.current.scrollIntoView({
            behavior:'smooth',
            block:'nearest',
            inline:'center'
        });
    }

    function handleScrollToThird(){
        thirdRef.current.scrollIntoView({
            behavior:'smooth',
            block:'nearest',
            inline:'center'
        });
    }
    return(
        <>
            <nav>
                <button onClick={handleScrollToFirst}>first</button>
                <button onClick={handleScrollToSecond}>second</button>
                <button onClick={handleScrollToThird}>third</button>
            </nav>
            <div>
                <ul>
                    <li>
                        <img src="https://i.imgur.com/MK3eW3Am.jpg" ref={firstRef}/>
                    </li>
                    <li>
                        <img src="https://i.imgur.com/MK3eW3Am.jpg" ref={secondRef}/>
                    </li>
                    <li>
                        <img src="https://i.imgur.com/MK3eW3Am.jpg" ref={thirdRef}/>
                    </li>
                </ul>
            </div>
        </>
    )
}
```
<br><br><br><br><br>
# FlushSync

👉 **[Prova il codice live frocio, e ricorda di cambaire "export default" in base alla funzione che vuoi provare](https://codesandbox.io/p/sandbox/8qthdf)**<br>
In questo esempio flushSync dice a React di eseguire prima il codice al suo interno, quindi set text e setTodos<br>
L’ordine diventa:
  1. setTet e setTodos
  2. render immediato
  3. DOM aggiornato (nuovo `<li>` esiste)
  4. scrollIntoView sul ultimo elemento

<br>`ATTENZIONE`: per provare il funzionamento di questo codice dovrai ridurre l'altezza della tua finestra restringendola, in modo da garantire lo scroll

```js
let nextId= 0;
let initialTodos=[{id:0,text:'123'}];

export default function TodoList(){
    const listRef=useRef(null);
    const [text,setText]=useState('')
    const [todos,setTodos]=useState(initialTodos)

    function handleAdd(){
        const newTodo={id:nextId++,text:text}

        flushSync(()=>{
            setText('');
            setTodos([...todos,newTodo])
        })
        listRef.current.lastChild.scrollIntoView({
            behavior:'smooth',
            block:'nearest',
            inline:'center'
        });
    }

    return(
        <>
            <button onClick={handleAdd}>
                add
            </button>
            <input 
                value={text}
                onChange={e=>setText(e.target.value)}/>
            
            <ul ref={listRef}>
                 {todos.map(t=>(
                    <li key={t.id}>{t.text}</li>
                 ))}
            </ul>
        </>
    )
}
```