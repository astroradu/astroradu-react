import {PostExposureInfo} from "./postExposureInfo.types";

export interface PostSpecs {
    totalIntegration: number,
    calibrations: string,
    binning: number,
    temp: number,
    exposures: Array<PostExposureInfo>
}