import { gql } from "graphql-request"
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async(
    category?: Category | string,
        keywords?: string,
        isDynamic?:boolean,
    ) => {
      let headers = {};
      
      let graphql = JSON.stringify({
        query: `  query myQuery {
          myQuery(
            access_key: "727451bee66328ccc21039edb3b630f8"
            
          ) {
            data {
              author
              category
              country
              description
              image
              language
              published_at
              source
              title
              url
            }
            pagination {
              count
              limit
              offset
              total
            }
          }
        }`,
        variables: {
         
          categories: category,
          keywords: keywords,
        }
      })
      
      let requestOptions = {
      method: 'POST',
     // cache: isDynamic ? "no-cache":"default",
      next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
      headers: {"Content-Type": "application/json",
      'Authorization':' apikey apace::stepzen.io+1000::d748edf21367ff1383ab70bd5c9f55678b9d7e75ef835c91313faa0da6c711af'},
      body: graphql
      };
      
       const res = await fetch("https://apace.stepzen.net/api/coy-kudu/__graphql", requestOptions)
      

      
          
const newsResponse = await res.json();





//Sort function by images vs not images present

const news = sortNewsByImage(newsResponse.data.myQuery)



return news;
    }
    export default fetchNews;
 