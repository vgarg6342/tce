import { getSortedArticles } from "@/lib/articles"
import ArticleList from "@/component/articleList";

export default function Blog() {

   const articles = getSortedArticles()
   console.log(articles)
    return (
       <section className="mx-auto w-11/12 md:w-1/2 mt-20 flex flex-col gap-16 mb-20">
         <header className="text-6xl font-light text-center">
            <h1> Blogs</h1>
            <ArticleList articles={articles} />
         </header>
         <section className="md:grid md:grid-cols-2 flex flex-col gap-10">
            
         </section>
       </section>
    )
}