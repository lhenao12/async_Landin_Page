
const API = 'https://aliexpress-datahub.p.rapidapi.com/store_item_search?storeId=1102051418&sellerId=231651707'
const content = null || document.getElementById('content');
const options = {
	method: 'GET',
	headers: {
        'X-RapidAPI-Key': 'a3550d53dfmsh53e210cc661a5e2p1d7830jsn2529be973736',
		    'X-RapidAPI-Host': 'aliexpress-datahub.p.rapidapi.com'
	}
};

async function fetchData(urlAPi){
     const response = await fetch(urlAPi, options);
     const data = await response.json();
     return data;
}

(async () => {

     try {
      const videos = await fetchData(API);
       let view = `
        ${videos.result.resultList.map(video => `
        <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.item.image}" alt="${video.item.itemId}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.item.title}
          </h3>
        </div>
      </div>
        ` ).slice(0,20).join('')}
  
       `;
       content.innerHTML = view;
     } catch (error) {
          console.log(error);
     }

})();