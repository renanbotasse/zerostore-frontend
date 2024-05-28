export interface ProductState {
    _id: string;
    product_id: number;
    product_name: string;
    product_description: string;
    product_price: number;
    product_available: number;
    product_platform: string;
    product_type: string;
    product_img: string[];
    product_new: boolean;
    product_sales: boolean;
    __v: number;
    product_video: any;
}
