
import prisma from 'lib/prisma'

const handleMissingData = ( res, parameter) => {
    return res
        .status(400)
        .json({ message: `Missing required parameter '${parameter}'`})
}

export default async function handler(req, res) {
    
    if (req.method === 'GET') {
        const trips = await prisma.trip.findMany();
        res.status(200).json(trips);        
        
        return;
    }

    if (req.method === 'POST') {
        
        const {user, name, start_date, end_date} = req.body;
        console.log(req.body);

        if (!user) {
            return handleMissingData(res, 'user');
        }

        if (!name) {
            return handleMissingData(res, 'name');
        }

        await prisma.trip.create({
            data: {
                user,
                name,
                start_date, 
                end_date,
            },
        });

        return res.status(200).end();
    }

    res.status(405).json({ message: 'Method Not Allowed' });
}