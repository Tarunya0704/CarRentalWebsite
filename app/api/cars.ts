import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../prisma/clientt

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const { pickup, dropoff, startDate, endDate } = req.query;

      const cars = await prisma.car.findMany({
        where: {
          bookings: {
            none: {
              OR: [
                {
                  startDate: {
                    lte: new Date(endDate as string),
                  },
                  endDate: {
                    gte: new Date(startDate as string),
                  },
                },
              ],
            },
          },
        },
      });

      res.status(200).json(cars);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch cars' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
