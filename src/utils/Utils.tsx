import {PostExposureInfo} from "../types/postExposureInfo.types";

export function secondsToHoursAndMinutes(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    let result = "";

    if (hours > 0) {
        result += `${hours}h `;
    }

    result += `${minutes}min`;

    return result.trim();
}

export function exposureInfoToHoursAndMinutes(exposureInfo: PostExposureInfo): string {
    const seconds = exposureInfo.time * exposureInfo.count
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    let result = "";

    result += `${exposureInfo.count} x ${exposureInfo.time}s:\xa0\xa0`;

    if (hours > 0) {
        result += `${hours}h`;
    }

    result += `${minutes}min`;

    return result.trim();
}

export function formatTimestamp(timestamp: number): string {
    const now = new Date();
    const date = new Date(timestamp);

    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);

    const diffInMilliseconds = now.getTime() - timestamp;

    const seconds = diffInMilliseconds / 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;
    const days = hours / 24;
    const months = days / 30;
    const years = days / 365;

    let timeAgo: string;
    if (years >= 1) {
        timeAgo = `${Math.floor(years)} year${Math.floor(years) > 1 ? 's' : ''} ago`;
    } else if (months >= 1) {
        timeAgo = `${Math.floor(months)} month${Math.floor(months) > 1 ? 's' : ''} ago`;
    } else if (days >= 1) {
        timeAgo = `${Math.floor(days)} day${Math.floor(days) > 1 ? 's' : ''} ago`;
    } else if (hours >= 1) {
        timeAgo = `${Math.floor(hours)} hour${Math.floor(hours) > 1 ? 's' : ''} ago`;
    } else if (minutes >= 1) {
        timeAgo = `${Math.floor(minutes)} minute${Math.floor(minutes) > 1 ? 's' : ''} ago`;
    } else {
        timeAgo = `${Math.floor(seconds)} second${Math.floor(seconds) > 1 ? 's' : ''} ago`;
    }

    return `${formattedDate}\xa0\xa0•\xa0\xa0${timeAgo}`;
}