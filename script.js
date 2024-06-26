


let input = document.querySelector('input')
let btn = document.querySelector('.btn')
let contentContainer = document.querySelector('.content')
btn.addEventListener('click', async () => {

  //     let url = `
  // https://newsapi.org/v2/everything?domains=wsj.com&apiKey=ea6d1e1c1a4941bc8ab64f1a507a5965`

  // let url=`https://newsapi.org/v2/top-headlines?q=${input.value
  // }country=in&apiKey=ea6d1e1c1a4941bc8ab64f1a507a5965`

  let url = `https://newsdata.io/api/1/latest?apikey=pub_47296da41c7b8e25517a2bcd8de857d1ae20e&q=pegasus&language=en`
  let news = await fetch(url)
  //
  let ans = await news.json()
  contentContainer.style.display = 'block'

  for (let key of ans.results) {
    let div = document.createElement('div')
    let h1 = document.createElement('h1')

    let p = document.createElement('p')

    let person_name = document.createElement('h2')
    let readmore = document.createElement('a')

    let img = document.createElement('img')

    img.src=key.image_url
    readmore.textContent = 'READ MORE'
    readmore.href = key.link
    readmore.target = '_blank'
    div.className = 'item'
    h1.textContent = key.title
    p.textContent = key.description
    person_name.textContent = `BY ${key.creator}`

    div.appendChild(h1)

    div.appendChild(p)
    div.appendChild(readmore)
    
    div.appendChild(person_name)
    div.appendChild(img)
    
    contentContainer.appendChild(div)
    console.log(key.title)

  }
  console.log(ans)
})