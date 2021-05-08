import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if ((req.method = "POST")) {
    const video = await postVideo(req.body);
    res.json(video);
  } else if (req.method === "GET") {
    const videos = await prisma.video.findMany();
    res.json(videos);
  }
};

const postVideo = async ({ title, description, url }) => {
  return await prisma.video.create({
    data: {
      title: title,
      description: description,
      url: url,
    },
  });
};
