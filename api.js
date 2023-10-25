const searhform= document.querySelector('#searhform');

async function  getApi(search){
      const res = await  fetch(`https://api.tvmaze.com/search/shows?q=${search}`);
      const data =  await res.json();
      console.log(data);
      for(let i=0;i<data.length;i++){
            const imgEl = document.createElement('img');
            imgEl.src = data[i].show.image.medium;
            document.body.append(imgEl);

      }
}



searhform.addEventListener('submit',function (e){
      e.preventDefault()
      const search = searhform[0].value
      // fetch(`https://api.tvmaze.com/search/shows?q=${search}`)
      // .then(res=>res.json())
      // .then(data=>{
      //       const imgEl = document.createElement('img');
      //       imgEl.src =  data[0].show.image.medium;
      //       document.body.append(imgEl);
      //       console.log(data);
      // })
      getApi(search)
      
})


