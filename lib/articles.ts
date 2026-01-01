import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import moment from 'moment';
import { remark } from 'remark';
import html from 'remark-html';
import type { ArticleItem } from '../types';

const articlesDirectory = path.join(process.cwd(), 'articles');

export const getSortedArticles = (): ArticleItem[] => { 
    const fileNames = fs.readdirSync(articlesDirectory);

    const articles = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, '');
        const fullPath = path.join(articlesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);
        return {
            id,
            title: matterResult.data.title,
            date: matterResult.data.date,
            summary: matterResult.data.summary,
            image: matterResult.data.image,
        };
    });

    return articles.sort((a, b) => {
        const format = 'DD-MM-YYYY';
        const dateA = moment(a.date, format);
        const dateB = moment(b.date, format);
        if  (dateA.isBefore(dateB)) {
            return 1;
        } else {
            return -1;
        }
    });
}

export const getArticleData = async (id: string) => {
    const fullPath = path.join(articlesDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents); 
    const processedContent = await remark().use(html).process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
        id,
        contentHtml,
        title: matterResult.data.title,
        date: moment(matterResult.data.date,"DD-MM-YYYY").format("MMMM Do, YYYY"),
        summary: matterResult.data.summary,
    };
}