import mongoose, {model, Schema, models} from "mongoose";


const ProductSchema = new Schema({
  _id: { type: String, default: '' }, // Map "id" to "_id" for MongoDB
  title: { type: String, required: true },
  description: { type: String, required: true },
  tags: [{ type: String }],
  options: [
    {
      name: { type: String },
      type: { type: String },
      values: [
        {
          id: { type: Number },
          title: { type: String }
        }
      ],
      display_in_preview: { type: Boolean }
    }
  ],
  variants: [
    {
      id: { type: Number },
      sku: { type: String },
      cost: { type: Number },
      price: { type: Number },
      title: { type: String },
      grams: { type: Number },
      is_enabled: { type: Boolean },
      is_default: { type: Boolean },
      is_available: { type: Boolean },
      is_printify_express_eligible: { type: Boolean },
      options: [{ type: Number }],
      quantity: { type: Number }
    }
  ],
  images: [
    {
      src: { type: String },
      variant_ids: [{ type: Number }],
      position: { type: String },
      is_default: { type: Boolean },
      is_selected_for_publishing: { type: Boolean },
      order: { type: Number, default: null }
    }
  ],
  created_at: { type: Date },
  updated_at: { type: Date },
  visible: { type: Boolean },
  is_locked: { type: Boolean },
  blueprint_id: { type: Number },
  user_id: { type: Number },
  shop_id: { type: Number },
  print_provider_id: { type: Number },
  print_areas: [
    {
      variant_ids: [{ type: Number }],
      placeholders: [
        {
          position: { type: String },
          images: [
            {
              id: { type: String },
              name: { type: String },
              type: { type: String },
              height: { type: Number },
              width: { type: Number },
              x: { type: Number },
              y: { type: Number },
              scale: { type: Number },
              angle: { type: Number },
              src: { type: String }
            }
          ]
        }
      ],
      background: { type: String }
    }
  ],
  print_details: [{ type: Schema.Types.Mixed }], // Flexible structure for future data
  sales_channel_properties: [{ type: Schema.Types.Mixed }], // Flexible structure
  is_printify_express_eligible: { type: Boolean },
  is_printify_express_enabled: { type: Boolean },
  is_economy_shipping_eligible: { type: Boolean },
  is_economy_shipping_enabled: { type: Boolean },
  is_deleted: { type: Boolean },
  original_product_id: { type: String },
  views: [
    {
      id: { type: Number },
      label: { type: String },
      position: { type: String },
      files: [
        {
          src: { type: String },
          variant_ids: [{ type: Number }]
        }
      ]
    }
  ]
}, { timestamps: false }); // Disable Mongoose's automatic timestamps since we have created_at/updated_at

// Create the model
export const Product = models.Product || model('Product', ProductSchema);
