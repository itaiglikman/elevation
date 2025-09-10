import mongoose, { Schema } from "mongoose"
import dotenv from 'dotenv';
dotenv.config()

async function dbConnect() {
    try {
        const dbConnectionString = `mongodb+srv://itaig1998_db_user:${process.env.DB_PASS}@cluster0.oypbsmo.mongodb.net/Books?retryWrites=true&w=majority&appName=Cluster0`;
        const db = await mongoose.connect(dbConnectionString);
        console.log("we are connected to mongoDB, db: " + db.connections[0].name);
    } catch (error) {
        console.log(error);
    }
}

const bookSchema = new Schema({
    title: String,
    author: String,
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }] //reference to an array of Review documents
})

const reviewSchema = new Schema({
    book: { type: Schema.Types.ObjectId, ref: 'Book' }, //reference to a Book document
    reviewText: String,
    critic: { type: Schema.Types.ObjectId, ref: 'Critic' } //reference to a Critic document
})

const criticSchema = new Schema({
    name: String,
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }], //reference to an array of Review documents
})


const Book = mongoose.model("Book", bookSchema)
const Review = mongoose.model("Review", reviewSchema)
const Critic = mongoose.model("Critic", criticSchema)

async function runOperations() {
    await dbConnect();

    let b1 = new Book({
        title: "Name of the Wind",
        author: "Patrick Rothfuss",
        reviews: []
    })

    let c1 = new Critic({
        name: "William Jeffery",
        reviews: []
    })

    let r1 = new Review({
        book: b1,
        critic: c1,
        reviewText: "Excellent Book"
    })

    // b1.reviews.push(r1._id)
    // c1.reviews.push(r1._id)

    // b1.save()
    // c1.save()
    // r1.save()

    // const reviews = await Review.find({});
    // console.log(reviews)

    // // single populate
    // const book: any = await Book.findOne({}).populate('reviews').exec();
    // console.log(book)

    // // nested populate
    // const book: any = await Book.findOne({}).populate({
    //     path: 'reviews',
    //     populate: {
    //         path: 'critic'
    //     }
    // }).exec();
    // console.log(book.reviews)

    // // multiple populate:
    // const review = await Review.findOne({}).populate('critic book');
    // console.log(review)

    const critic = await Critic.findOne({}).populate('reviews')
    console.log(critic)


}

runOperations().catch(console.error);