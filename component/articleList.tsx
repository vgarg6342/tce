import type { ArticleItem } from "@/types";
import Link from "next/link";
import Image from "next/image";

interface ArticleListProps {
    articles: ArticleItem[];
}

export default function ArticleList ({ articles }: ArticleListProps){
    return (
        <div className="flex flex-col md:grid md:grid-cols-3  gap-10">
            {articles.map((article) => 
                <div key={article.id} className="border rounded-lg pb-4 bg-neutral-100 hover:bg-neutral-200 transition-colors duration-300  ">
                    <Link  href={`/blog/${article.id}`}> 
                        <Image src={article.image} alt={article.title} width={600} height={400} className=" mx-auto rounded-t-lg"/>
                        <p className= "text-xl hover:text-neutral-700">{article.title} </p>
                        <p className="text-sm text-gray-500"> {article.date} </p>
                        <p className="text-sm text-gray-500"> {article.summary ?? "summary not available"} </p>
                    </Link>
                </div>
            )}   
        </div>
    )}