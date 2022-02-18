import nc from "next-connect";
import cors from "cors";

const handler = nc()
  // use connect based middleware
  .use(cors())
  .post(async (req, res) => {
    const response = await fetch('https://api-content.ingresso.com/v0/templates/highlights/1/partnership/home');
    console.log(response);
  });

export default handler;