
import Article from "./Article";

export default function ArticleList ({posts}) {
  //console.log(posts)
 //const listOfArticles = []; 
  
 
 //for (const post of posts) {
 //listOfArticles.push( <Article key = {post.id} title = {post.title} date = {post.date} preview = {post.preview}></Article>) 
 //}
  
 
     return (
   
   <main>
     
     {posts.map((post) => {
      const {id, title, date, preview, minutes} = post
   return(<Article key = {id} title ={title} date = {date} preview = {preview} minutes = {minutes} />) })}   
 
    </main>
  )
}


/*const ArticleList = ({posts}) => 
{
  return(
  <main> 
        </main>
        
)}; */
//export default ArticleList;