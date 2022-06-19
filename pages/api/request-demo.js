import NextCors from "nextjs-cors";
import dbConnect from "../../lib/dbConnect";
import RequestDemo from "../../models/RequestDemo";

export default async function handler(req, res) {
  const { method } = req;

  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  await dbConnect();

  switch (method) {
    case "POST":
      try {
        console.log("getting this far");
        const { firstName, lastName, email, format, page } = req.body;

        const submission = await RequestDemo.create({
          firstName,
          lastName,
          email,
          format,
          page,
        });
        res.status(201).json({ success: true, data: submission });
      } catch (err) {
        console.log("getting this far 2");

        res.status(400).json({ error: err });
      }
      break;
    default:
      console.log("getting this far 3");

      res.status(400).json({ success: false });
      break;
  }
}
