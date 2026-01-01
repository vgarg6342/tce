
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import {getArticleData} from "@/lib/articles";

const Article = async ({ params }: { params: Promise<{ slug: string }> }) => { 
    
    // 2. Await the params
    const { slug } = await params;
    
    console.log(slug);
    const articleData = await getArticleData((await params).slug); 
    return (
        <section className="mx-auto w-11/12 md:w-1/2 mt-20 flex flex-col gap-8 mb-20">
            <div className="flex justify-between ">
                <Link href="/blog" className="flex items-center gap-2 text-blue-600 hover:underline">
                    <ArrowLeftIcon className="h-4 w-4"/> 
                    <p>Back to Blogs</p>
                </Link>
                <p>{articleData.date.toString()}</p>
            </div>
            <article className="article" dangerouslySetInnerHTML={{__html:articleData.contentHtml}}/>
        </section>
    )
}

export default Article;