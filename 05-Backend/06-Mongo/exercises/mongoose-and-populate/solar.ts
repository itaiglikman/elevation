import mongoose, { Schema } from "mongoose"
import dotenv from 'dotenv';
dotenv.config()

async function dbConnect() {
    try {
        const dbConnectionString = `mongodb+srv://itaig1998_db_user:${process.env.DB_PASS}@cluster0.oypbsmo.mongodb.net/Solar?retryWrites=true&w=majority&appName=Cluster0`;
        const db = await mongoose.connect(dbConnectionString);
        console.log("we are connected to mongoDB, db: " + db.connections[0].name);
    } catch (error) {
        console.log(error);
    }
}

const systemSchema = new Schema({
    name: String,
    planets: [{ type: Schema.Types.ObjectId, ref: 'Planet' }]
})

const planetSchema = new Schema({
    name: String,
    system: { type: Schema.Types.ObjectId, ref: 'System' },
    visitors: [{ type: Schema.Types.ObjectId, ref: 'Visitor' }]
})

const visitorSchema = new Schema({
    name: String,
    homePlanet: { type: Schema.Types.ObjectId, ref: 'Planet' },
    visitedPlanets: [{ type: Schema.Types.ObjectId, ref: 'Planet' }]
})

const System = mongoose.model('System', systemSchema);
const Planet = mongoose.model('Planet', planetSchema);
const Visitor = mongoose.model('Visitor', visitorSchema);

async function runOperations() {
    await dbConnect();

    // const s1 = new System({ name: 'sun' });
    // const p1 = new Planet({ name: 'earth' });
    // const p2 = new Planet({ name: 'mars' });

    // s1.planets.push(p1._id)
    // s1.planets.push(p2._id)
    // p1.system = s1._id;
    // p2.system = s1._id;

    // const v1 = new Visitor({
    //     name: 'Luke Skywalker',
    //     homePlanet: p1._id,  
    //     visitedPlanets: [p2._id]  
    // });

    // const v2 = new Visitor({
    //     name: 'John Carter',
    //     homePlanet: p2._id,  
    //     visitedPlanets: [p1._id]  
    // });

    // p1.visitors.push(v2._id);  
    // p2.visitors.push(v1._id);  

    // s1.save()
    // p1.save()
    // p2.save()
    // v1.save();
    // v2.save();

    // visitor planet's list:
    // const visitor = await Visitor.findOne({ name: "John Carter" }).populate('visitedPlanets').exec();
    // visitor.visitedPlanets.forEach((p: any) => console.log(p.name));

    // all visitors on a planet:
    const planetWithVisitors:any = await Planet.find({ name: 'earth' }).populate("visitors")
    const visitors= planetWithVisitors.visitors
    console.log(planetWithVisitors.visitors.forEach())
    console.log(planetWithVisitors)

    // console.log(visitList.visitedPlanets);


}

runOperations().catch(console.error);