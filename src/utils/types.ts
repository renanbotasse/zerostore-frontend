// types.ts or a similar file

export interface ProductState {
    product_reference: number;
    product_name: string;
    product_description: string;
    product_price: number;
    product_quantity: number;
    product_platform: string;
    product_type: string;
    product_img: string[];
    product_video: string;
    product_status: string;
}

export interface CartItem extends ProductState {
    quantity: number;
}
