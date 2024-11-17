import {ArticleContent} from "./articleContent.types";
import {PostEquipmentInfo} from "./postEquipmentInfo";
import {PostSpecs} from "./postSpecs.types";
import {PostAstrobinInfo} from "./postAstrobinInfo.types";

export interface Post {
    title: string,
    uploadDate: number,
    integrationType: string,
    wrapper: string,
    astrobinIotd?: string,
    gallery: Array<string>,
    content: Array<ArticleContent>,
    equipment: Array<PostEquipmentInfo>,
    specs: PostSpecs,
    astrobin: PostAstrobinInfo
}