import { ImageSourcePropType } from "react-native/types";

export interface SearchBarProps{
    term: string,
    handleOnChange: (term: string) => void;
    handleOnSubmit: () => void;
}

export interface ResultListProps{
    title: string,
    results: Array<ResultProps>
}

export interface ResultProps{
    name: string
    id: string
    price: string,
    image_url: string,
    rating: number,
    review_count: number
   
}