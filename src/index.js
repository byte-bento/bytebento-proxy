export default {
	async fetch(request, env, ctx) {
	  const apiUrl = "https://newsapi.org/v2/top-headlines?category=technology&language=en&pageSize=12&apiKey=90649dd3169a4e1fb8f467b640bc7dfe";
  
	  const response = await fetch(apiUrl, {
		headers: {
		  "User-Agent": "bytebento-news-proxy/1.0",
		  "Cache-Control": "no-cache",
		  "Pragma": "no-cache"
		}
	  });
  
	  const body = await response.text();
  
	  return new Response(body, {
		headers: {
		  "Access-Control-Allow-Origin": "*",
		  "Content-Type": "application/json",
		  "Cache-Control": "no-store"
		}
	  });
	}
  };
  