import mongoose, { Schema } from "mongoose";

interface Isub {
    name: string,
    path: string
}

interface Icategory {
    name: string, 
    path: string,
    subs?: Isub[],
}

const subSchema = new Schema<Isub>({
    name: {type: String, required: true},
    path: {type: String, required: true}
})

const categorySchema = new Schema<Icategory>({
    name: {type: String, required: true},
    path: {type: String, required: true},
    subs: {type: [subSchema], required: true},
})

delete mongoose.models.Category

const Category = mongoose.model<Icategory>('Category', categorySchema)

export default Category
