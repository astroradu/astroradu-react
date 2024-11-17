import {ArticleContent} from "./articleContent.types";
import {Equipment} from "./equipment.types";

export interface PortfolioEntry{
    title: string,
    uploadDate: number,
    integrationType: string,
    wrapper: string,
    gallery: Array<string>,
    content: Array<ArticleContent>,
    equipment: Array<Equipment>
}