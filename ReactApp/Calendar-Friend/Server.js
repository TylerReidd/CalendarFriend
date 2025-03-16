//Setup the Server File:
import { MongoClient, ServerApiVersion } from 'mongodb';
import express from 'express';
import cors from 'cors';
import { error } from 'console';
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const username = encodeURIComponent("service-user");
const password = encodeURIComponent("qb7HIiNvnaQRMblg");
const uri = "mongodb+srv://" + username + ":" + password + "@calendarfriendmainclust.y8zmw.mongodb.net/?retryWrites=true&w=majority&appName=CalendarFriendMainCluster";
const port = 3000;

const client = new MongoClient(uri,
{
  serverApi:
  {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const database = client.db('MainDB');



//POST Methods:

app.post('/CreateEvent', async(req,res) => {
    try {
        console.log("Recieved Request", req.body)
        await client.connect();

        const {events} = req.body;

        if (!events || events.length === 0)
            {
            return res.status(400).json({message: "No events"})
        }

        const eventsCollection = database.collection("Events")

        const insertResult = await eventsCollection.insertMany(events)

        res.status(201).json({message: "Events Added successfully", insertedIds: insertResult.insertedIds});
    } catch (err) {
        res.status(500).json({message: "error adding events", error: err.message})
    } finally {
        await client.close()
    }
});

app.post('/CreateUser', async (req, res) =>
{
    try
    {
        await client.connect();

        const { firstName, lastName, email, password } = req.body;

        if (firstName == null || lastName == null || email == null || password == null)
        {
            return res.json({ success:false });
        }
        else
        {
            const usersCollection = database.collection('Users');

            const searchQuery = {};
            searchQuery.email = email;
    
            const user = await usersCollection.findOne(searchQuery);

            if(user)
            {
                return res.json({ success:true, userExists:true });
            }
            else
            {
                const NewUser = 
                ({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password
                });

                const newUserID = await usersCollection.insertOne(NewUser);

                return res.json({ success:true, userExists:false, newID:newUserID});
            }
        }
        await client.close();
    }
    catch (err)
    {
        res.status(400).json({ message: err.message });
    }
});


app.post('/AuthenticateUser', async (req, res) =>
{
    try
    {
        await client.connect();

        const { email, password } = req.body;

        if (email == null || password == null)
        {
            return res.status(400).json({ message: "Missing Required Parameters: Email or Password" });
        }


        const usersCollection = database.collection('Users');

        const searchQuery = {};
        searchQuery.email = email;
        searchQuery.password = password;

        const user = await usersCollection.findOne(searchQuery);

        if (!user)
        {
            res.json({success:false});
        }
        else
        {
            const response = 
            {
                success : true,
                firstName : user.firstName,
                lastName : user.lastName,
                email : user.email
            };
            res.json(response);
        }        

        await client.close();
    }
    catch (err)
    {
        res.status(500).json({ message: err.message });
    }
});



//Start Listening on a Port:
app.listen(port, () =>
{
    console.log(`Server running at http://localhost:${port}`);
});