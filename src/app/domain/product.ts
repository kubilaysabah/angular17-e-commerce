export interface Product {
  productId: string;
  productName: string;
  productPrice: number;
  productDescription: {
    description?: string;
    model?: string;
    colors?: string[];
    driver_sensitivity?: string;
    frequency_response_range?: string;
    microphone_sensitivity?: string;
    bluetooth_version?: string;
    weight?: string;
  };
  productImage: string[];
}
